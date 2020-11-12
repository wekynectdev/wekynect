import { ContentItem } from "@kentico/kontent-delivery";
import { resolveContentLink } from "../Utilities/ContentLinks";
import React, { useEffect, SetStateAction, Dispatch } from "react";

export class Button extends ContentItem {
  constructor() {
    super({
      richTextResolver: (button) => {
        return `
        <a 
        class="btn-blog"
        style="
          background-color: #ee6f1e; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 12px;
        "
         href=${button.button_url.value}>${button.button_text.value}</a> `;
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
