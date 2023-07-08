import type {
  AggregateRating,
  BreadcrumbList,
} from "deco-sites/std/commerce/types.ts";

export interface FaireBrand {
  breadcrumbList: BreadcrumbList;
  titlePage: string;
  metaDescriptionPage: string;
  name: string;
  profileName: string;
  profileDescription: string;
  profileImage: ProfileImage;
  bannerImage: string;
  modalStory: {
    storyImage: string;
    basedIn: string;
    basedInCity: string;
    account: string;
    description: string;
    established: number;
    brandTags: Tag[];
    storyImages: StoryImage[];
    featuredIn: Badge[];
    videoUrl: string | undefined;
  };
  aggregateRating: AggregateRating;
}
export interface FaireResponse {
  req: Request;
  env_name: string;
  cdn_url: string;
  ad_user_data: unknown;
  og_meta_data: OgMetaData;
  facebook_open_graph_image_url: string;
  is_robot: boolean;
  is_prerender: boolean;
  is_url_recognized: boolean;
  server_side_render: string;
  react_renderer: string;
  original_url: string;
  server_side_canonicalization: boolean;
  canonical_u_r_l: string;
  templated_path: string;
  meta_description: string;
  meta_keywords: string;
  facebook_retailer_pixel_id: string;
  facebook_maker_pixel_id: string;
  facebook_optimization_test_pixel_id: string;
  serve_heap_analytics: boolean;
  google_tag_manager_container_id: string;
  sentry_id: string;
  cookie_consent_key: string;
  google_sso_client_id: string;
  release_version: string;
  release_sha: string;
  js_version: string;
  js_integrity: string;
  enable_js_integrity: boolean;
  css_version: string;
  js_locale: string;
  load_only_visible_images: boolean;
  show_experimental_home_page_design: boolean;
  maker_count: number;
  new_brands_count: number;
  new_brands_this_week_count: number;
  should_show_app_banner_mobile: boolean;
  app_promotion_banner_links: AppPromotionBannerLinks;
  is_app_installed: boolean;
  show_amex_banner: boolean;
  first_order_free_shipping_offer_expires_at: number;
  has_placed_first_app_order: boolean;
  opening_order_discount_data: OpeningOrderDiscountData;
  first_order_incentive_discount_data: unknown;
  app_download_incentive_data: unknown;
  re_engagement_incentive_data: unknown;
  user_token: string;
  session_country: string;
  currency_format_locale: string;
  store_type: string;
  is_verified_retailer: boolean;
  is_apparel_retailer: boolean;
  is_upmarket_retailer: boolean;
  is_engaged_upmarket_retailer: boolean;
  is_eligible_for_apparel_exclusive_sale: boolean;
  nudge_to_checkout: NudgeToCheckout;
  brand_token: string;
  walkthrough_time_remaining_millis: number;
  plaid_env: string;
  plaid_key: string;
  plaid_webhook_url: string;
  square_connection_application_id: string;
  square_connection_location_id: string;
  stripe_public_key: string;
  google_places_api_key: string;
  elevate_brand_token: string;
  cdn_name: string;
  promo_modal_information: PromoModalInformation;
  brand_discounts: BrandDiscounts;
  has_memberships: boolean;
  is_frontend_override: boolean;
  has_referrals_r2_m: boolean;
  bundle_prefix: string;
  insider_shipping_savings: unknown;
  is_locally_hosted_frontend: boolean;
  datadog_rum_config: DatadogRumConfig;
  settings_values: string;
  hotjar_settings_values: string;
  performance_metric_settings: string;
  net_terms_blocker_experiment: boolean;
  vendor_bundle_url: string;
  address_schema_map: AddressSchemaMap;
  locale_key: LocaleKey;
  locale_id: string;
  route_product_area: string;
  route_pod: string;
  route_pillar: string;
  prefetched_data: PrefetchedData;
  apple_sso_client_id: string;
  category_tree_type: string;
  category_user_group: string;
  navigation_tree_hash_code: string;
  record_lifecycle_events: boolean;
  product_schema: string;
  reduce_preloaded_fonts: boolean;
  next_or_active_promotional_event: NextOrActivePromotionalEvent;
  use_woff: boolean;
  user_agent: string;
  market_event_matched_discount_bps: number;
  market_event_free_shipping_matched_discount_bps: number;
  use_react18_renderer: boolean;
  stream_grpc_request: boolean;
  modal_data: unknown;
  user_milestones: unknown[];
  referral_promotions: unknown[];
  categories: unknown[];
  featured_seasonal_tiles: unknown[];
  free_shipping_statuses: unknown[];
  available_memberships: unknown[];
  preload_urls: unknown[];
  preload_resources: unknown[];
  suggested_search_terms: unknown[];
  href_langs: HrefLang[];
  promotional_event_milestones: unknown[];
}

export interface OgMetaData {
  url: string;
  title: string;
  description: string;
  has_width: boolean;
  has_height: boolean;
}

export interface AppPromotionBannerLinks {
  app_store_link: string;
  play_store_link: string;
  ios_deep_link: string;
  android_deep_link: string;
}

export interface OpeningOrderDiscountData {
  is_retailer_eligible: boolean;
}

export interface NudgeToCheckout {
  images: unknown[];
}

export interface PromoModalInformation {
  type: string;
}

export interface BrandDiscounts {
  brand_discounts: unknown;
}

export interface DatadogRumConfig {
  sample_rate: number;
  replay_sample_rate: number;
  client_token: string;
  application_id: string;
  service: string;
  allowed_tracing_origins: string[];
}

export interface AddressSchemaMap {
  schemas: Schemas;
}

export interface Schemas {
  CAN: Can;
  USA: Usa;
  GBR: Gbr;
  NLD: Nld;
  DNK: Dnk;
  DEU: Deu;
  FRA: Fra;
  ESP: Esp;
  ITA: Ita;
  IRL: Irl;
  AUT: Aut;
  BEL: Bel;
  LUX: Lux;
  HKG: Hkg;
  FIN: Fin;
  NOR: Nor;
  SWE: Swe;
  CHE: Che;
  HUN: Hun;
  POL: Pol;
  CZE: Cze;
  IND: Ind;
  SGP: Sgp;
  PHL: Phl;
  PRT: Prt;
  AUS: Aus;
  NZL: Nzl;
}

export interface Can {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels;
}

export interface Labels {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
  state: string;
}

export interface Usa {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels2;
}

export interface Labels2 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Gbr {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels3;
}

export interface Labels3 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Nld {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels4;
}

export interface Labels4 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Dnk {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels5;
}

export interface Labels5 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Deu {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels6;
}

export interface Labels6 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Fra {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels7;
}

export interface Labels7 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Esp {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels8;
}

export interface Labels8 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Ita {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels9;
}

export interface Labels9 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Irl {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels10;
}

export interface Labels10 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Aut {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels11;
}

export interface Labels11 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Bel {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels12;
}

export interface Labels12 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Lux {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels13;
}

export interface Labels13 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Hkg {
  display_format: string;
  input_format: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels14;
}

export interface Labels14 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Fin {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels15;
}

export interface Labels15 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Nor {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels16;
}

export interface Labels16 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Swe {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels17;
}

export interface Labels17 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Che {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels18;
}

export interface Labels18 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Hun {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels19;
}

export interface Labels19 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Pol {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels20;
}

export interface Labels20 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Cze {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels21;
}

export interface Labels21 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Ind {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels22;
}

export interface Labels22 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Sgp {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels23;
}

export interface Labels23 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Phl {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels24;
}

export interface Labels24 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Prt {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels25;
}

export interface Labels25 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Aus {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels26;
}

export interface Labels26 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface Nzl {
  display_format: string;
  input_format: string;
  postal_code_regex_pattern: string;
  input_format_for_two_columns: string;
  required_fields: string[];
  labels: Labels27;
}

export interface Labels27 {
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
}

export interface LocaleKey {
  language: string;
}

export interface PrefetchedData {
  brand_view: BrandView;
  brand_view_v2: BrandViewV2;
}

export interface BrandView {
  brand: Brand;
  shop_preferences: ShopPreferences;
  faire_winter_market_apparel_preorder_special_eligibility: boolean;
  brand_video_pagination_data: BrandVideoPaginationData;
  eligible_for_uk_eu_brands_free_shipping: boolean;
  import_shipment_info: string;
  is_non_returnable_partner_brand: boolean;
  has_insider_free_duties: boolean;
  is_showroom_brand: boolean;
  brand_sample_program: BrandSampleProgram;
  learn_more_brand_tags_help_center_link: string;
  learn_more_brand_tags_copy: string;
  has_current_or_upcoming_market_promotion: boolean;
  show_optimized_brand_page_copy: boolean;
  brand_location_info: BrandLocationInfo;
  brand_social_media_info: unknown;
  banners: unknown[];
  related_search_terms: string[];
  brand_videos: unknown[];
  active_season_years: unknown[];
  info_texts: InfoText[];
  faire_funded_promo: unknown[];
  highlighted_apparel_seasons_for_promotional_event: unknown[];
  promo_display_texts: unknown[];
}

export interface Brand {
  token: string;
  token_alias: string;
  is_internal: boolean;
  active: boolean;
  owner_user_token: string;
  name: string;
  short_description: string;
  description: string;
  url: string;
  instagram_handle: string;
  minimum_order_amount_cents: number;
  first_order_minimum_amount_cents: number;
  reorder_minimum_amount_cents: number;
  made_in: string;
  based_in: string;
  based_in_city: string;
  ships_from_country: string;
  is_eligible_for_insider_subsidy: boolean;
  eco_friendly: boolean;
  charitable: boolean;
  hand_made: boolean;
  women_owned: boolean;
  organic: boolean;
  small_batch: boolean;
  sold_on_amazon: boolean;
  story_image: StoryImage;
  lead_time_days: number;
  lower_bound_lead_time_days: number;
  upper_bound_lead_time_days: number;
  creation_year: number;
  squared_image: SquaredImage;
  accepted_terms: boolean;
  hide_chat: boolean;
  forbids_online_only_retailers: boolean;
  forbids_social_media_only_retailers: boolean;
  is_first_order: boolean;
  first_order_returns_limit_cents: number;
  zip_code_protection_enabled: boolean;
  first_active_at: number;
  active_products_count: number;
  last_product_added_at: number;
  has_new_products: boolean;
  elevate_commission_bps: number;
  allows_scheduled_orders: boolean;
  is_new: boolean;
  override_lead_time_estimates: boolean;
  federal_tax_info_needed: boolean;
  no_consumer_resale: boolean;
  accepts_returns: boolean;
  return_orders_discount_bps: number;
  brand_reviews_summary: BrandReviewsSummary;
  version: number;
  created_at: number;
  shipping_label_printing_preference: string;
  state: string;
  owner_first_name: string;
  banner_image: BannerImage;
  profile_image: ProfileImage;
  selected_for_international_best_sellers: boolean;
  purchase_order_brand_type: string;
  force_enable_faire_direct: boolean;
  enable_pre_packs: boolean;
  logo_image: LogoImage;
  minimum_order_amount: MinimumOrderAmount;
  first_order_minimum_amount: FirstOrderMinimumAmount;
  reorder_minimum_amount: ReorderMinimumAmount;
  first_order_returns_limit: FirstOrderReturnsLimit;
  live_streaming_enabled: boolean;
  guaranteed_volume_status: string;
  has_samples: boolean;
  estimated_ship_date_formatted: string;
  primary_category: string;
  is_apparel: boolean;
  faire_winter_market_apparel_preorder_special_eligibility: boolean;
  original_locale_id: string;
  currency: string;
  shop_currency: string;
  is_highlighted_brand_for_promotional_event: boolean;
  size_segment: string;
  is_top_shop: boolean;
  tax_form_preference: string;
  is_mid_price_point_plus: boolean;
  categories: unknown[];
  deranked_categories: unknown[];
  images: unknown[];
  social_media_images: unknown[];
  badges: Badge[];
  squared_category_images: unknown;
  ship_from_addresses: unknown[];
  available_terms: unknown[];
  restricted_states: unknown[];
  forbidden_states: unknown[];
  reduced_commission_states: unknown[];
  restricted_countries: unknown[];
  restricted_geo_constraints: unknown[];
  memberships: unknown[];
  story_images: StoryImage[];
  active_brand_promos: unknown[];
  active_promo_collections: unknown[];
  order_minimum_overrides: unknown[];
  minimums: unknown[];
  certifications: unknown[];
  business_identifiers: unknown[];
  tags: Tag[];
  video_url?: string;
}

export interface StoryImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: unknown[];
}

export interface SquaredImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface BrandReviewsSummary {
  average_rating: number;
  number_of_reviews: number;
  review_count_by_rating: ReviewCountByRating;
  review_percentage_by_rating: ReviewPercentageByRating;
}

export interface ReviewCountByRating {
  "5": number;
}

export interface ReviewPercentageByRating {
  "5": number;
}

export interface BannerImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface ProfileImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: unknown[];
}

export interface LogoImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface MinimumOrderAmount {
  amount_cents: number;
  currency: string;
}

export interface FirstOrderMinimumAmount {
  amount_cents: number;
  currency: string;
}

export interface ReorderMinimumAmount {
  amount_cents: number;
  currency: string;
}

export interface FirstOrderReturnsLimit {
  amount_cents: number;
  currency: string;
}

export interface Tag {
  token: string;
  tag: string;
  tag_type: string;
  tag_definition: string;
}

export interface ShopPreferences {
  still_fulfilling: boolean;
}

export interface BrandVideoPaginationData {
  page_number: number;
  page_size: number;
  page_count: number;
  total_results: number;
}

export interface BrandSampleProgram {
  is_samples_enabled_for_session: boolean;
  is_pilot_group: boolean;
}

export interface BrandLocationInfo {
  ships_from_country_display_name: string;
  made_in_country_display_name: string;
}

export interface InfoText {
  text: string;
  text_color: string;
  style: string;
  type: string;
  tooltip?: string;
}

export interface BrandViewV2 {
  brand: Brand2;
  shop_preferences: ShopPreferences2;
  brand_video_pagination_data: BrandVideoPaginationData2;
  eligible_for_uk_eu_brands_free_shipping: boolean;
  is_non_returnable_partner_brand: boolean;
  has_insider_free_duties: boolean;
  is_showroom_brand: boolean;
  brand_sample_program: BrandSampleProgram2;
  has_current_or_upcoming_market_promotion: boolean;
  show_optimized_brand_page_copy: boolean;
  brand_location_info: BrandLocationInfo2;
  brand_social_media_info: unknown;
  banners: unknown[];
  related_search_terms: string[];
  brand_videos: unknown[];
  active_season_years: unknown[];
  info_texts: InfoText2[];
  faire_funded_promo: unknown[];
  highlighted_apparel_seasons_for_promotional_event: unknown[];
  promo_display_texts: unknown[];
}

export interface Brand2 {
  token: string;
  active: boolean;
  is_new: boolean;
  name: string;
  profile_image: ProfileImage2;
  squared_image: SquaredImage2;
  description: string;
  is_internal: boolean;
  has_samples: boolean;
  is_top_shop: boolean;
  based_in: string;
  based_in_city: string;
  ships_from_country: string;
  hide_chat: boolean;
  primary_category: string;
  is_highlighted_brand_for_promotional_event: boolean;
  made_in: string;
  sold_on_amazon: boolean;
  eco_friendly: boolean;
  hand_made: boolean;
  charitable: boolean;
  organic: boolean;
  women_owned: boolean;
  small_batch: boolean;
  minimum_order_amount: MinimumOrderAmount2;
  first_order_minimum_amount: FirstOrderMinimumAmount2;
  reorder_minimum_amount: ReorderMinimumAmount2;
  lead_time_days: number;
  upper_bound_lead_time_days: number;
  lower_bound_lead_time_days: number;
  estimated_ship_date_formatted: string;
  zip_code_protection_enabled: boolean;
  is_first_order: boolean;
  banner_image: BannerImage2;
  owner_first_name: string;
  creation_year: number;
  instagram_handle: string;
  brand_reviews_summary: BrandReviewsSummary2;
  has_new_products: boolean;
  is_apparel: boolean;
  active_products_count: number;
  active_promo_collections: unknown[];
  badges: Badge[];
  story_images: unknown[];
  tags: Tag2[];
  social_media_images: unknown[];
}
export interface Badge {
  type: string;
  image: {
    url: string;
    tags: unknown[];
  };
}
export interface ProfileImage2 {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: unknown[];
}

export interface SquaredImage2 {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface MinimumOrderAmount2 {
  amount_cents: number;
  currency: string;
}

export interface FirstOrderMinimumAmount2 {
  amount_cents: number;
  currency: string;
}

export interface ReorderMinimumAmount2 {
  amount_cents: number;
  currency: string;
}

export interface BannerImage2 {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface BrandReviewsSummary2 {
  average_rating: number;
  number_of_reviews: number;
  review_count_by_rating: ReviewCountByRating2;
  review_percentage_by_rating: ReviewPercentageByRating2;
}

export interface ReviewCountByRating2 {
  "5": number;
}

export interface ReviewPercentageByRating2 {
  "5": number;
}

export interface Tag2 {
  token: string;
  tag: string;
  tag_type: string;
  tag_definition: string;
}

export interface ShopPreferences2 {
  still_fulfilling: boolean;
}

export interface BrandVideoPaginationData2 {
  page_number: number;
  page_size: number;
  page_count: number;
  total_results: number;
}

export interface BrandSampleProgram2 {
  is_samples_enabled_for_session: boolean;
  is_pilot_group: boolean;
}

export interface BrandLocationInfo2 {
  ships_from_country_display_name: string;
  made_in_country_display_name: string;
}
export interface InfoText2 {
  text: string;
  text_color: string;
  style: string;
  type: string;
  tooltip?: string;
}

export interface NextOrActivePromotionalEvent {
  event: Event;
  brand_portal_launch_time: BrandPortalLaunchTime;
  market_list_launch_time: MarketListLaunchTime;
  retailer_pre_show_launch_time: RetailerPreShowLaunchTime;
  pre_compute_homepage_launch_time: PreComputeHomepageLaunchTime;
  insider_early_access_start_at: number;
  start_at: number;
  end_at: number;
}

export interface Event {
  event_type: string;
  event_name: string;
  main_style: MainStyle;
  promotional_style: PromotionalStyle;
  mobile_images: MobileImages;
  only_style_highlighted_for_promotional_event: boolean;
  event_group: string;
  logo_url: string;
}

export interface MainStyle {
  text_color: string;
  background_color: string;
  image_url: string;
  badge_background_color: string;
  primary_color2: string;
  layout_element_colors: LayoutElementColors;
  market_listlayout_element_colors: MarketListlayoutElementColors;
  pre_show_enrolledlayout_element_colors: PreShowEnrolledlayoutElementColors;
}

export interface LayoutElementColors {
  main_text_color: string;
  description_text_color: string;
  background_color: string;
}

export interface MarketListlayoutElementColors {
  main_text_color: string;
  description_text_color: string;
  background_color: string;
}

export interface PreShowEnrolledlayoutElementColors {
  main_text_color: string;
  description_text_color: string;
  background_color: string;
}

export interface PromotionalStyle {
  text_color: string;
  background_color: string;
  image_url: string;
  badge_background_color: string;
}

export interface MobileImages {
  mobile_pre_show_banner_ineligible_image: MobilePreShowBannerIneligibleImage;
  mobile_pre_show_banner_enrolled_image: MobilePreShowBannerEnrolledImage;
  mobile_pre_show_banner_inactive_image: MobilePreShowBannerInactiveImage;
  mobile_hero_banner_image: MobileHeroBannerImage;
  mobile_interstitial_banner_image: MobileInterstitialBannerImage;
  mobile_insider_banner_title_icon_image: MobileInsiderBannerTitleIconImage;
  mobile_transparent_title_icon_image: MobileTransparentTitleIconImage;
  mobile_hompage_icon_image: MobileHompageIconImage;
  mobile_homepage_enrolled_icon_image: MobileHomepageEnrolledIconImage;
  mobile_insider_icon_image: MobileInsiderIconImage;
  mobile_insider_enrolled_icon_image: MobileInsiderEnrolledIconImage;
}

export interface MobilePreShowBannerIneligibleImage {
  url: string;
  tags: unknown[];
}

export interface MobilePreShowBannerEnrolledImage {
  url: string;
  tags: unknown[];
}

export interface MobilePreShowBannerInactiveImage {
  url: string;
  tags: unknown[];
}

export interface MobileHeroBannerImage {
  url: string;
  tags: unknown[];
}

export interface MobileInterstitialBannerImage {
  url: string;
  tags: unknown[];
}

export interface MobileInsiderBannerTitleIconImage {
  width: number;
  height: number;
  url: string;
  tags: unknown[];
}

export interface MobileTransparentTitleIconImage {
  url: string;
  tags: unknown[];
}

export interface MobileHompageIconImage {
  url: string;
  tags: unknown[];
}

export interface MobileHomepageEnrolledIconImage {
  url: string;
  tags: unknown[];
}

export interface MobileInsiderIconImage {
  url: string;
  tags: unknown[];
}

export interface MobileInsiderEnrolledIconImage {
  url: string;
  tags: unknown[];
}

export interface BrandPortalLaunchTime {
  seconds: number;
  nanos: number;
}

export interface MarketListLaunchTime {
  seconds: number;
  nanos: number;
}

export interface RetailerPreShowLaunchTime {
  seconds: number;
  nanos: number;
}

export interface PreComputeHomepageLaunchTime {
  seconds: number;
  nanos: number;
}

export interface HrefLang {
  href: string;
  hreflang: string;
}

export interface FaireSearchResultBrandV2 {
  request_id: string;
  pagination_data: PaginationData;
  currently_selected_category: CurrentlySelectedCategory;
  should_show_vertical_image: boolean;
  product_tiles: ProductTile[];
  filter_sections: FilterSection[];
  products: unknown[];
  products_per_category: ProductsPerCategory;
  product_categories_display_order: unknown[];
  products_per_category_path_identifier: ProductsPerCategoryPathIdentifier;
  seasonal_products_per_category_path_identifiers: unknown[];
  badges: Badges;
}

export interface PaginationData {
  page_number: number;
  page_size: number;
  page_count: number;
  total_results: number;
}

export interface CurrentlySelectedCategory {
  category_name: string;
}

export interface ProductTile {
  product: Product;
  badge_list: BadgeList;
  best_image: BestImage;
  quick_add: QuickAdd;
  min_option_retail_price: MinOptionRetailPrice;
  has_active_brand_promo: boolean;
  is_highlighted_product_for_promotional_event: boolean;
  min_option_brand_code: string;
  based_in_country: string;
  show_location_badging: string;
  has_free_shipping_reason: boolean;
  images: Image[];
  case_size_text?: string;
}

export interface Product {
  token: string;
  name: string;
  brand_token: string;
  is_new: boolean;
  maker_best_seller: boolean;
  per_style_min_order_quantity: number;
  state: string;
  description: string;
  taxonomy_type: TaxonomyType;
  preorderable: boolean;
  board_tokens: unknown[];
  promoted_by: unknown[];
}

export interface TaxonomyType {
  token: string;
  name: string;
  group_name: string;
  clean_name: string;
  target_customer: string;
  target_customer_display_name: string;
}

export interface BadgeList {
  badges: Badge[];
}

export interface Badge {
  priority: number;
  type: string;
  display_to_user: boolean;
  style: Style;
}

export interface Style {
  position: string;
  badge_message: string;
  badge_message_key: string;
}

export interface BestImage {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  type?: string;
  tags: string[];
}

export interface QuickAdd {
  quick_add_text: string;
  mobile_quick_add_text: string;
  quick_add_option?: QuickAddOption;
}

export interface QuickAddOption {
  option_token: string;
  option_unit_multiplier: number;
  option_min_order_quantity: number;
  option_available_units: number;
}

export interface MinOptionRetailPrice {
  amount_cents: number;
  currency: string;
}

export interface Image {
  token: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  type?: string;
  tags: string[];
}

export interface FilterSection {
  selection_type: string;
  field_name: string;
  display_name: string;
  formatted_display_name: string;
  short_display_name: string;
  searchable: boolean;
  field_function: string;
  default_option_key: string;
  pill_text: string;
  options: Option[];
  range_filters: unknown[];
  option_groups: unknown[];
}

export interface Option {
  key: string;
  display_name: string;
  global_display_name: string;
  is_selected: boolean;
  selection_state: string;
  sub_options: SubOption[];
  customizations: unknown[];
  results_count?: number;
  group_key?: string;
}

export interface SubOption {
  key: string;
  display_name: string;
  global_display_name: string;
  is_selected: boolean;
  selection_state: string;
  results_count: number;
  group_key: string;
  sub_options: unknown[];
  customizations: unknown[];
}

// export interface ProductsPerCategory {}
export type ProductsPerCategory = unknown;

export type ProductsPerCategoryPathIdentifier = unknown;

export type Badges = unknown;
