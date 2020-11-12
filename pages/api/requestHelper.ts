import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import {
  eZipState,
  tCoordinates,
  iSponsorData,
} from "./../../interfaces/index";
import { useSelector } from "react-redux";
import { KynectState } from "../reducers/kynectReducer";

export const getSponsorDataFromWebAlias: any = (
  webalias: any,
  callbackSetSiteSponsor: Dispatch<SetStateAction<any>>
) => {
  console.log("webalias", webalias);

  let url: string =
    process.env.REACT_APP_WEKYNECT_MARKETING_API + "/" + webalias;
  let headers = {
    // Authorization: "Basic TVlTVFJFQU06dj9yKnotN1puNm8rYkdrIVI+XlhFUWpT",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  axios({
    method: "get",
    url: url,
    data: {},
    headers,
  }).then((response) => {
    let tempSponsorData = {
      id: response.data.Id,
      backOfficeId: response.data.BackOfficeId,
      firstName: response.data.FirstName,
      lastName: response.data.LastName,
      companyName: response.data.CompanyName,
      webAlias: response.data.WebAlias,
      imageUrl: response.data.ImageUrl,
      phone1: response.data.Phone1,
      phone2: response.data.Phone2,
      email: response.data.Email,
      country: response.data.Country,
      state: response.data.State,
      aboutMe: response.data.AboutMe,
      customerStatusId: response.data.CustomerStatusId,
      rankId: response.data.RankId,
      rankDescription: response.data.RankDescription,
      socialMediaUrls: response.data.SocialMediaUrls,
    };

    callbackSetSiteSponsor(tempSponsorData);
  });
};

export const getSponsorDataAssociateID: any = (
  associateID: any,
  callbackSetSiteSponsor: Dispatch<SetStateAction<any>>,
  callbackIsLoading: Dispatch<SetStateAction<boolean>>,
  callbackNotFound: Dispatch<SetStateAction<boolean>>,
  callbackSetSiteSponsorParent?: Dispatch<SetStateAction<any>>
) => {
  let url: string =
    process.env.REACT_APP_WEKYNECT_MARKETING_API + "/" + associateID;

  let headers = {
    // Authorization: "Basic TVlTVFJFQU06dj9yKnotN1puNm8rYkdrIVI+XlhFUWpT",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  axios({
    method: "get",
    url: url,
    data: {},
    headers,
  }).then(
    (response) => {
      let tempSponsorData = {
        id: response.data.Id,
        backOfficeId: response.data.BackOfficeId,
        firstName: response.data.FirstName,
        lastName: response.data.LastName,
        companyName: response.data.CompanyName,
        webAlias: response.data.WebAlias,
        imageUrl: response.data.ImageUrl,
        phone1: response.data.Phone1,
        phone2: response.data.Phone2,
        email: response.data.Email,
        country: response.data.Country,
        state: response.data.State,
        aboutMe: response.data.AboutMe,
        customerStatusId: response.data.CustomerStatusId,
        rankId: response.data.RankId,
        rankDescription: response.data.RankDescription,
        socialMediaUrls: response.data.SocialMediaUrls,
      };

      callbackIsLoading(false);
      callbackSetSiteSponsor(tempSponsorData);
      callbackSetSiteSponsorParent &&
        callbackSetSiteSponsorParent(tempSponsorData);
    },
    (error) => {
      callbackIsLoading(false);
      callbackNotFound(true);
      // callbackSetSiteSponsor({});
    }
  );
};

export /**
 *Gets Coordinates and
 *Callbacks a Function that Creates the Coordinates type object
 * @param {(position: any) => void} callbackSetZipApplies
 */
const getLocationCoordinates = (
  callbackSetZipApplies: (position: any) => void
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callbackSetZipApplies);
  }
};
export /**
 *Get Zip Code Using Coordinates
 *Callback the setZipState
 * @param {*} position
 * @param {Dispatch<SetStateAction<string>>} callbackSetZipApplies
 */
const getLocationZip = (
  position: any,
  callbackSetZipApplies: Dispatch<SetStateAction<string>>,
  callbackSetCityApplies: Dispatch<SetStateAction<string>>,
  callbackSetStateApplies: Dispatch<SetStateAction<string>>
) => {
  let url: string =
    process.env.REACT_APP_GOOGLE_MAPS_API +
    "latlng=" +
    position.latitude +
    "," +
    position.longitude +
    "&key=" +
    process.env.REACT_APP_GOOGLE_MAPS_KEY;
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  axios({
    method: "get",
    url: url,

    data: {},
    headers,
  }).then((response) => {
    let tempZip = "nozip";
    let tempCity = "noCity";
    let tempState = "noState";
    console.log("getLocationZip", response.data);

    response.data.results.forEach((rowAddressComponents: any) => {
      rowAddressComponents.address_components.forEach((component: any) => {
        component.types[0] &&
          component.types[0] == "locality" &&
          (tempCity = component.long_name);

        component.types[0] &&
          component.types[0] == "administrative_area_level_1" &&
          (tempState = component.short_name);

        component.types[0] &&
          component.types[0] == "postal_code" &&
          (tempZip = component.long_name);
      });
    });

    let tempZip2 = localStorage.getItem("contactZip");
    console.log("checkIfZipCodeApplies tempZip2", tempZip2);
    console.log("checkIfZipCodeApplies tempCity", tempCity);
    console.log("checkIfZipCodeApplies tempState", tempState);

    callbackSetCityApplies(tempCity);
    callbackSetStateApplies(tempState);
    callbackSetZipApplies(tempZip);
  });
};

export /**
 *Get Zip Code Using Coordinates
 *Callback the setZipState
 * @param {*} position
 * @param {Dispatch<SetStateAction<string>>} callbackSetZipApplies
 */
const getCityStateZip = (
  zip: any,
  callbackSetCityApplies: Dispatch<SetStateAction<string>>,
  callbackSetStateApplies: Dispatch<SetStateAction<string>>
) => {
  let url: string =
    process.env.REACT_APP_GOOGLE_MAPS_API +
    "address=" +
    zip +
    "&key=" +
    process.env.REACT_APP_GOOGLE_MAPS_KEY;
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  axios({
    method: "get",
    url: url,

    data: {},
    headers,
  }).then((response) => {
    let tempZip = "nozip";
    let tempCity = "noCity";
    let tempState = "noState";
    console.log("getCityStateZip", response.data);

    response.data.results.forEach((rowAddressComponents: any) => {
      rowAddressComponents.address_components.forEach((component: any) => {
        component.types[0] &&
          component.types[0] == "locality" &&
          (tempCity = component.long_name);

        component.types[0] &&
          component.types[0] == "administrative_area_level_1" &&
          (tempState = component.short_name);

        component.types[0] &&
          component.types[0] == "postal_code" &&
          (tempZip = component.long_name);
      });
    });
    callbackSetCityApplies(tempCity);
    callbackSetStateApplies(tempState);
  });
};

export /**TO DO DELETE THIS NO LONGER USE
 *Check if ZIp Code Applies NO LONGER USE
 *Gets ZipCodeList fields from Kontent, creates a merged array and check availability NO LONGER USE
 * @param {string} zipCode
 * @param {Dispatch<SetStateAction<eZipState>>} callbackSetZipApplies
 * @param {Dispatch<SetStateAction<string>>} callbacksetZipCode
 */
const checkIfZipAppliesOldMethod = (
  zipCode: string,
  callbackSetZipApplies: Dispatch<SetStateAction<eZipState>>,
  callbacksetZipCode: Dispatch<SetStateAction<string>>
) => {
  let url: string = process.env.REACT_APP_CONTENT_KONTICO_API + "/test_zipcode";
  let isFound = false;
  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    //
    let tempZipCodeList = response.data.item.elements.zipcodes.value;
    let tempZipCodeList2 = response.data.item.elements.zipcodes2.value;

    tempZipCodeList = tempZipCodeList.replace("<p>", "");
    tempZipCodeList = tempZipCodeList.replace("</p>", "");

    tempZipCodeList = tempZipCodeList.replace("<p>", "");
    tempZipCodeList = tempZipCodeList.replace("</p>", "");

    tempZipCodeList = tempZipCodeList + "," + tempZipCodeList2;

    let tempArrZipList = tempZipCodeList.split(",");

    var indexOfFound = tempArrZipList.indexOf(zipCode);
    let submitSatate: any;

    if (indexOfFound > 0) {
      isFound = true;
      submitSatate = eZipState.found;

      callbackSetZipApplies(submitSatate);
      callbacksetZipCode(tempArrZipList[indexOfFound]);
    } else {
      submitSatate = eZipState.notFound;
      callbackSetZipApplies(submitSatate);
    }
  });
};

//TODO second callback unnecesarry?
export /**
 *Checks if ZIp Code Applies, using zipCode State
 *Gets ZipCodeList fields from Kontent, creates a merged array and check availability
 *Recieved setZipApplies for Status and setZip to save the retrieved zip code
 * @param {string} zipCode
 * @param {Dispatch<SetStateAction<eZipState>>} callbackSetZipApplies
 * @param {Dispatch<SetStateAction<string>>} callbacksetZipCode
 */
const checkIfZipApplies = (
  zipCode: string,
  callbackSetZipApplies: Dispatch<SetStateAction<eZipState>>,
  callbacksetZipCode: Dispatch<SetStateAction<string>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "?system.type=zipcodelistfield";
  let isFound = false;
  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempZipCodeList: string = "";

    response.data.items.forEach((item: any) => {
      tempZipCodeList =
        tempZipCodeList + "" + item.elements.zip_code_list.value;
    });
    tempZipCodeList = tempZipCodeList.replace("</p><p>", ",");

    tempZipCodeList = tempZipCodeList.replace("<p>", ",");
    tempZipCodeList = tempZipCodeList.replace(",<p>", ",");
    tempZipCodeList = tempZipCodeList.replace("</p>", ",");

    let tempArrZipList = tempZipCodeList.split(",");

    var indexOfFound = tempArrZipList.indexOf(zipCode);
    let submitSatate: any;
    if (zipCode && zipCode != "nozip") {
      if (indexOfFound > 0) {
        isFound = true;
        submitSatate = eZipState.found;

        callbackSetZipApplies(submitSatate);
        callbacksetZipCode(tempArrZipList[indexOfFound]);
      } else {
        submitSatate = eZipState.notFound;
        //callbacksetZipCode(zipCode);

        callbackSetZipApplies(submitSatate);
      }
    }
  });
};

export /**
 *Gets the referrerWebAlias
 *Will use the cname before test to set the sponsor id
 * @param {(Dispatch<SetStateAction<iSponsorContent | undefined>>)} callbacksetSiteContent
 */
const getSponsorWebAlias = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);

  //To do this is not going into production ?
  let referrerWebAlias = params.get(
    process.env.REACT_APP_WEKYNECT_URLASSPARAM + ""
  );
  console.log("referrerWebAlias", referrerWebAlias);

  // Use First CNAME on url when its present
  let tempHostName = window.location.host;
  let arrFromHostName = tempHostName.split(".");

  arrFromHostName[0] != "localhost:3000" &&
    arrFromHostName[0] != "www" &&
    arrFromHostName[0] != "test" &&
    arrFromHostName[0] != "homesecurity" &&
    (referrerWebAlias = arrFromHostName[0]);

  console.log("tempHostName", tempHostName);
  console.log("referrerWebAlias", referrerWebAlias);

  return referrerWebAlias;
};

export const saveRequestData = (data: any) => {
  let headers = {
    // Authorization: "Basic TVlTVFJFQU06dj9yKnotN1puNm8rYkdrIVI+XlhFUWpT",
    "Content-Type": "application/json",
  };
  axios({
    method: "post",
    url: process.env.REACT_APP_WEKYNECT_SUBMIT_API,
    headers,
    data: data,
  }).then((response) => {});
};

export const getRefCookieValue = (
  callbackSetZipApplies: Dispatch<SetStateAction<iSponsorData>>
) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // Authorization: "Basic TVlTVFJFQU06dj9yKnotN1puNm8rYkdrIVI+XlhFUWpT",
    // "Content-Type": "application/json",
  };
  axios({
    method: "get",
    url: process.env.REACT_APP_WEKYNECT_COOKIE_ENDPOINT,
    //headers,
    //   data: data,
  }).then((response) => {
    //
    //callbackSetSiteSponsor(tempSponsorData);
  });
};

export const createMarkup = (siteContent: string) => {
  return { __html: siteContent };
};

export const checkUserLanguage = async () => {
  let currLang = localStorage.getItem("browserLanguage") + "";

  let tempLang = navigator.language;
  console.log("browserLanguage", tempLang);

  let langtoSet = "";
  if (currLang != "") {
    //if (1 >> 0) {

    if (currLang.includes("es")) {
      langtoSet = "es-ES";
      localStorage.setItem("browserLanguage", langtoSet);
    } else {
      langtoSet = "en-US";
    }
  } else {
    if (tempLang.includes("es")) {
      langtoSet = "es-ES";
      localStorage.setItem("browserLanguage", langtoSet);
    } else {
      langtoSet = "en-US";
    }
  }
  console.log("browserLanguage langtoSet", langtoSet);

  localStorage.setItem("browserLanguage", langtoSet);
};

export const changeUserLanguage = () => {
  let currLang = localStorage.getItem("browserLanguage") + "";

  let tempLang = navigator.language;
  let langtoSet = "";

  if (currLang.includes("es")) {
    langtoSet = "en-US";
  } else {
    langtoSet = "es-ES";
  }

  localStorage.setItem("browserLanguage", langtoSet);

  window.location.reload(false);
};

export const checkMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor);
  return check;
};
