import { ContentItem } from "@kentico/kontent-delivery";
import { resolveContentLink } from "../Utilities/ContentLinks";
//import "./Button.css";
export class Button extends ContentItem {
  constructor() {
    super({
      richTextResolver: (button) => {
        let tmpPosition = "";
        let tmpIsLink = "";
        let tmpNewTab = "";

        button.position.value[0].codename &&
          (tmpPosition = button.position.value[0].codename);
        button.show_as_link.value[0].codename &&
          (tmpIsLink = button.show_as_link.value[0].codename);
        button.new_tab.value[0].codename &&
          (tmpNewTab = button.new_tab.value[0].codename);
        return `
        <div 
        style="
        text-align: ${tmpPosition};
        "><a 
         class="${tmpIsLink === "yes" ? "btn-item-link" : "btn-item"}" 
             target: ${tmpNewTab === "yes" ? "'_blank'" : "'_self'"};
         href=${button.button_url.value}>${
          button.button_text.value
        }</a></div> `;
      },
      propertyResolver: (fieldName) => {
        if (fieldName === "button_url") {
          return "button_url";
        }
        if (fieldName === "button_url") {
          return "button_url";
        }
        return fieldName;
      },
      linkResolver: (link) => resolveContentLink(link),
    });
  }
}
