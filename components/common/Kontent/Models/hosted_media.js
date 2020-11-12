import { ContentItem } from "@kentico/kontent-delivery";
import { resolveContentLink } from "../Utilities/ContentLinks";
//import "./hosted_media.css";
export class HostedMedia extends ContentItem {
  constructor() {
    super({
      richTextResolver: (media) => {
        // console.log("richTextResolver media", media);

        let tmpPosition = "";
        let tmpIsLink = "";
        let tmpNewTab = "";

        media.mediaPosition.value[0].codename &&
          (tmpPosition = media.mediaPosition.value[0].codename);

        media.mediaNewTabUrl.value[0].codename &&
          (tmpNewTab = media.mediaNewTabUrl.value[0].codename);

        if (media.mediaHost.value[0].codename === "vimeo") {
          return `<iframe class="hosted-media__wrapper"
                                src="https://player.vimeo.com/media/${media.mediaId.value}?title=0&byline=0&portrait=0"
                                width="640"
                                height="360"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen
                                >
                        </iframe>`;
        } else if (media.mediaHost.value[0].codename === "youtube") {
          return `<iframe class="hosted-media__wrapper"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/${media.mediaId.value}"
                                frameborder="0"
                                allowfullscreen
                                >
                        </iframe>`;
        } else if (media.mediaHost.value[0].codename === "external_media") {
          if (media.mediaIsLink.value[0].codename === "yes") {
            return `</p>
            
                <div
                style="
        text-align: ${tmpPosition};
        ">
       
                <a  
                href="${media.mediaLinkURL.value}"
                target=${tmpNewTab === "yes" ? "'_blank'" : "'_self'"}>
                <img class="hosted-image__wrapper" 
                src="${media.mediaURL.value}" />
                </a>
                <p    style="
                text-align: ${tmpPosition};
                ">${media.mediaLegend.value}</p>
                </div>`;
          } else {
            return `</p>
          
          <div><img class="hosted-image__wrapper" src="${media.mediaURL.value}" />
          </div>`;
          }
        }

        //target: ${tmpNewTab === "yes" ? "'_blank'" : "'_self'"};
      },
      propertyResolver: (fieldName) => {
        if (fieldName === "media_id") {
          return "mediaId";
        }
        if (fieldName === "media_host") {
          return "mediaHost";
        }
        if (fieldName === "media_url") {
          return "mediaURL";
        }
        if (fieldName === "position") {
          return "mediaPosition";
        }
        if (fieldName === "position") {
          return "mediaPosition";
        }
        if (fieldName === "media_is_link") {
          return "mediaIsLink";
        }
        if (fieldName === "media_link_url") {
          return "mediaLinkURL";
        }
        if (fieldName === "media_link_new_tab") {
          return "mediaNewTabUrl";
        }
        if (fieldName === "media_legend") {
          return "mediaLegend";
        }

        return fieldName;
      },
      linkResolver: (link) => resolveContentLink(link),
    });
  }
}
