import { ContentItem } from "@kentico/kontent-delivery";
import { resolveContentLink } from "../Utilities/ContentLinks";

//import "./hosted_video.css";
export class HostedVideo extends ContentItem {
  constructor() {
    super({
      richTextResolver: (video) => {
        let tmpPosition = "";
        let tmpHost = "";
        let tmpVideoId = "";
        video.position.value[0].codename &&
          (tmpPosition = video.position.value[0].codename);
        video.videoHost.value[0].name &&
          (tmpHost = video.videoHost.value[0].name);
        tmpVideoId = video.videoId.value;
        if (tmpHost === "Vimeo") {
          return `<div style="  text-align: ${tmpPosition}"> 
                        <iframe class="hosted-video-wrapper-vimeo"
                                src="https://player.vimeo.com/video/${tmpVideoId}?title=0&byline=0&portrait=0"
                         
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen
                                >
                        </iframe>
                  </div>`;
        } else if (tmpHost === "Youtube") {
          return `<div style="  text-align: ${tmpPosition}"> 
                        <iframe   class="hosted-video-wrapper-youtube"
                               
                                src="https://www.youtube.com/embed/${tmpVideoId}"
                                frameborder="0"
                                allowfullscreen
                                >
                        </iframe>
                  </div>`;
        }
      },
      propertyResolver: (fieldName) => {
        if (fieldName === "video_id") {
          return "videoId";
        }
        if (fieldName === "video_host") {
          return "videoHost";
        }
        return fieldName;
      },
      linkResolver: (link) => resolveContentLink(link),
    });
  }
}
