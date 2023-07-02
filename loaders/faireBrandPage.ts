import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import type { FaireBrand, FaireResponse } from "$store/components/types.ts";
import { fetchAPI } from "deco-sites/std/utils/fetch.ts";

export interface Props {
  slug: RequestURLParam;
}

async function loader(props: Props): Promise<FaireBrand | null> {
  const { slug } = props;

  if (!slug) return null;

  const fetchData = await fetchAPI<FaireResponse>(
    `https://www.faire.com/brand/${slug}`,
  );

  const {
    prefetched_data: { brand_view },
  } = fetchData;

  return {
    titlePage: brand_view.show_optimized_brand_page_copy
      ? `${brand_view.brand.name} for your store | ${brand_view.brand.name} wholesale products on Faire`
      : `Spiral Wholesale Products | Buy with Free Returns on Faire.com`,
    // TODO: Descobrir de onde vem a description da pagina quando show_optimized_brand_page_copy é true
    metaDescriptionPage: brand_view.brand.description,
    //
    name: brand_view.brand.name,
    profileName: brand_view.show_optimized_brand_page_copy
      ? `${brand_view.brand.name} products for your store`
      : `Purchase ${brand_view.brand.name} for your store`,
    profileDescription: brand_view.show_optimized_brand_page_copy
      ? `${brand_view.brand.name} and other independent brands on the Faire wholesale marketplace.`
      : `Discover thousands of independent wholesale vendors in the Faire marketplace.`,
    profileImage: brand_view.brand.profile_image,
    bannerImage: brand_view.brand.banner_image.url,
    modalStory: {
      storyImage: brand_view.brand.story_image.url,
      basedIn: brand_view.brand.based_in,
      account: brand_view.brand.instagram_handle,
      description: brand_view.brand.description,
      established: brand_view.brand.creation_year,
      brandTags: brand_view.brand.tags,
      storyImages: brand_view.brand.story_images,
      featuredIn: brand_view.brand.badges,
      videoUrl: brand_view.brand.video_url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: brand_view.brand.brand_reviews_summary.average_rating,
      reviewCount: brand_view.brand.brand_reviews_summary.number_of_reviews,
    },
  };
}

export default loader;
