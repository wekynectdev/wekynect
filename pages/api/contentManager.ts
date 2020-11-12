import axios from "axios";

import {
  iProduct,
  iWizardContent,
  iContentCart,
  iHomeContent,
  iNavBarContent,
  iFooterContent,
  iSponsorContent,
  iOrderConfirmationContent,
  iProductListContent,
  iEvent,
  iSocialMedia,
  iHome,
  iGenericContent,
  iExecutive,
  iPress,
  iFAQContent,
  iFaq,
  iFaqObj,
  iBlog,
  iBlogContent,
  iStartABusiness,
  iContentContactUs,
  iStatesList,
  iServiceAndReasons,
  iTeamMemberObj,
} from "./../../interfaces/index ";
import { Client } from "../../components/common/Kontent/Client";
import { Client as ClientTruvvi } from "../../components/common/Kontent/ClientTruvvi";
import { Dispatch, SetStateAction } from "react";
import { Subject } from "rxjs/internal/Subject";
import { parseHomeContent, parseWhyContent } from "./parser";
export /**
 *Gets the Wizard site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iWizardContent | undefined>>)} callbacksetSiteContent
 */
const getWizardContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iWizardContent | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/bhs_enrolment_wizard";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      meta: {
        wizard_meta_title: response.data.item.elements.wizard_meta_title.value,
        wizard_meta_description:
          response.data.item.elements.wizard_meta_description.value,
        wizard_meta_seo: response.data.item.elements.wizard_meta_seo.value,
        wizard_meta_og_image:
          response.data.item.elements.wizard_og_image.value[0].url,
      },
      tabs: {
        wizard_tab_contact:
          response.data.item.elements.wizard_tab_contact.value,
        wizard_tab_order: response.data.item.elements.wizard_tab_order.value,
        wizard_tab_submission:
          response.data.item.elements.wizard_tab_submission.value,
        wizard_tab_telephone:
          response.data.item.elements.wizard_tab_telephone.value,
        wizard_tab_product:
          response.data.item.elements.wizard_tab_product.value,
      },
      images: {
        wizzard_top_image:
          response.data.item.elements.wizard_images.value[0].url,
      },
      step1: {
        wizard_step1_btn_next:
          response.data.item.elements.wizard_step1_btn_next.value,
        wizard_step1_frm_assoc_ref:
          response.data.item.elements.wizard_step1_frm_assoc_ref.value,
        wizard_step1_frm_assoc_ref_btn_verify:
          response.data.item.elements.wizard_step1_frm_assoc_ref_btn_verify
            .value,
        wizard_step1_frm_assoc_ref_chk_yes:
          response.data.item.elements.wizard_step1_frm_assoc_ref_chk_yes.value,
        wizard_step1_frm_assoc_ref_text:
          response.data.item.elements.wizard_step1_frm_assoc_ref_text.value,
        wizard_step1_frm_city:
          response.data.item.elements.wizard_step1_frm_city.value,
        wizard_step1_frm_email:
          response.data.item.elements.wizard_step1_frm_email.value,
        wizard_step1_frm_fname:
          response.data.item.elements.wizard_step1_frm_fname.value,
        wizard_step1_frm_lname:
          response.data.item.elements.wizard_step1_frm_lname.value,
        wizard_step1_frm_monitoring_addr:
          response.data.item.elements.wizard_step1_frm_monitoring_addr.value,
        wizard_step1_frm_phone:
          response.data.item.elements.wizard_step1_frm_phone.value,

        wizard_step1_frm_prefix:
          response.data.item.elements.wizard_step1_frm_prefix.value,
        wizard_step1_frm_prefix_mr:
          response.data.item.elements.wizard_step1_frm_prefix_mr.value,
        wizard_step1_frm_prefix_mrs:
          response.data.item.elements.wizard_step1_frm_prefix_mrs.value,
        wizard_step1_frm_prefix_ms:
          response.data.item.elements.wizard_step1_frm_prefix_ms.value,
        wizard_step1_frm_state:
          response.data.item.elements.wizard_step1_frm_state.value,
        wizard_step1_frm_zip:
          response.data.item.elements.wizard_step1_frm_zip.value,

        wizard_step1_frm_type:
          response.data.item.elements.wizard_step1_frm_type.value,

        wizard_step1_frm_type_commercial:
          response.data.item.elements.wizard_step1_frm_type_commercial.value,
        wizard_step1_frm_type_business:
          response.data.item.elements.wizard_step1_frm_type_business.value,
        wizard_step1_frm_total:
          response.data.item.elements.wizard_step1_frm_total.value,
        wizard_step1_frm_business_name:
          response.data.item.elements.wizard_step1_frm_business_name.value,

        wizard_step1_frm_is_a_large_home:
          response.data.item.elements.wizard_step1_frm_is_a_large_home.value,
        wizard_step1_title:
          response.data.item.elements.wizard_step1_title.value,

        wizard_step1_frm_referred_by_title:
          response.data.item.elements.wizard_step1_frm_referred_by_title.value,
        wizard_step1_frm_referred_by_text:
          response.data.item.elements.wizard_step1_frm_referred_by_text.value,
        wizard_step1_frm_referred_by_placeholder:
          response.data.item.elements.wizard_step1_frm_referred_by_placeholder
            .value,

        wizard_step1_frm_referred_by_btn_verify:
          response.data.item.elements.wizard_step1_frm_referred_by_btn_verify
            .value,
        wizard_step1_frm_referred_by_btn_next:
          response.data.item.elements.wizard_step1_frm_referred_by_btn_next
            .value,
        wizard_step1_frm_referred_by_error:
          response.data.item.elements.wizard_step1_frm_referred_by_error.value,
      },
      step2: {
        wizard_step2_btn_skip:
          response.data.item.elements.wizard_step2_btn_skip.value,
        wizard_step2_btn_submit:
          response.data.item.elements.wizard_step2_btn_submit.value,
        wizard_step2_text: response.data.item.elements.wizard_step2_text.value,
        wizard_step2_text2:
          response.data.item.elements.wizard_step2_text2.value,
        wizard_step2_text3:
          response.data.item.elements.wizard_step2_text3.value,
        wizard_step2_title:
          response.data.item.elements.wizard_step2_title.value,
      },
      step3: {
        wizard_step3_btn_back:
          response.data.item.elements.wizard_step3_btn_back.value,
        wizard_step3_btn_submit:
          response.data.item.elements.wizard_step3_btn_submit.value,
        wizard_step3_chk_text1:
          response.data.item.elements.wizard_step3_chk_text1.value,
        wizard_step3_chk_text2:
          response.data.item.elements.wizard_step3_chk_text2.value,
        wizard_step3_chk_text3:
          response.data.item.elements.wizard_step3_chk_text3.value,
        wizard_step3_error_you_must_accept:
          response.data.item.elements.wizard_step3_error_you_must_accept.value,
      },
      step4: {
        wizard_step4_bhs: response.data.item.elements.wizard_step4_bhs.value,
        wizard_step4_btn_print_sumary:
          response.data.item.elements.wizard_step4_btn_print_sumary.value,
        wizard_step4_btn_print_sumary_txt:
          response.data.item.elements.wizard_step4_btn_print_sumary_txt.value,
        wizard_step4_number:
          response.data.item.elements.wizard_step4_number.value,
        wizard_step4_number_text:
          response.data.item.elements.wizard_step4_number_text.value,
        wizard_step4_schedule:
          response.data.item.elements.wizard_step4_schedule.value,
        wizard_step4_text: response.data.item.elements.wizard_step4_text.value,
        wizard_step4_title:
          response.data.item.elements.wizard_step4_title.value,
      },
      step5: {},
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the product List from the CMS
 *
 * @param {Dispatch<SetStateAction<iProduct[]>>} callbackSetProductList
 */
const getProductList = (
  callbackSetProductList: Dispatch<SetStateAction<iProduct[]>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API +
    "?system.type=bhs_products&order=elements.list_index[asc]";
  let tempProductList: iProduct[] = [];

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    response.data.items.map((tempProduct: any) => {
      let tempContentSignup = {
        productId: tempProduct.elements.id.value,
        productSkew: tempProduct.elements.skew.value,
        productName: tempProduct.elements.name.value,
        productDescription: tempProduct.elements.description.value,
        productPrice: tempProduct.elements.price.value,
        productURL: tempProduct.elements.image.value[0].url,
        productQuantity: 0,
      };
      tempProductList.push(tempContentSignup);
    });
    callbackSetProductList(tempProductList);
  });
};

export /**
 *Gets the cart site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iContentCart | undefined>>)} callbacksetSiteContent
 */
const getCartContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iContentCart | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/brinks_home_security_cart";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      cart_title: response.data.item.elements.cart_title.value,
      cart_your_order: response.data.item.elements.cart_your_order.value,
      cart_included: response.data.item.elements.cart_included.value,

      cart_included_list: response.data.item.elements.cart_included_list.value,

      cart_add_ons: response.data.item.elements.cart_add_ons.value,
      cart_due_title: response.data.item.elements.cart_due_title.value,
      cart_due_text1: response.data.item.elements.cart_due_text1.value,
      cart_due_text2: response.data.item.elements.cart_due_text2.value,
      cart_image: response.data.item.elements.cart_images.value[0].url,
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Home site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iHomeContent | undefined>>)} callbacksetSiteContent
 */
const getEnrollmentHomeContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iHomeContent | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/bhs_enrollment_welcome";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContentSignup = {
      enrollment_meta_title:
        response.data.item.elements.enrollment_meta_title.value,
      enrollment_meta_description:
        response.data.item.elements.enrollment_meta_description.value,
      enrollment_meta_seo:
        response.data.item.elements.enrollment_meta_seo.value,
      enrollment_meta_og_image:
        response.data.item.elements.enrollment_og_image.value[0].url,

      enrollment_btn_enroll_text:
        response.data.item.elements.enrollment_btn_enroll_text.value,
      enrollment_enter_zip:
        response.data.item.elements.enrollment_enter_zip.value,
      enrollment_enter_zip_error_title:
        response.data.item.elements.enrollment_enter_zip_error_title.value,
      enrollment_enter_zip_error_text:
        response.data.item.elements.enrollment_enter_zip_error_text.value,
      enrollment_enter_zip_your_zip_title:
        response.data.item.elements.enrollment_enter_zip_your_zip_title.value,
      enrollment_enter_zip_your_zip_text:
        response.data.item.elements.enrollment_enter_zip_your_zip_text.value,
      enrollment_enter_zip_btn:
        response.data.item.elements.enrollment_enter_zip_btn.value,
      enrollment_featured_product_feature01:
        response.data.item.elements.enrollment_featured_product_feature01.value,
      enrollment_featured_product_feature02:
        response.data.item.elements.enrollment_featured_product_feature02.value,
      enrollment_featured_product_feature03:
        response.data.item.elements.enrollment_featured_product_feature03.value,
      enrollment_featured_product_feature04:
        response.data.item.elements.enrollment_featured_product_feature04.value,
      enrollment_featured_product_feature05:
        response.data.item.elements.enrollment_featured_product_feature05.value,
      enrollment_featured_product_feature06:
        response.data.item.elements.enrollment_featured_product_feature06.value,
      enrollment_featured_product_feature07:
        response.data.item.elements.enrollment_featured_product_feature07.value,
      enrollment_featured_product_feature08:
        response.data.item.elements.enrollment_featured_product_feature08.value,
      enrollment_featured_product_title:
        response.data.item.elements.enrollment_featured_product_title.value,
      enrollment_get_exclusive_text:
        response.data.item.elements.enrollment_get_exclusive_text.value,
      enrollment_get_exclusive_text2:
        response.data.item.elements.enrollment_get_exclusive_text2.value,
      enrollment_get_exclusive_text3:
        response.data.item.elements.enrollment_get_exclusive_text3.value,
      enrollment_get_exclusive_text4:
        response.data.item.elements.enrollment_get_exclusive_text4.value,
      enrollment_get_exclusive_text5:
        response.data.item.elements.enrollment_get_exclusive_text5.value,
      enrollment_get_exclusive_text6:
        response.data.item.elements.enrollment_get_exclusive_text6.value,
      enrollment_get_exclusive_title:
        response.data.item.elements.enrollment_get_exclusive_title.value,
      enrollment_title: response.data.item.elements.enrollment_title.value,
      enrollment_we_only_trust_text:
        response.data.item.elements.enrollment_we_only_trust_text.value,
      enrollment_we_only_trust_text2:
        response.data.item.elements.enrollment_we_only_trust_text2.value,
      enrollment_we_only_trust_title:
        response.data.item.elements.enrollment_we_only_trust_title.value,
      enrollment_welcome_text:
        response.data.item.elements.enrollment_welcome_text.value,
      enrollment_welcome_text2:
        response.data.item.elements.enrollment_welcome_text2.value,
      enrollment_welcome_title:
        response.data.item.elements.enrollment_welcome_title.value,
      enrollment_img_top_banner:
        response.data.item.elements.enrollment_images.value[0].url,
      enrollment_img_kit:
        response.data.item.elements.enrollment_images.value[1].url,
      enrollment_img_partner:
        response.data.item.elements.enrollment_images.value[2].url,

      enrollment_referred_ckb_was_referred:
        response.data.item.elements.enrollment_referred_ckb_was_referred.value,
      enrollment_referred_ckb_was_not_referred:
        response.data.item.elements.enrollment_referred_ckb_was_not_referred
          .value,
      enrollment_referred_ckb_im_associate:
        response.data.item.elements.enrollment_referred_ckb_im_associate.value,
      enrollment_referred_by:
        response.data.item.elements.enrollment_referred_by.value,
      enrollment_referred_by_title:
        response.data.item.elements.enrollment_referred_by_title.value,
      enrollment_referred_by_text:
        response.data.item.elements.enrollment_referred_by_text.value,
      enrollment_referred_by_placeholder:
        response.data.item.elements.enrollment_referred_by_placeholder.value,
      enrollment_referred_by_btn_verify:
        response.data.item.elements.enrollment_referred_by_btn_verify.value,
      enrollment_referred_by_btn_next:
        response.data.item.elements.enrollment_referred_by_btn_next.value,
      enrollment_referred_by_error:
        response.data.item.elements.enrollment_referred_by_error.value,
      enrollment_assoc_ref:
        response.data.item.elements.enrollment_assoc_ref.value,
      enrollment_assoc_ref_btn_verify:
        response.data.item.elements.enrollment_assoc_ref_btn_verify.value,
      enrollment_assoc_ref_chk_yes:
        response.data.item.elements.enrollment_assoc_ref_chk_yes.value,
      enrollment_assoc_ref_text:
        response.data.item.elements.enrollment_assoc_ref_text.value,
    };

    callbacksetSiteContent(tempContentSignup);
  });
};

export /**
 *Gets the NavBar site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iNavBarContent | undefined>>)} callbacksetSiteContent
 */
const getNavBarContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iNavBarContent | undefined>>,
  previewMode: boolean
) => {
  let url: string = process.env.REACT_APP_CONTENT_KONTICO_API + "/bhs_navbar";

  let lang = localStorage.getItem("browserLanguage") + "";
  console.log("browserLanguage :", lang);

  let queryContent = Client.items()
    .type("bhs_navbar")
    //.equalsFilter("system.type", "wekynect_com_executive")
    // .languageParameter("es-ES")
    // .languageParameter(lang)
    //.languageParameter("es-ES")
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      let tempContentSignup = {
        nav_bar_shop_services: response.items[0].nav_bar_shop_services.value,
        nav_bar_start_business: response.items[0].nav_bar_start_business.value,
        nav_bar_we_kynect: response.items[0].nav_bar_we_kynect.value,
        nav_bar_chat_text: response.items[0].nav_bar_chat_text.value,
        nav_bar_login: response.items[0].nav_bar_login.value,
        nav_bar_lang_es: response.items[0].nav_bar_lang_es.value,
        nav_bar_lang_en: response.items[0].nav_bar_lang_en.value,
        nav_bar_img_chat: response.items[0].nav_bar_images.value[0].url,
        nav_bar_img_logo: response.items[0].nav_bar_images.value[1].url,
        nav_bar_img_arrow_right: response.items[0].nav_bar_images.value[2].url,
      };
      callbacksetSiteContent(tempContentSignup);
      //
    });
};

export /**
 *Gets the NavBar site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iNavBarContent | undefined>>)} callbacksetSiteContent
 */
const getFooterContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iFooterContent | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";
  let queryContent = Client.items()
    //.type("wekynect_com_home")
    //TODO Change to new
    //.equalsFilter("system.codename", "wekynect_com_footer")
    .equalsFilter("system.codename", "wekynect_com_footer")
    //.languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tempContentSignup = {
          footer_col_about_us: response.items[0].footer_col_about_us.value,
          footer_col_oportunity: response.items[0].footer_col_oportunity.value,
          footer_col_services: response.items[0].footer_col_services.value,
          footer_col_support: response.items[0].footer_col_support.value,
          footer_about_title: response.items[0].footer_about_title.value,
          footer_oportunity_title:
            response.items[0].footer_oportunity_title.value,
          footer_services_title: response.items[0].footer_services_title.value,
          footer_faq_title: response.items[0].footer_faq_title.value,

          footer_copyright: response.items[0].footer_copyright.value,
          footer_img_logo: response.items[0].footer_images.value[0].url,
          footer_img_facebook: response.items[0].footer_images.value[1].url,
          footer_img_instagram: response.items[0].footer_images.value[2].url,
          footer_img_twitter: response.items[0].footer_images.value[3].url,
          footer_img_bbb_badge: response.items[0].footer_images.value[4].url,
        };
        callbacksetSiteContent(tempContentSignup);
        //
      }
    });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iSponsorContent | undefined>>)} callbacksetSiteContent
 */
const getSponsorContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iSponsorContent | undefined>>
) => {
  let url: string = process.env.REACT_APP_CONTENT_KONTICO_API + "/bhs_sponsor";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      sponsor_btn_join:
        response.data.item.elements.nav_bar_sponsor_btn_join.value,
      sponsor_btn_shop:
        response.data.item.elements.nav_bar_sponsor_btn_shop.value,
      sponsor_contact:
        response.data.item.elements.nav_bar_sponsor_contact.value,
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getOrderConfirmationContent = (
  callbacksetSiteContent: Dispatch<
    SetStateAction<iOrderConfirmationContent | undefined>
  >
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API +
    "/brinks_home_security_order_summary";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      order_confirmation_title:
        response.data.item.elements.order_confirmation_title.value,
      order_confirmation_customer_info:
        response.data.item.elements.order_confirmation_customer_info.value,
      order_confirmation_date:
        response.data.item.elements.order_confirmation_date.value,
      order_confirmation_name:
        response.data.item.elements.order_confirmation_name.value,
      order_confirmation_address:
        response.data.item.elements.order_confirmation_address.value,
      order_confirmation_phone:
        response.data.item.elements.order_confirmation_phone.value,
      order_confirmation_email:
        response.data.item.elements.order_confirmation_email.value,
      order_confirmation_referred:
        response.data.item.elements.order_confirmation_referred.value,
      order_confirmation_order:
        response.data.item.elements.order_confirmation_order.value,
      order_confirmation_included:
        response.data.item.elements.order_confirmation_included.value,
      order_confirmation_included_l1:
        response.data.item.elements.order_confirmation_included_l1.value,
      order_confirmation_included_l2:
        response.data.item.elements.order_confirmation_included_l2.value,
      order_confirmation_included_l3:
        response.data.item.elements.order_confirmation_included_l3.value,
      order_confirmation_included_l4:
        response.data.item.elements.order_confirmation_included_l4.value,
      order_confirmation_included_l5:
        response.data.item.elements.order_confirmation_included_l5.value,
      order_confirmation_included_l6:
        response.data.item.elements.order_confirmation_included_l6.value,
      order_confirmation_included_l7:
        response.data.item.elements.order_confirmation_included_l7.value,
      order_confirmation_included_l8:
        response.data.item.elements.order_confirmation_included_l8.value,
      order_confirmation_included_l9:
        response.data.item.elements.order_confirmation_included_l9.value,
      order_confirmation_addons:
        response.data.item.elements.order_confirmation_addons.value,
      order_confirmation_next:
        response.data.item.elements.order_confirmation_next.value,
      order_confirmation_next_text:
        response.data.item.elements.order_confirmation_next_text.value,
      order_confirmation_bhs_title:
        response.data.item.elements.order_confirmation_bhs_title.value,
      order_confirmation_bhs_number:
        response.data.item.elements.order_confirmation_bhs_number.value,
      order_confirmation_bhs_note:
        response.data.item.elements.order_confirmation_bhs_note.value,
      order_confirmation_bhs_schedule:
        response.data.item.elements.order_confirmation_bhs_schedule.value,
      cart_due_title: response.data.item.elements.cart_due_title.value,
      cart_due_text1: response.data.item.elements.cart_due_text1.value,
      cart_due_text2: response.data.item.elements.cart_due_text2.value,
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getProductListContent = (
  callbacksetSiteContent: Dispatch<
    SetStateAction<iProductListContent | undefined>
  >
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/bhs_products_list";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      bhs_products_list_title:
        response.data.item.elements.bhs_products_list_title.value,
      bhs_products_list_text:
        response.data.item.elements.bhs_products_list_text.value,
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Wizard site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iTopBanner | undefined>>)} callbacksetSiteContent
 */
const getEventContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iEvent | undefined>>
  //callbacksetShowSiteBanner: Dispatch<SetStateAction<boolean>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/truvvi_com_event";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      event_youtube_id: response.data.item.elements.event_youtube_id.value,
      event_details: response.data.item.elements.event_details.value,
      event_details2: response.data.item.elements.event_details2.value,
      event_gateway: response.data.item.elements.event_gateway.value,
      event_money: response.data.item.elements.event_money.value,
      event_prices_btn: response.data.item.elements.event_prices_btn.value,

      event_prices_text: response.data.item.elements.event_prices_text.value,
      event_prices_title: response.data.item.elements.event_prices_title.value,
      event_survey: response.data.item.elements.event_survey.value,
      event_time_to_shine_text:
        response.data.item.elements.event_time_to_shine_text.value,
      event_time_to_shine_title:
        response.data.item.elements.event_time_to_shine_title.value,
      event_time_to_shine_title2:
        response.data.item.elements.event_time_to_shine_title2.value,
      event_title_1: response.data.item.elements.event_title_1.value,
      event_title_2: response.data.item.elements.event_title_2.value,
      event_vacation: response.data.item.elements.event_vacation.value,
      event_video_text: response.data.item.elements.event_video_text.value,
      event_video_title: response.data.item.elements.event_video_title.value,
      event_img_details_banner:
        response.data.item.elements.event_images.value[2].url,
      event_img_shine: response.data.item.elements.event_images.value[3].url,
      event_img_top_bg: response.data.item.elements.event_images.value[2].url,
      event_img_2: response.data.item.elements.event_images.value[3].url,
      event_img_3: response.data.item.elements.event_images.value[4].url,
      event_img_logo: response.data.item.elements.event_images.value[5].url,

      event_img_gateway: response.data.item.elements.event_images.value[7].url,
      event_img_vacation: response.data.item.elements.event_images.value[8].url,
      event_img_money: response.data.item.elements.event_images.value[9].url,
      event_img_survey: response.data.item.elements.event_images.value[10].url,

      event_img_instagram:
        response.data.item.elements.event_images.value[11].url,
      event_img_fb: response.data.item.elements.event_images.value[17].url,
      event_img_twitter: response.data.item.elements.event_images.value[19].url,
      event_img_whatsapp:
        response.data.item.elements.event_images.value[18].url,
      event_img_linkedin:
        response.data.item.elements.event_images.value[15].url,
      event_img_mail: response.data.item.elements.event_images.value[16].url,
      event_img_link: response.data.item.elements.event_images.value[14].url,
      event_img_placeholder:
        response.data.item.elements.event_images.value[20].url,
      event_coming_soon: response.data.item.elements.event_coming_soon.value,
    };

    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Wizard site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iWizardContent | undefined>>)} callbacksetSiteContent
 */
const getSocialMediaShare = (
  callbacksetSiteContent: Dispatch<SetStateAction<iSocialMedia | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/truvvi_com_social_media";
  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      social_media_email: response.data.item.elements.social_media_email.value,
      social_media_email_body:
        response.data.item.elements.social_media_email_body.value,
      social_media_email_subject:
        response.data.item.elements.social_media_email_subject.value,
      social_media_fb_msg_appid:
        response.data.item.elements.social_media_fb_msg_appid.value,
      social_media_fb_msg_url:
        response.data.item.elements.social_media_fb_msg_url.value,
      social_media_fb_share_hash_tag:
        response.data.item.elements.social_media_fb_share_hash_tag.value,
      social_media_fb_share_quote:
        response.data.item.elements.social_media_fb_share_quote.value,
      social_media_fb_share_url:
        response.data.item.elements.social_media_fb_share_url.value,
      social_media_link: response.data.item.elements.social_media_link.value,
      social_media_link_copied_to_clipboard:
        response.data.item.elements.social_media_link_copied_to_clipboard.value,
      social_media_lkedin_summary:
        response.data.item.elements.social_media_lkedin_summary.value,
      social_media_lkedin_title:
        response.data.item.elements.social_media_lkedin_title.value,
      social_media_lkedin_url:
        response.data.item.elements.social_media_lkedin_url.value,
      social_media_twitter_hastags:
        response.data.item.elements.social_media_twitter_hastags.value,
      social_media_twitter_title:
        response.data.item.elements.social_media_twitter_title.value,
      social_media_twitter_url:
        response.data.item.elements.social_media_twitter_url.value,

      sm_img_twitter:
        response.data.item.elements.social_media_images.value[0].url,
      sm_img_linkedin:
        response.data.item.elements.social_media_images.value[1].url,
      sm_img_mail: response.data.item.elements.social_media_images.value[5].url,
      sm_img_facebook:
        response.data.item.elements.social_media_images.value[4].url,
      sm_img_link: response.data.item.elements.social_media_images.value[2].url,
      sm_img_facebook_messenger:
        response.data.item.elements.social_media_images.value[3].url,
    };
    callbacksetSiteContent(tempContent);
  });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getHomePageContent = (
  //callbacksetSiteContent: Dispatch<SetStateAction<iHome | undefined>>,
  previewMode: boolean
) => {
  //let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    .type("wekynect_com_home")
    .equalsFilter("codename", "truvvi_com_homepage")
    //.languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    })
    .toPromise()
    .then((result: any) => {
      return result.getFirstItem();
    })
    .then((post: any) => {
      return parseHomeContent(post);
    });

  return queryContent;
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getWhyPageContent = (
  //callbacksetSiteContent: Dispatch<SetStateAction<iGenericContent | undefined>>
  previewMode: boolean,
  fromSSR?: boolean
) => {
  let lang = "en-US";

  if (!fromSSR) {
    localStorage.getItem("browserLanguage") + "";
  }

  let queryContent = Client.items()
    .type("wekynect_com_generic_content")
    .equalsFilter("system.codename", "wekynect_com_why")
    .languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    })
    .toPromise()
    .then((result: any) => {
      return result.getFirstItem();
    })
    .then((resultNext: any) => {
      return parseWhyContent(resultNext);
    });
  //console.log("post", queryContent);
  return queryContent;
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getCorporateContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iGenericContent | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    .type("wekynect_com_generic_content")
    .equalsFilter("system.codename", "corporate_team")
    .languageParameter(lang)
    //.languageParameter("es-ES")
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tmpContent: iGenericContent = {
          page_images: response.items[0].page_content.value[0].url,
          page_content: response.items[0].page_content.resolveHtml(),
          page_title: response.items[0].page_title.value,
          page_title2: response.items[0].page_title2.value,
        };
        callbacksetSiteContent(tmpContent);
        //
      }
    });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getPressContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iGenericContent | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    .type("wekynect_com_generic_content")
    .equalsFilter("system.codename", "wekynect_com_press")
    //.languageParameter("es-ES")
    .languageParameter(lang)

    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tmpContent: iGenericContent = {
          page_images: response.items[0].page_content.value[0].url,
          page_content: response.items[0].page_content.resolveHtml(),
          page_title: response.items[0].page_title.value,
          page_title2: response.items[0].page_title2.value,
        };
        callbacksetSiteContent(tmpContent);
        //
      }
    });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getPressArticles = (
  callbacksetSiteContent: Dispatch<SetStateAction<iPress[] | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    .type("wekynect_com_press")
    //.equalsFilter("system.type", "wekynect_com_executive")
    // .languageParameter("es-ES")
    .languageParameter(lang)

    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tmpArray: iPress[] = [];

        response.items.map((article: any, index: number) => {
          let formattedDate = new Date(article.press_date.value);
          let featuredImage = article.press_featured_image.value[0]
            ? article.press_featured_image.value[0].url
            : "https://via.placeholder.com/90x90.png";

          let tmpContent: iPress = {
            press_content: article.press_content.resolveHtml(),
            press_url_name: article.press_url_name.value,
            press_description: article.press_description.value,
            press_title: article.press_title.value,
            press_date: formattedDate,
            press_featured_image: featuredImage,
          };
          tmpArray.push(tmpContent);
        });

        callbacksetSiteContent(tmpArray);
        //
      }
    });
};

export /**
 *Gets the Sponsor site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iOrderConfirmation> | undefined>>)} callbacksetSiteContent
 */
const getExecutivesList = (
  callbacksetSiteContent: Dispatch<SetStateAction<iExecutive[] | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    .type("wekynect_com_team_member")
    // .equalsFilter("system.codename", "executive")
    .containsFilter("elements.team_member_type", ["executive"])
    // .languageParameter("es-ES")
    //.languageParameter(lang)
    //.languageParameter("es-ES")
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tmpArray: iExecutive[] = [];
        console.log("response", response);

        response.items.map((executive: any, index: number) => {
          let tmpContent: iExecutive = {
            executive_description: executive.member_description.value,
            executive_title: executive.team_members_positions.value[0].name,
            executive_name: executive.member_name.value,
            executive_image: executive.member_image.value[0].url,
          };
          tmpArray.push(tmpContent);
        });

        callbacksetSiteContent(tmpArray);
        //
      }
    });
};

/**
 *Groups a List Given the provided Key (in use by getFAQs)
 *
 * @param {*} list
 * @param {*} keyGetter
 * @returns
 */
function groupBy(list: any, keyGetter: any) {
  const map = new Map();
  list.forEach((item: any) => {
    const key = keyGetter(item);

    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

export /**
 *Gets the FAQs from CMS
 *Uses the groupBy Method Above
 *Returns callbacksetFAQList (grouped by categories), ListMinified (used to display searches)
 * @param {boolean} previewMode
 * @param {(Dispatch<SetStateAction<iFaqObj[] | undefined>>)} callbacksetSiteContent
 * @param {(Dispatch<SetStateAction<iFaq[] | undefined>>)} setFaqListMinified
 */
const getFAQs = (
  previewMode: boolean,
  callbacksetFAQList: Dispatch<SetStateAction<iFaqObj[]>>,
  setFaqListMinified: Dispatch<SetStateAction<iFaq[]>>
) => {
  let tmpArticle: iBlog;

  //get Categories for indexing
  let queryCategories = Client.taxonomy("faq_categories").queryConfig({
    // Ensures that Preview API is used
    usePreviewMode: previewMode,
  });
  queryCategories.toObservable().subscribe((responseCat: any) => {
    let tmpCategoryList = responseCat.taxonomy.terms;
    let lang = localStorage.getItem("browserLanguage") + "";

    let queryQuestions = Client.items()
      .type("faq_question_item")
      .languageParameter(lang)
      .queryConfig({
        // Ensures that Preview API is used
        usePreviewMode: previewMode,
      });
    //get all faqs
    queryQuestions.toObservable().subscribe((responseQuestions: any) => {
      if (!responseQuestions.isEmpty) {
        // response.items[0].blog_content.resolveHtml();

        let tempFAQList: iFaq[] = [];
        let tempFAQList2: iFaq[] = [];

        //get each faq categories and add to tempFAQList
        responseQuestions.items.map((tempQuestion: any, indextq: number) => {
          tempQuestion.faq_categories.value.map(
            (questionCategories: any, indextp: number) => {
              let tempContentSignup = {
                question: tempQuestion.question.value,
                answer: tempQuestion.rtanswer.resolveHtml(),
                is_featured: tempQuestion.is_featured.value,

                category: tempQuestion.faq_categories.value[indextp]
                  ? questionCategories.name
                  : "The Basics",
              };
              tempFAQList && tempFAQList.push(tempContentSignup);
              indextp === 0 && tempFAQList2.push(tempContentSignup);
            }
          );
        });
        setFaqListMinified(tempFAQList2);

        //Create Map from tempFAQList
        //This is for Indexing as the plat
        const groupedFAQMap = groupBy(tempFAQList, (faq: any) => faq.category);
        let finalArr: iFaqObj[] = [];

        //Create Final Array of FAQs using the index from the system
        tmpCategoryList.forEach((obj: any) => {
          let tmpArr = groupedFAQMap.get(obj.name);

          let tmpObs: iFaqObj = { category: obj.name, questions: tmpArr };
          finalArr.push(tmpObs);
        });

        callbacksetFAQList(finalArr);
      }
    });
    //query queryQuestions end
  });
};

export /**
 *Gets the FAQContent site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iWizardContent | undefined>>)} callbacksetSiteContent
 */
const getFAQContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iFAQContent | undefined>>,
  previewMode: boolean
) => {
  let lang = localStorage.getItem("browserLanguage") + "";

  let queryContent = Client.items()
    //.type("wekynect_com_faqs")
    .equalsFilter("system.codename", "wekynect_com_faqs")
    //.languageParameter("es-ES")
    .languageParameter(lang)

    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tmpContent: iFAQContent = {
          faq_title: response.items[0].faq_title.value,
          search_bar_buttom_message:
            response.items[0].search_bar_buttom_message.value,
          search_bar_placeholder:
            response.items[0].search_bar_placeholder.value,
          search_bar_buttom_message_no_results:
            response.items[0].search_bar_buttom_message_no_results.value,
        };
        callbacksetSiteContent(tmpContent);
        //
      }
    });
};

export const getBlogContent = (
  blogName: string,
  previewMode: boolean,
  callbacksetSiteContent: Dispatch<SetStateAction<iBlog | undefined>>
) => {
  let tmpArticle: iBlog;

  let queryBlogContent = Client.items()
    .type("truvvi_com_blog")
    .equalsFilter("elements.blog_url_name", blogName)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryBlogContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))

    .subscribe((response: any) => {
      if (!response.isEmpty) {
        response.items[0].blog_content.resolveHtml();

        let formattedDate = new Date(response.items[0].blog_date.value);
        let tags: string = "";
        response.items[0].taxonomy_categorizing_target_audience.value.map(
          (blog_tags: any, index: number) => {
            tags = tags + " " + blog_tags.codename;
          }
        );
        tmpArticle = {
          blog_title: response.items[0].blog_title.value,
          blog_url_name: response.items[0].blog_url_name.value,
          blog_description: response.items[0].blog_description.value,
          blog_content: response.items[0].blog_content.resolvedData.html,
          blog_date: formattedDate,
          blog_is_featured: response.items[0].blog_is_featured.value,
          featured_image: response.items[0].featured_image.value[0].url,
          blog_tags: tags,
          blog_meta_tags: response.items[0].blog_meta_tags.value,
        };

        callbacksetSiteContent(tmpArticle);
      }
    });
};

export /**
 *Gets the BlogList site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iWizardContent | undefined>>)} callbacksetSiteContent
 */
const getBlogList = (
  callbacksetSiteContent: Dispatch<SetStateAction<iBlog[] | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API +
    "?system.type=truvvi_com_blog&order=elements.blog_date[desc]";

  let tempArray: iBlog[];
  tempArray = [];
  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    response.data.items.map((blogposts: any, index: number) => {
      let formattedDate = new Date(blogposts.elements.blog_date.value);
      let tags: string = "";

      blogposts.elements.taxonomy_categorizing_target_audience.value.map(
        (blog_tags: any, index: number) => {
          tags = tags + " " + blog_tags.name;
        }
      );

      let imgURL = "";
      blogposts.elements.featured_image.value[0] &&
        (imgURL = blogposts.elements.featured_image.value[0].url);

      let tempContent = {
        blog_description: blogposts.elements.blog_description.value,
        blog_title: blogposts.elements.blog_title.value,
        blog_content: blogposts.elements.blog_content.value,
        blog_date: formattedDate,
        blog_is_featured: blogposts.elements.blog_is_featured.value,
        blog_url_name: blogposts.elements.blog_url_name.value,
        featured_image: imgURL,
        blog_tags: tags,
        blog_meta_tags: blogposts.elements.blog_meta_tags.value,
      };
      tempArray.push(tempContent);
    });

    callbacksetSiteContent(tempArray);
  });
};

export /**
 *Gets the BlogPageContent site content from CMS
 *
 * @param {(Dispatch<SetStateAction<iWizardContent | undefined>>)} callbacksetSiteContent
 */
const getBlogPageContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iBlogContent | undefined>>
) => {
  let url: string =
    process.env.REACT_APP_CONTENT_KONTICO_API + "/wekynect_blog_content";

  axios({
    method: "get",
    url: url,

    data: {},
  }).then((response) => {
    let tempContent = {
      blog_title1: response.data.item.elements.blog_title1.value,
      blog_title2: response.data.item.elements.blog_title2.value,
      blog_featured: response.data.item.elements.blog_featured.value,
      blog_newest: response.data.item.elements.blog_newest.value,
      blog_read_story: response.data.item.elements.blog_read_story.value,
      blog_search_no_results:
        response.data.item.elements.blog_search_no_results.value,
      blog_search_results:
        response.data.item.elements.blog_search_results.value,
      blog_trending: response.data.item.elements.blog_trending.value,
      blog_tags: response.data.item.elements.blog_tags.value,
    };

    callbacksetSiteContent(tempContent);
  });
};

export const getStartABusinessContent = (
  callbacksetSiteContent: Dispatch<SetStateAction<iStartABusiness | undefined>>,
  previewMode: boolean
) => {
  let tmpArticle: iStartABusiness;
  let lang = localStorage.getItem("browserLanguage") + "";
  console.log("browserLanguage", lang);

  let queryBlogContent = Client.items()
    // .type("truvvi_com_blog")
    .equalsFilter("system.codename", "start_a_business")
    .languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: false, //previewMode,
    });
  queryBlogContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))

    .subscribe((response: any) => {
      if (!response.isEmpty) {
        console.log("response", response);

        tmpArticle = {
          bonuses_text: response.items[0].bonuses_text.value,
          bonuses_title: response.items[0].bonuses_title.value,
          bonuses_img: response.items[0].start_a_business_images.value[5].url,

          define_success_avatar1_text:
            response.items[0].define_success_avatar1_text.value,
          define_success_avatar1_title:
            response.items[0].define_success_avatar1_title.value,

          define_success_avatar1_img:
            response.items[0].start_a_business_images.value[2].url,

          define_success_avatar2_img:
            response.items[0].start_a_business_images.value[3].url,

          define_success_avatar2_text:
            response.items[0].define_success_avatar2_text.value,

          define_success_avatar2_title:
            response.items[0].define_success_avatar2_title.value,
          define_success_text: response.items[0].define_success_text.value,
          define_success_title: response.items[0].define_success_title.value,

          how_it_works_avatar1_img:
            response.items[0].start_a_business_images.value[10].url,
          how_it_works_avatar1_text:
            response.items[0].how_it_works_avatar1_text.value,
          how_it_works_avatar1_title:
            response.items[0].how_it_works_avatar1_title.value,
          how_it_works_avatar2_img:
            response.items[0].start_a_business_images.value[11].url,
          how_it_works_avatar2_text:
            response.items[0].how_it_works_avatar2_text.value,
          how_it_works_avatar2_title:
            response.items[0].how_it_works_avatar2_title.value,

          how_it_works_avatar3_img:
            response.items[0].start_a_business_images.value[12].url,
          how_it_works_avatar3_text:
            response.items[0].how_it_works_avatar3_text.value,
          how_it_works_avatar3_title:
            response.items[0].how_it_works_avatar3_title.value,
          how_it_works_btn: response.items[0].how_it_works_btn.value,
          how_it_works_text: response.items[0].how_it_works_text.value,
          how_it_works_title: response.items[0].how_it_works_title.value,
          our_services_avatar1_text:
            response.items[0].our_services_avatar1_text.value,
          our_services_avatar1_title:
            response.items[0].our_services_avatar1_title.value,

          our_services_avatar1_img:
            response.items[0].start_a_business_images.value[0].url,

          our_services_avatar2_text:
            response.items[0].our_services_avatar2_text.value,
          our_services_avatar2_title:
            response.items[0].our_services_avatar2_title.value,

          our_services_avatar2_img:
            response.items[0].start_a_business_images.value[7].url,

          our_services_avatar3_text:
            response.items[0].our_services_avatar3_text.value,
          our_services_avatar3_title:
            response.items[0].our_services_avatar3_title.value,

          our_services_avatar3_img:
            response.items[0].start_a_business_images.value[9].url,

          our_services_btn: response.items[0].our_services_btn.value,
          our_services_text: response.items[0].our_services_text.value,
          our_services_title: response.items[0].our_services_title.value,
          start_a_business_title:
            response.items[0].start_a_business_title.value,
          start_a_business_video: response.items[0].start_a_business_video.resolveHtml(),
          tools_to_text: response.items[0].tools_to_text.value,
          tools_to_title: response.items[0].tools_to_title.value,
          tools_to_img: response.items[0].start_a_business_images.value[4].url,

          two_big_ways_avatar1_text:
            response.items[0].two_big_ways_avatar1_text.value,
          two_big_ways_avatar1_title:
            response.items[0].two_big_ways_avatar1_title.value,
          two_big_ways_avatar1_img:
            response.items[0].start_a_business_images.value[1].url,

          two_big_ways_avatar2_title:
            response.items[0].two_big_ways_avatar2_title.value,

          two_big_ways_avatar2_img:
            response.items[0].start_a_business_images.value[8].url,

          two_big_ways_avatar2_text:
            response.items[0].two_big_ways_avatar2_text.value,
          two_big_ways_text: response.items[0].two_big_ways_text.value,
          two_big_ways_text_small:
            response.items[0].two_big_ways_text_small.value,
          two_big_ways_title: response.items[0].two_big_ways_title.value,
          what_are_you_waiting_text:
            response.items[0].what_are_you_waiting_text.value,
          what_are_you_waiting_title:
            response.items[0].what_are_you_waiting_title.value,
          what_is_kynect_btn: response.items[0].what_is_kynect_btn.value,
          what_is_kynect_text: response.items[0].what_is_kynect_text.value,
          what_is_kynect_title_1:
            response.items[0].what_is_kynect_title_1.value,
          what_is_kynect_title_2:
            response.items[0].what_is_kynect_title_2.value,

          img_people: response.items[0].start_a_business_images.value[6].url,
        };

        callbacksetSiteContent(tmpArticle);
      }
    });
};

export const getContactUsContent = (
  callbacksetSiteContent: Dispatch<
    SetStateAction<iContentContactUs | undefined>
  >,
  previewMode: boolean
) => {
  let tmpArticle: iContentContactUs;

  let lang = localStorage.getItem("browserLanguage") + "";

  let queryBlogContent = Client.items()
    //.type("wekynect_com_contactus")
    .equalsFilter("system.codename", "wekynect_com_contact_us")
    .languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryBlogContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        console.log("response", response);
        tmpArticle = {
          contactus_title: response.items[0].contactus_title.value,
          contactus_subtitle: response.items[0].contactus_subtitle.value,
          contactus_wireless: response.items[0].contactus_wireless.value,
          contactus_wireless_img:
            response.items[0].contactus_images.value[1].url,
          contactus_wireless_text:
            response.items[0].contactus_wireless_text.value,
          contactus_wireless_link:
            response.items[0].contactus_wireless_link.value,
          contactus_wireless_col1: response.items[0].contactus_wireless_col1.resolveHtml(),
          contactus_wireless_col2: response.items[0].contactus_wireless_col2.resolveHtml(),

          contactus_oportunity: response.items[0].contactus_oportunity.value,
          contactus_oportunity_img:
            response.items[0].contactus_images.value[2].url,
          contactus_oportunity_text:
            response.items[0].contactus_oportunity_text.value,
          contactus_oportunity_link:
            response.items[0].contactus_oportunity_link.value,
          contactus_oportunity_col1: response.items[0].contactus_oportunity_col1.resolveHtml(),
          contactus_oportunity_col2: response.items[0].contactus_oportunity_col2.resolveHtml(),

          contactus_protective: response.items[0].contactus_protective.value,

          contactus_protective_col1: response.items[0].contactus_protective_col1.resolveHtml(),
          contactus_protective_col2: response.items[0].contactus_protective_col2.resolveHtml(),

          contactus_protective_img:
            response.items[0].contactus_images.value[3].url,
          contactus_protective_text:
            response.items[0].contactus_protective_text.value,
          contactus_protective_link:
            response.items[0].contactus_protective_link.value,

          contactus_frm_regarding:
            response.items[0].contactus_frm_regarding.value,

          contactus_frm_address: response.items[0].contactus_frm_address.value,

          contactus_frm_associate:
            response.items[0].contactus_frm_associate.value,

          contactus_frm_email: response.items[0].contactus_frm_email.value,

          contactus_frm_explain: response.items[0].contactus_frm_explain.value,

          contactus_frm_city: response.items[0].contactus_frm_city.value,

          contactus_frm_first_name:
            response.items[0].contactus_frm_first_name.value,

          contactus_frm_state: response.items[0].contactus_frm_state.value,

          contactus_frm_zip: response.items[0].contactus_frm_zip.value,

          contactus_frm_last_name:
            response.items[0].contactus_frm_last_name.value,

          contactus_frm_phone: response.items[0].contactus_frm_phone.value,

          contactus_frm_reason: response.items[0].contactus_frm_reason.value,

          contactus_frm_required:
            response.items[0].contactus_frm_required.value,
          contactus_frm_subtitle:
            response.items[0].contactus_frm_subtitle.value,
          contactus_frm_title: response.items[0].contactus_frm_title.value,

          contactUs_corporate: response.items[0].contactus_corporate.value,
          contactUs_corporate_text: response.items[0].contactus_corporate_text.resolveHtml(),
        };

        callbacksetSiteContent(tmpArticle);
      }
    });
};

export const getStateList = (
  callbacksetSiteContent: Dispatch<SetStateAction<iStatesList[] | undefined>>,
  previewMode: boolean
) => {
  let tmpArticle: iStatesList;

  let lang = localStorage.getItem("browserLanguage") + "";

  let queryBlogContent = Client.items()
    //.type("wekynect_com_contactus")
    .equalsFilter("system.codename", "usa_states_list")
    .languageParameter(lang)
    .queryConfig({
      // Ensures that Preview API is used
      usePreviewMode: previewMode,
    });
  queryBlogContent
    .toObservable()
    // .pipe(takeUntil(FUnsubscribe))
    .subscribe((response: any) => {
      if (!response.isEmpty) {
        let tempStringList = response.items[0].list_of_states.value;

        let tempArrList = tempStringList.split(";");

        let stateList: iStatesList[] = [];

        tempArrList.map((state: any) => {
          let tempStateArr = state.split(",");
          let tmpState = {
            state_name: tempStateArr[0],
            state_abbreviation: tempStateArr[1],
          };
          stateList.push(tmpState);
        });

        /*tmpArticle = {
          state_name: response.items[0].state_name.value,
          state_abbreviation: response.items[0].state_abbreviation.value,
        };
 */
        callbacksetSiteContent(stateList);
      }
    });
};

export /**
 *Gets the FAQs from CMS
 *Uses the groupBy Method Above
 *Returns callbacksetFAQList (grouped by categories), ListMinified (used to display searches)
 * @param {boolean} previewMode
 * @param {(Dispatch<SetStateAction<iFaqObj[] | undefined>>)} callbacksetSiteContent
 * @param {(Dispatch<SetStateAction<iFaq[] | undefined>>)} setFaqListMinified
 */
const getServicesAndReasons = (
  callbacksetFAQList: Dispatch<
    SetStateAction<iServiceAndReasons[] | undefined>
  >,
  previewMode: boolean
) =>
  //callbacksetFAQList: Dispatch<SetStateAction<iServiceAndReasons[]>>,
  // setFaqListMinified: Dispatch<SetStateAction<iFaq[]>>
  {
    //get Categories for indexing

    let lang = localStorage.getItem("browserLanguage") + "";
    let serviceArr: iServiceAndReasons[] = [];
    console.log("getServicesAndReasons");
    let queryQuestions = Client.items()
      .type("service_kind")
      .languageParameter(lang)
      .queryConfig({
        // Ensures that Preview API is used
        usePreviewMode: previewMode,
      });
    //get all faqs
    queryQuestions.toObservable().subscribe((response: any) => {
      if (!response.isEmpty) {
        console.log("response", response);
        response.items.map((item: any) => {
          let tmpItem = {
            service: item.service_title.value,
            reasons: item.service_reasons.value.split(","),
          };
          serviceArr.push(tmpItem);
        });
        console.log("response serviceArr", serviceArr);
        callbacksetFAQList(serviceArr);
      }
    });
    //query queryQuestions end
  };

export /**
 *Gets the Leaders from CMS
 *Uses the groupBy Method Above
 *Returns callbacksetFAQList (grouped by categories), ListMinified (used to display searches)
 * @param {boolean} previewMode
 * @param {(Dispatch<SetStateAction<iFaqObj[] | iTeamMemberObj>>)} callbacksetSiteContent
 * @param {(Dispatch<SetStateAction<iFaq[] | iTeamMemberObj>>)} setFaqListMinified
 */
const getLeaders = (
  previewMode: boolean,
  callbacksetTeamMemberList: Dispatch<SetStateAction<iTeamMemberObj[]>>,
  setTeamMemberListMinified: Dispatch<SetStateAction<iExecutive[]>>
) => {
  let tmpArticle: iBlog;
  console.log("getLeaders");

  //get Categories for indexing
  let queryCategories = Client.taxonomy("team_members_position").queryConfig({
    // Ensures that Preview API is used
    usePreviewMode: previewMode,
  });
  queryCategories.toObservable().subscribe((responseCat: any) => {
    let tmpCategoryList = responseCat.taxonomy.terms;
    let lang = localStorage.getItem("browserLanguage") + "";

    let queryMembers = Client.items()
      .type("wekynect_com_team_member")
      .containsFilter("elements.team_member_type", ["leader"])
      .languageParameter(lang)
      .queryConfig({
        // Ensures that Preview API is used
        usePreviewMode: previewMode,
      });
    //get all faqs
    queryMembers.toObservable().subscribe((responseMembers: any) => {
      if (!responseMembers.isEmpty) {
        // response.items[0].blog_content.resolveHtml();
        console.log("getLeaders responseQuestions", responseMembers);

        let tempMemberList: iExecutive[] = [];
        let tempMemberListMinified: iExecutive[] = [];

        //get each faq categories and add to tempFAQList
        responseMembers.items.map((tempMember: any, indextq: number) => {
          tempMember.team_members_positions.value.map(
            (questionCategories: any, indextp: number) => {
              /*
              let tempContentSignup = {
                question: tempMember.question.value,
                answer: tempMember.rtanswer.resolveHtml(),
                is_featured: tempMember.is_featured.value,

                category: tempMember.faq_categories.value[indextp]
                  ? questionCategories.name
                  : "The Basics",
              };
*/
              let tmpContent: iExecutive = {
                executive_description: tempMember.member_description.value,
                executive_title:
                  tempMember.team_members_positions.value[0].name,
                executive_name: tempMember.member_name.value,
                executive_image: tempMember.member_image.value[0].url,
              };

              tempMemberList && tempMemberList.push(tmpContent);
              indextp === 0 && tempMemberListMinified.push(tmpContent);
            }
          );
        });
        setTeamMemberListMinified(tempMemberListMinified);
        console.log("getLeaders tempFAQList2", tempMemberListMinified);

        //Create Map from tempFAQList
        //This is for Indexing as the plat
        const groupedFAQMap = groupBy(
          tempMemberList,
          (member: any) => member.executive_title
        );
        let finalArr: iTeamMemberObj[] = [];

        //Create Final Array of FAQs using the index from the system
        tmpCategoryList.forEach((obj: any) => {
          let tmpArr = groupedFAQMap.get(obj.name);

          let tmpObs: iTeamMemberObj = { title: obj.name, member: tmpArr };
          finalArr.push(tmpObs);
        });

        callbacksetTeamMemberList(finalArr);
        console.log("getLeaders finalArr", finalArr);
      }
    });
    //query queryQuestions end
  });
};

export /**
 *Gets the Leaders from CMS
 *Uses the groupBy Method Above
 *Returns callbacksetFAQList (grouped by categories), ListMinified (used to display searches)
 * @param {boolean} previewMode
 * @param {(Dispatch<SetStateAction<iFaqObj[] | iTeamMemberObj>>)} callbacksetSiteContent
 * @param {(Dispatch<SetStateAction<iFaq[] | iTeamMemberObj>>)} setFaqListMinified
 */
const getBoardMembers = (
  previewMode: boolean,
  callbacksetTeamMemberList: Dispatch<SetStateAction<iTeamMemberObj[]>>,
  setTeamMemberListMinified: Dispatch<SetStateAction<iExecutive[]>>
) => {
  let tmpArticle: iBlog;
  console.log("getLeaders");

  //get Categories for indexing
  let queryCategories = Client.taxonomy("team_members_position").queryConfig({
    // Ensures that Preview API is used
    usePreviewMode: previewMode,
  });
  queryCategories.toObservable().subscribe((responseCat: any) => {
    let tmpCategoryList = responseCat.taxonomy.terms;
    let lang = localStorage.getItem("browserLanguage") + "";

    let queryMembers = Client.items()
      .type("wekynect_com_team_member")
      .anyFilter("elements.team_member_type", ["founder", "manager"])
      .languageParameter(lang)
      .queryConfig({
        // Ensures that Preview API is used
        usePreviewMode: previewMode,
      });
    //get all faqs
    queryMembers.toObservable().subscribe((responseMembers: any) => {
      if (!responseMembers.isEmpty) {
        // response.items[0].blog_content.resolveHtml();
        console.log("getLeaders responseQuestions", responseMembers);

        let tempMemberList: iExecutive[] = [];
        let tempMemberListMinified: iExecutive[] = [];

        //get all members
        responseMembers.items.map((tempMember: any, indextq: number) => {
          //get all positions
          tempMember.team_members_positions.value.map(
            (jobPositions: any, indextp: number) => {
              console.log("getLeaders questionCategories", jobPositions);

              /*
              let tempContentSignup = {
                question: tempMember.question.value,
                answer: tempMember.rtanswer.resolveHtml(),
                is_featured: tempMember.is_featured.value,

                category: tempMember.faq_categories.value[indextp]
                  ? questionCategories.name
                  : "The Basics",
              };
*/
              let tmpContent: iExecutive = {
                executive_description: tempMember.member_description.value,
                executive_title: jobPositions.name,
                executive_name: tempMember.member_name.value,
                executive_image: tempMember.member_image.value[0].url,
              };
              console.log("getLeaders tmpContent", tmpContent);

              tempMemberList && tempMemberList.push(tmpContent);
              indextp === 0 && tempMemberListMinified.push(tmpContent);
            }
          );
        });
        setTeamMemberListMinified(tempMemberListMinified);
        console.log("getLeaders tempFAQList2", tempMemberListMinified);

        //Create Map from tempFAQList
        //This is for Indexing as the plat
        const groupedFAQMap = groupBy(
          tempMemberList,
          (member: any) => member.executive_title
        );
        let finalArr: iTeamMemberObj[] = [];

        //Create Final Array of FAQs using the index from the system
        tmpCategoryList.forEach((obj: any) => {
          let tmpArr = groupedFAQMap.get(obj.name);

          console.log("getLeaders tmpArr", tmpArr);
          console.log("getLeaders tmpArr", tmpArr);
          console.log("getLeaders tmpArr obj", obj);

          let tmpObs: iTeamMemberObj = { title: obj.name, member: tmpArr };
          tmpArr && finalArr.push(tmpObs);
        });

        callbacksetTeamMemberList(finalArr);
        console.log("getLeaders finalArr", finalArr);
      }
    });
    //query queryQuestions end
  });
};
