export function parseHomeContent(content: any) {
  return {
    home_hero_img: content.home_images.value[0].url,
    home_hero_text: content.home_hero_text.value,
    seo_data: {
      meta_data: {
        url_slug: content.url_slug.value && content.url_slug.value,
        seo_metas__meta_title:
          content.home_title.value && content.home_title.value,
        seo_metas__meta_description:
          content.home_title.value && content.home_title.value,
        home_meta_tags:
          content.home_meta_tags.value && content.home_meta_tags.value,
        seo_metas__meta_image:
          content.seo_meta__meta_images.value[0] &&
          content.seo_meta__meta_images.value[0].url,
      },
    },
  };
}

export function parseWhyContent(content: any) {
  //console.log("content", content.page_content);

  return {
    page_images: content.page_images.value[0].url,
    page_content: content.page_content.resolveHtml(),
    page_title: content.page_title.value,
    page_title2: content.page_title2.value,
  };
}
