import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSlicesAboutRprocess extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_about_rprocesses';
  info: {
    description: '';
    displayName: 'aboutRprocess';
    icon: 'business-time';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface AboutSlicesAboutSecond extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_about_seconds';
  info: {
    description: '';
    displayName: 'aboutSecond';
    icon: 'align-justify';
  };
  attributes: {
    backgroundText: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', true>;
    colorTitle: Schema.Attribute.String;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    leftHeading: Schema.Attribute.String;
    leftSecond: Schema.Attribute.String;
    playIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    playIconClass: Schema.Attribute.String;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    videoSubTitle: Schema.Attribute.String;
    videoTitle: Schema.Attribute.String;
  };
}

export interface AboutSlicesAspireCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_aspire_core_values';
  info: {
    description: '';
    displayName: 'aspireCoreValues';
    icon: 'arrow-circle-up';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cards: Schema.Attribute.Component<'shared.only-title-img-rich', true>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutSlicesAspireVisionMission extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_aspire_vision_missions';
  info: {
    description: '';
    displayName: 'aspireVisionMission';
    icon: 'archive';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.title-desc-num', true>;
    heading: Schema.Attribute.String;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    rightDescDown: Schema.Attribute.Text;
    rightDescUp: Schema.Attribute.Text;
    secondHeading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutSlicesAwards extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_awards';
  info: {
    description: '';
    displayName: 'awards';
    icon: 'chess-pawn';
  };
  attributes: {
    details: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trophies: Schema.Attribute.Component<'shared.lines', true>;
  };
}

export interface AboutSlicesHoWeStarted extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_ho_we_starteds';
  info: {
    description: '';
    displayName: 'hoWeStarted';
    icon: 'building';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgLinks: Schema.Attribute.Component<'shared.image-link', true>;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface AboutSlicesLeaderCards extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_leader_cards';
  info: {
    displayName: 'leaderCards';
    icon: 'bug';
  };
  attributes: {
    designation: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    linkedClass: Schema.Attribute.String;
    name: Schema.Attribute.String;
    pic: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
  };
}

export interface AboutSlicesOurLeader extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_our_leaders';
  info: {
    displayName: 'ourLeader';
    icon: 'bed';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cards: Schema.Attribute.Component<'about-slices.leader-cards', true>;
    details: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface AboutSlicesPartnUs extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_partnuses';
  info: {
    displayName: 'partnUs';
    icon: 'calendar-alt';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface AboutSlicesWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_about_slices_what_we_dos';
  info: {
    displayName: 'whatWeDo';
    icon: 'clipboard-check';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.hero-title-img', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface ClientStoryClientStory extends Struct.ComponentSchema {
  collectionName: 'components_client_story_client_stories';
  info: {
    displayName: 'ClientStory';
  };
  attributes: {
    clientDesignation: Schema.Attribute.String;
    clientName: Schema.Attribute.String;
    clientPic: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    story: Schema.Attribute.RichText;
  };
}

export interface FooterAbout extends Struct.ComponentSchema {
  collectionName: 'components_footer_abouts';
  info: {
    displayName: 'about';
    icon: 'tablets';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    shortAbout: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'shared.icon-img-link', true>;
  };
}

export interface FooterCareerOp extends Struct.ComponentSchema {
  collectionName: 'components_footer_career_ops';
  info: {
    displayName: 'careerOp';
    icon: 'battery-empty';
  };
  attributes: {
    careerOp: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.icon-link', true>;
  };
}

export interface FooterCareerOpportunity extends Struct.ComponentSchema {
  collectionName: 'components_footer_career_opportunities';
  info: {
    displayName: 'careerOpportunity';
    icon: 'blind';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    contactUs: Schema.Attribute.JSON;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterCareers extends Struct.ComponentSchema {
  collectionName: 'components_footer_careers';
  info: {
    displayName: 'Careers';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterDiscover extends Struct.ComponentSchema {
  collectionName: 'components_footer_discovers';
  info: {
    displayName: 'Discover';
    icon: 'star';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterService extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_services';
  info: {
    displayName: 'footerService';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterLocation extends Struct.ComponentSchema {
  collectionName: 'components_footer_locations';
  info: {
    displayName: 'Location';
    icon: 'stack';
  };
  attributes: {
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locations: Schema.Attribute.Component<'shared.title-text-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'quickLinks';
    icon: 'external-link-alt';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterResources extends Struct.ComponentSchema {
  collectionName: 'components_footer_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterStartConvo extends Struct.ComponentSchema {
  collectionName: 'components_footer_start_convos';
  info: {
    displayName: 'startConvo';
    icon: 'glass-cheers';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.icon-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageSlicesWeSimplifySoftware
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_slices_we_simplify_softwares';
  info: {
    description: '';
    displayName: 'weSimplifySoftware';
    icon: 'balance-scale-left';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
    weSimplifySoftwareCards: Schema.Attribute.Component<
      'shared.img-title-desc',
      true
    >;
  };
}

export interface HomePageSlicesYourIdeasOurSolutions
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_slices_your_ideas_our_solutions';
  info: {
    description: '';
    displayName: 'ourSolutions';
    icon: 'solar-panel';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.two-title-cards', true>;
    heading: Schema.Attribute.Text;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesCompany extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_companies';
  info: {
    displayName: 'Company';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.img-detail-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesIndustries extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_industries';
  info: {
    displayName: 'Industries';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.img-detail-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesOfferings extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_offerings';
  info: {
    displayName: 'Offerings';
    icon: 'manyToMany';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.offering-links', true>;
    Title: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesProducts extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_products';
  info: {
    displayName: 'Products';
    icon: 'cart-plus';
  };
  attributes: {
    firstSection: Schema.Attribute.Component<'shared.title-detail-imgs', false>;
    secondSection: Schema.Attribute.Component<'shared.nav-links', true>;
    themeColor: Schema.Attribute.String;
    thirdSection: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface MegaMenuSlicesResources extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_resources';
  info: {
    displayName: 'Resources';
    icon: 'emotionHappy';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.img-detail-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesSection2WhoWe extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_section2_who_wes';
  info: {
    displayName: 'section2WhoWe';
    icon: 'fan';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    secondSectionLeft: Schema.Attribute.Component<
      'shared.head-img-link',
      false
    >;
    secondSectionRight: Schema.Attribute.Component<
      'shared.head-img-link',
      false
    >;
  };
}

export interface MegaMenuSlicesTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_technologies';
  info: {
    displayName: 'technologies';
    icon: 'code';
  };
  attributes: {
    firstSection: Schema.Attribute.Component<'shared.title-detail-imgs', false>;
    secondSection: Schema.Attribute.Component<'shared.head-img-link', true>;
    themeColor: Schema.Attribute.String;
  };
}

export interface MegaMenuSlicesWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
    icon: 'allergies';
  };
  attributes: {
    firstSection: Schema.Attribute.Component<'shared.title-detail-imgs', false>;
    secondSection: Schema.Attribute.Component<'shared.nav-links', true>;
    themeColor: Schema.Attribute.String;
    thirdSection: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface MegaMenuSlicesWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_who_we_ares';
  info: {
    displayName: 'WhoWeAre';
    icon: 'hand-scissors';
  };
  attributes: {
    firstSection: Schema.Attribute.Component<'shared.title-detail-img', false>;
    secondSection: Schema.Attribute.Component<
      'mega-menu-slices.section2-who-we',
      false
    >;
    themeColor: Schema.Attribute.String;
    thirdSection: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface MegaMenuSlicesWhoWeWork extends Struct.ComponentSchema {
  collectionName: 'components_mega_menu_slices_who_we_works';
  info: {
    displayName: 'whoWeWork';
    icon: 'pizza-slice';
  };
  attributes: {
    firstSection: Schema.Attribute.Component<'shared.title-detail-imgs', false>;
    secondSection: Schema.Attribute.Component<'shared.nav-links', true>;
    themeColor: Schema.Attribute.String;
    thirdSection: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface NewHomeIndustries extends Struct.ComponentSchema {
  collectionName: 'components_new_home_industries';
  info: {
    displayName: 'Industries';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.tabs-paras-imgs', true>;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeMainHero extends Struct.ComponentSchema {
  collectionName: 'components_new_home_main_heroes';
  info: {
    displayName: 'mainHero';
    icon: 'anchor';
  };
  attributes: {
    heroText: Schema.Attribute.Component<'shared.title-rich-button', true>;
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoTitle: Schema.Attribute.String;
  };
}

export interface NewHomeNewHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_new_home_new_home_heroes';
  info: {
    displayName: 'newHomeHero';
    icon: 'address-book';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    partners: Schema.Attribute.Component<'shared.img-title-link', true>;
    partnersTitle: Schema.Attribute.String;
    richText: Schema.Attribute.Text;
    Rightside: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    yearsField: Schema.Attribute.Component<'shared.years-in-the-field', false>;
  };
}

export interface NewHomeOfferings extends Struct.ComponentSchema {
  collectionName: 'components_new_home_offerings';
  info: {
    displayName: 'Offerings';
    icon: 'store';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.offering-links', true>;
    Title: Schema.Attribute.String;
  };
}

export interface NewHomeProjectinMind extends Struct.ComponentSchema {
  collectionName: 'components_new_home_projectin_minds';
  info: {
    description: '';
    displayName: 'projectinMind';
    icon: 'bowling-ball';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    links: Schema.Attribute.Component<'shared.link', true>;
    subTitleOne: Schema.Attribute.String;
    subTitleTwo: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
  };
}

export interface NewHomeReachOut extends Struct.ComponentSchema {
  collectionName: 'components_new_home_reach_outs';
  info: {
    description: '';
    displayName: 'reachOut';
    icon: 'calendar-day';
  };
  attributes: {
    bedgeImage: Schema.Attribute.Component<'shared.img-title-link', true>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconLink: Schema.Attribute.Component<'shared.icon-link', true>;
    numberValue: Schema.Attribute.Component<
      'shared.two-title-reapeatable',
      true
    >;
    title: Schema.Attribute.String;
    titleOne: Schema.Attribute.String;
    titleTwo: Schema.Attribute.String;
  };
}

export interface NewHomeResultsDriven extends Struct.ComponentSchema {
  collectionName: 'components_new_home_results_drivens';
  info: {
    displayName: 'resultsDriven';
    icon: 'newspaper';
  };
  attributes: {
    description: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.tabs-paras-imgs', true>;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_new_home_success_stories';
  info: {
    displayName: 'SuccessStories';
    icon: 'emotionUnhappy';
  };
  attributes: {
    description: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.tabs-paras-imgs', true>;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeTrustedByHundreds extends Struct.ComponentSchema {
  collectionName: 'components_new_home_trusted_by_hundreds';
  info: {
    displayName: 'trustedByHundreds';
    icon: 'border-all';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeWhatWeOffer extends Struct.ComponentSchema {
  collectionName: 'components_new_home_what_we_offers';
  info: {
    description: '';
    displayName: 'whatWeOffer';
    icon: 'book-reader';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headTitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.title-cards-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeWhoWeWork extends Struct.ComponentSchema {
  collectionName: 'components_new_home_who_we_works';
  info: {
    displayName: 'whoWeWork';
    icon: 'border-style';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headTitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'shared.tab-title', true>;
    title: Schema.Attribute.String;
  };
}

export interface NewHomeWhyChooseAspire extends Struct.ComponentSchema {
  collectionName: 'components_new_home_why_choose_aspires';
  info: {
    displayName: 'whyChooseAspire';
    icon: 'boxes';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.tab-title', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OfferingChildSliceAspireEdge extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_aspire_edges';
  info: {
    displayName: 'AspireEdge';
  };
  attributes: {
    AspireEdgeCards: Schema.Attribute.Component<
      'shared.aspire-edge-card',
      true
    >;
    description: Schema.Attribute.Text;
    Heading: Schema.Attribute.Text;
  };
}

export interface OfferingChildSliceClientTestimonial
  extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_client_testimonials';
  info: {
    description: '';
    displayName: 'ClientTestimonial';
  };
  attributes: {
    caseBtn: Schema.Attribute.String;
    caseDescription: Schema.Attribute.Text;
    clientProfile: Schema.Attribute.Component<
      'client-story.client-story',
      true
    >;
    Heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface OfferingChildSliceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    HeroSection: Schema.Attribute.Component<'new-home.new-home-hero', false>;
  };
}

export interface OfferingChildSliceKeyOfferning extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_key_offernings';
  info: {
    displayName: 'KeyOfferning';
  };
  attributes: {
    AspireEdgeCards: Schema.Attribute.Component<
      'shared.aspire-edge-card',
      true
    >;
    Heading: Schema.Attribute.String;
  };
}

export interface OfferingChildSliceOurProccess extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_our_proccesses';
  info: {
    description: '';
    displayName: 'OurProccess';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    ProcessDetails: Schema.Attribute.Component<'shared.img-title-desc', true>;
  };
}

export interface OfferingChildSliceOverview extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_overviews';
  info: {
    description: '';
    displayName: 'Overview';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
  };
}

export interface OfferingChildSliceTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_offering_child_slice_technologies';
  info: {
    displayName: 'Technologies';
  };
  attributes: {
    AspireEdgeCards: Schema.Attribute.Component<
      'shared.aspire-edge-card',
      true
    >;
    Heading: Schema.Attribute.String;
  };
}

export interface SharedAspireEdgeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_aspire_edge_cards';
  info: {
    displayName: 'AspireEdgeCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Heading: Schema.Attribute.Text;
    icons: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'align-center';
  };
  attributes: {
    buttonBg: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    textColor: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['blue', 'white', 'transparent']>;
  };
}

export interface SharedButtonCardsNum extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_cards_nums';
  info: {
    displayName: 'buttonCardsNum';
    icon: 'cart-arrow-down';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cards: Schema.Attribute.Component<'shared.cards-with-num', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardWithTitleAndPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_with_title_and_points';
  info: {
    displayName: 'CardWithTitleAndPoints';
    icon: 'gate';
  };
  attributes: {
    cardTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Component<'shared.title-and-text-details', true>;
  };
}

export interface SharedCardsWithBgImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards_with_bg_imgs';
  info: {
    description: '';
    displayName: 'cards-with-bg-img';
    icon: 'hat-cowboy-side';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'shared.button', false>;
    cardTag: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    coreTech: Schema.Attribute.String;
    coreTechHeading: Schema.Attribute.String;
    details: Schema.Attribute.Text;
  };
}

export interface SharedCardsWithNum extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards_with_nums';
  info: {
    displayName: 'cardsWithNum';
    icon: 'chevron-circle-down';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDetailLinkImgs extends Struct.ComponentSchema {
  collectionName: 'components_shared_detail_link_imgs';
  info: {
    displayName: 'detailLinkImgs';
    icon: 'broadcast-tower';
  };
  attributes: {
    detail: Schema.Attribute.Text;
    imagesWithTags: Schema.Attribute.Component<'shared.image-title', true>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedDetialsAndPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_detials_and_points';
  info: {
    displayName: 'detialsAndPoints';
    icon: 'calendar-week';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cardBg: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    details: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Component<'shared.icon-title', true>;
  };
}

export interface SharedDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'arrow-right';
  };
  attributes: {
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedEmails extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'Emails';
    icon: 'apps';
  };
  attributes: {
    Receiver: Schema.Attribute.String;
    Sender: Schema.Attribute.String;
  };
}

export interface SharedHeadImgLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_head_img_links';
  info: {
    displayName: 'headImgLink';
    icon: 'broom';
  };
  attributes: {
    imgIconLink: Schema.Attribute.Component<'shared.icon-img-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroTitleImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_title_imgs';
  info: {
    description: '';
    displayName: 'heroTitleImg';
    icon: 'camera';
  };
  attributes: {
    heroImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imgTitle: Schema.Attribute.String;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.String;
  };
}

export interface SharedIconCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_cards';
  info: {
    displayName: 'iconCards';
    icon: 'icons';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    hoverImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconClassOnly extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_class_onlies';
  info: {
    displayName: 'iconClassOnly';
    icon: 'book-medical';
  };
  attributes: {
    iconClassOnly: Schema.Attribute.String;
  };
}

export interface SharedIconImgLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_img_links';
  info: {
    displayName: 'iconImgLink';
    icon: 'arrows-alt-h';
  };
  attributes: {
    iconBgColor: Schema.Attribute.String;
    iconClass: Schema.Attribute.String;
    iconLabel: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    smallDesc: Schema.Attribute.Text;
  };
}

export interface SharedIconImgTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_img_titles';
  info: {
    displayName: 'iconImgTitle';
    icon: 'box';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', false>;
    tags: Schema.Attribute.Component<'shared.only-title', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_links';
  info: {
    displayName: 'iconLink';
    icon: 'external-link-square-alt';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    iconClass: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedIconTextNum extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text_nums';
  info: {
    displayName: 'iconTextNum';
    icon: 'chevron-circle-up';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    number: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedIconTextTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text_tabs';
  info: {
    description: '';
    displayName: 'iconTextTabs';
    icon: 'angle-double-left';
  };
  attributes: {
    listData: Schema.Attribute.Component<'shared.title-rich-reap', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_titles';
  info: {
    displayName: 'iconTitle';
    icon: 'deaf';
  };
  attributes: {
    href: Schema.Attribute.String;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_title_descs';
  info: {
    displayName: 'iconTitleDesc';
    icon: 'car';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconTitleLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_title_links';
  info: {
    displayName: 'iconTitleLink';
    icon: 'basketball-ball';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_imgs';
  info: {
    description: '';
    displayName: 'image';
    icon: 'image';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    buttonLink: Schema.Attribute.Component<'shared.link', false>;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedImageAndLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_and_links';
  info: {
    displayName: 'imageAndLinks';
    icon: 'balance-scale';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leaderDesignation: Schema.Attribute.String;
    leaderName: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedImageClassAndDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_class_and_details';
  info: {
    displayName: 'ImageClassAndDetails';
    icon: 'fileError';
  };
  attributes: {
    className: Schema.Attribute.String;
    details: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImageLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_links';
  info: {
    description: '';
    displayName: 'image-link';
    icon: 'share-alt';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedImageTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_titles';
  info: {
    description: '';
    displayName: 'titleImage';
    icon: 'heading';
  };
  attributes: {
    imgIconLink: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageTitleBothReap extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_title_both_reaps';
  info: {
    description: '';
    displayName: 'imageTitleBothReap';
    icon: 'apple-alt';
  };
  attributes: {
    hoverImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageWithTwoTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_two_titles';
  info: {
    displayName: 'ImageWithTwoTitle';
    icon: 'store';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'images';
    icon: 'truck-pickup';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedImgDetailButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_detail_buttons';
  info: {
    description: '';
    displayName: 'imgDetailButton';
    icon: 'car-side';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedImgIconClassDesc extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_icon_class_descs';
  info: {
    displayName: 'imgIconClassDesc';
    icon: 'bomb';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImgIconLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_icon_links';
  info: {
    displayName: 'imgIconLink';
    icon: 'biking';
  };
  attributes: {
    details: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImgIconName extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_icon_names';
  info: {
    displayName: 'imgIconName';
    icon: 'caret-down';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    name: Schema.Attribute.String;
  };
}

export interface SharedImgLinkDesc extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_link_descs';
  info: {
    description: '';
    displayName: 'imgLinkDesc';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImgTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_title_descs';
  info: {
    description: '';
    displayName: 'imgTitleDesc';
    icon: 'file-image';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.RichText;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', false>;
    secondImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImgTitleLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_img_title_links';
  info: {
    displayName: 'imgTitleLink';
    icon: 'clipboard-list';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedIndustryCardDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_industry_card_details';
  info: {
    description: '';
    displayName: 'industryCardDetails';
    icon: 'industry';
  };
  attributes: {
    dropDowns: Schema.Attribute.Component<'shared.dropdown', true>;
    hoverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
    slug: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedItld extends Struct.ComponentSchema {
  collectionName: 'components_shared_itlds';
  info: {
    displayName: 'itld';
    icon: 'calendar-check';
  };
  attributes: {
    detail: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedJobCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_job_cards';
  info: {
    displayName: 'jobCards';
    icon: 'sd-card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
    titleOne: Schema.Attribute.String;
    titleTwo: Schema.Attribute.String;
  };
}

export interface SharedLines extends Struct.ComponentSchema {
  collectionName: 'components_shared_lines';
  info: {
    description: '';
    displayName: 'lines';
    icon: 'ban';
  };
  attributes: {
    first: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    second: Schema.Attribute.String;
    third: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'ad';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'navLinks';
    icon: 'chevron-right';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listTitle: Schema.Attribute.String;
    megaListInner: Schema.Attribute.Component<'shared.detail-link-imgs', false>;
  };
}

export interface SharedNavbarCommon extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_commons';
  info: {
    displayName: 'navbarCommon';
    icon: 'align-right';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    contactUs: Schema.Attribute.Component<'shared.link', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    richText: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedNumEmailAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_num_email_addresses';
  info: {
    description: '';
    displayName: 'numEmailAddress';
    icon: 'chevron-circle-right';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOfferingLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_offering_links';
  info: {
    displayName: 'offering-links';
    icon: 'file';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    headingOne: Schema.Attribute.RichText;
    headingTwo: Schema.Attribute.RichText;
    mainTitle: Schema.Attribute.Component<'shared.link', false>;
    subTitle: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOnlyImageRepeatable extends Struct.ComponentSchema {
  collectionName: 'components_shared_only_image_repeatables';
  info: {
    displayName: 'onlyImageRepeatable';
    icon: 'images';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedOnlyRich extends Struct.ComponentSchema {
  collectionName: 'components_shared_only_riches';
  info: {
    displayName: 'onlyRich';
    icon: 'baby';
  };
  attributes: {
    richText: Schema.Attribute.RichText;
  };
}

export interface SharedOnlyTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_only_titles';
  info: {
    description: '';
    displayName: 'onlyTitle';
    icon: 'angle-double-right';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOnlyTitleImgRich extends Struct.ComponentSchema {
  collectionName: 'components_shared_only_title_img_riches';
  info: {
    displayName: 'onlyTitleImgRich';
    icon: 'arrow-left';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedOnlyTitleRepeatable extends Struct.ComponentSchema {
  collectionName: 'components_shared_only_title_repeatables';
  info: {
    description: '';
    displayName: 'onlyTitleRepeatable';
    icon: 'text-height';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedOurClients extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_clients';
  info: {
    displayName: 'ourClients';
    icon: 'eye';
  };
  attributes: {
    firstImageRow: Schema.Attribute.Component<'shared.image', true>;
    heading: Schema.Attribute.Text;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOurPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_partners';
  info: {
    description: '';
    displayName: 'ourPartners';
  };
  attributes: {
    imgLinkDesc: Schema.Attribute.Component<'shared.img-link-desc', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOurProdTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_prod_tabs';
  info: {
    displayName: 'ourProdTabs';
    icon: 'arrows-alt';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    headerTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    query: Schema.Attribute.String;
    richText: Schema.Attribute.RichText;
    tabs: Schema.Attribute.Component<'shared.icon-text-tabs', false>;
    tabTitle: Schema.Attribute.String;
  };
}

export interface SharedPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'points';
    icon: 'chart-pie';
  };
  attributes: {
    details: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'shared.icon-title', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProbsSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_probs_solutions';
  info: {
    description: '';
    displayName: 'probsSolution';
    icon: 'person-booth';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    cardsBgColor: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    list: Schema.Attribute.Component<'shared.icon-text-num', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProcessCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_cards';
  info: {
    displayName: 'process-cards';
    icon: 'brush';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    stepDetail: Schema.Attribute.RichText;
    stepIntro: Schema.Attribute.String;
    steplabel: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
  };
}

export interface SharedProopContentSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_proop_content_seos';
  info: {
    description: '';
    displayName: 'proopContentSeo';
    icon: 'carrot';
  };
  attributes: {
    content: Schema.Attribute.String;
    property: Schema.Attribute.Enumeration<
      ['title', 'description', 'type', 'url', 'sitename', 'image']
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_review_sections';
  info: {
    displayName: 'ReviewSection';
    icon: 'chartCircle';
  };
  attributes: {
    is_visible: Schema.Attribute.Boolean;
    reviewImages: Schema.Attribute.Component<'shared.tabs-image-desc', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'address-card';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    follow: Schema.Attribute.Boolean;
    index: Schema.Attribute.Boolean;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaOgProperty: Schema.Attribute.Component<
      'shared.proop-content-seo',
      true
    >;
    metaTitle: Schema.Attribute.Text;
    ratingCount: Schema.Attribute.Float;
    ratingValue: Schema.Attribute.Float;
    sharedImage: Schema.Attribute.Component<'shared.seo-image', false>;
    twitter: Schema.Attribute.Component<'shared.twitter-seo', false>;
  };
}

export interface SharedSeoImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_images';
  info: {
    displayName: 'seo-image';
    icon: 'laugh-wink';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTabTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_titles';
  info: {
    displayName: 'tabTitle';
    icon: 'braille';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.img-title-desc', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTabsImageDesc extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs_image_descs';
  info: {
    displayName: 'tabsImageDesc';
    icon: 'border-none';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTabsItld extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs_itlds';
  info: {
    displayName: 'tabs-itld';
    icon: 'caret-square-up';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.itld', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTabsParasImgs extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs_paras_imgs';
  info: {
    description: '';
    displayName: 'tabsParasImgs';
    icon: 'table';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    imgIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    insideImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.Component<'shared.link', true>;
    linkTag: Schema.Attribute.Component<'shared.link', false>;
    midDesc: Schema.Attribute.Text;
    shortDesc: Schema.Attribute.Text;
    tabTitle: Schema.Attribute.String;
  };
}

export interface SharedTechAndIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_and_icons';
  info: {
    displayName: 'techAndIcon';
    icon: 'battery-half';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    techName: Schema.Attribute.String;
    techs: Schema.Attribute.Component<'shared.img-icon-name', true>;
  };
}

export interface SharedTextLinkRepeatable extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_link_repeatables';
  info: {
    description: '';
    displayName: 'imageLinkRepeatable';
    icon: 'ankh';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedThankYouCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_thank_you_cards';
  info: {
    displayName: 'thankYouCard';
    icon: 'child';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.img-title-link', true>;
    colorTitle: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    shortText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleAndTextDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_and_text_details';
  info: {
    displayName: 'TitleAndTextDetails';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleCardsButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_cards_buttons';
  info: {
    displayName: 'titleCardsButton';
    icon: 'bezier-curve';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    cards: Schema.Attribute.Component<'shared.icon-img-title', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleDescDate extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_desc_dates';
  info: {
    description: '';
    displayName: 'titleDescDate';
    icon: 'id-card-alt';
  };
  attributes: {
    dateRange: Schema.Attribute.String;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleDescIconClass extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_desc_icon_classes';
  info: {
    displayName: 'titleDescIconClass';
    icon: 'arrows-alt-v';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleDescNum extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_desc_nums';
  info: {
    description: '';
    displayName: 'titleDescNum';
    icon: 'align-left';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleDetailImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_detail_img';
  info: {
    displayName: 'titleDetailImg';
    icon: 'digital-tachograph';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.image-link', true>;
    details: Schema.Attribute.Text;
    imageLink: Schema.Attribute.Component<'shared.image-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleDetailImgs extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_detail_imgs';
  info: {
    displayName: 'titleDetailImgs';
    icon: 'digital-tachograph';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    details: Schema.Attribute.Text;
    imageLink: Schema.Attribute.Component<'shared.image-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_images';
  info: {
    displayName: 'titleImage';
    icon: 'crosshairs';
  };
  attributes: {
    imageLink: Schema.Attribute.Component<'shared.image-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleRichButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_rich_buttons';
  info: {
    displayName: 'titleRichButton';
    icon: 'book-dead';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    richText: Schema.Attribute.Text;
    Rightside: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleRichNumImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_rich_num-imgs';
  info: {
    description: '';
    displayName: 'titleRichNumImg';
    icon: 'asterisk';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    hoverImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Schema.Attribute.String;
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleRichReap extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_rich_reaps';
  info: {
    displayName: 'titleRichReap';
    icon: 'angle-right';
  };
  attributes: {
    richText: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedTitleTextLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_text_links';
  info: {
    description: '';
    displayName: 'titleTextLink';
    icon: 'bolt';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.link', false>;
    sector: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTwitterSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_twitter_seos';
  info: {
    description: '';
    displayName: 'twitterSeo';
    icon: 'campground';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTwoColorCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_color_cards';
  info: {
    description: '';
    displayName: 'twoColorCard';
    icon: 'backward';
  };
  attributes: {
    details: Schema.Attribute.Text;
    richText: Schema.Attribute.RichText;
  };
}

export interface SharedTwoTitleCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_title_cards';
  info: {
    displayName: 'twoTitleCards';
    icon: 'credit-card';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTwoTitleImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_title_imgs';
  info: {
    displayName: 'twoTitleImg';
    icon: 'bicycle';
  };
  attributes: {
    bottomTitle: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    topTitle: Schema.Attribute.String;
  };
}

export interface SharedTwoTitleReapeatable extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_title_reapeatables';
  info: {
    displayName: 'twoTitleReapeatable';
    icon: 'text-width';
  };
  attributes: {
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedYearsInTheField extends Struct.ComponentSchema {
  collectionName: 'components_shared_years_in_the_fields';
  info: {
    displayName: 'yearsInTheField';
    icon: 'doctor';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.two-title-reapeatable', true>;
    is_visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-slices.about-rprocess': AboutSlicesAboutRprocess;
      'about-slices.about-second': AboutSlicesAboutSecond;
      'about-slices.aspire-core-values': AboutSlicesAspireCoreValues;
      'about-slices.aspire-vision-mission': AboutSlicesAspireVisionMission;
      'about-slices.awards': AboutSlicesAwards;
      'about-slices.ho-we-started': AboutSlicesHoWeStarted;
      'about-slices.leader-cards': AboutSlicesLeaderCards;
      'about-slices.our-leader': AboutSlicesOurLeader;
      'about-slices.partn-us': AboutSlicesPartnUs;
      'about-slices.what-we-do': AboutSlicesWhatWeDo;
      'client-story.client-story': ClientStoryClientStory;
      'footer.about': FooterAbout;
      'footer.career-op': FooterCareerOp;
      'footer.career-opportunity': FooterCareerOpportunity;
      'footer.careers': FooterCareers;
      'footer.discover': FooterDiscover;
      'footer.footer-service': FooterFooterService;
      'footer.location': FooterLocation;
      'footer.quick-links': FooterQuickLinks;
      'footer.resources': FooterResources;
      'footer.start-convo': FooterStartConvo;
      'home-page-slices.we-simplify-software': HomePageSlicesWeSimplifySoftware;
      'home-page-slices.your-ideas-our-solutions': HomePageSlicesYourIdeasOurSolutions;
      'mega-menu-slices.company': MegaMenuSlicesCompany;
      'mega-menu-slices.industries': MegaMenuSlicesIndustries;
      'mega-menu-slices.offerings': MegaMenuSlicesOfferings;
      'mega-menu-slices.products': MegaMenuSlicesProducts;
      'mega-menu-slices.resources': MegaMenuSlicesResources;
      'mega-menu-slices.section2-who-we': MegaMenuSlicesSection2WhoWe;
      'mega-menu-slices.technologies': MegaMenuSlicesTechnologies;
      'mega-menu-slices.what-we-do': MegaMenuSlicesWhatWeDo;
      'mega-menu-slices.who-we-are': MegaMenuSlicesWhoWeAre;
      'mega-menu-slices.who-we-work': MegaMenuSlicesWhoWeWork;
      'new-home.industries': NewHomeIndustries;
      'new-home.main-hero': NewHomeMainHero;
      'new-home.new-home-hero': NewHomeNewHomeHero;
      'new-home.offerings': NewHomeOfferings;
      'new-home.projectin-mind': NewHomeProjectinMind;
      'new-home.reach-out': NewHomeReachOut;
      'new-home.results-driven': NewHomeResultsDriven;
      'new-home.success-stories': NewHomeSuccessStories;
      'new-home.trusted-by-hundreds': NewHomeTrustedByHundreds;
      'new-home.what-we-offer': NewHomeWhatWeOffer;
      'new-home.who-we-work': NewHomeWhoWeWork;
      'new-home.why-choose-aspire': NewHomeWhyChooseAspire;
      'offering-child-slice.aspire-edge': OfferingChildSliceAspireEdge;
      'offering-child-slice.client-testimonial': OfferingChildSliceClientTestimonial;
      'offering-child-slice.hero-section': OfferingChildSliceHeroSection;
      'offering-child-slice.key-offerning': OfferingChildSliceKeyOfferning;
      'offering-child-slice.our-proccess': OfferingChildSliceOurProccess;
      'offering-child-slice.overview': OfferingChildSliceOverview;
      'offering-child-slice.technologies': OfferingChildSliceTechnologies;
      'shared.aspire-edge-card': SharedAspireEdgeCard;
      'shared.button': SharedButton;
      'shared.button-cards-num': SharedButtonCardsNum;
      'shared.card-with-title-and-points': SharedCardWithTitleAndPoints;
      'shared.cards-with-bg-img': SharedCardsWithBgImg;
      'shared.cards-with-num': SharedCardsWithNum;
      'shared.detail-link-imgs': SharedDetailLinkImgs;
      'shared.detials-and-points': SharedDetialsAndPoints;
      'shared.dropdown': SharedDropdown;
      'shared.emails': SharedEmails;
      'shared.head-img-link': SharedHeadImgLink;
      'shared.hero-title-img': SharedHeroTitleImg;
      'shared.icon-cards': SharedIconCards;
      'shared.icon-class-only': SharedIconClassOnly;
      'shared.icon-img-link': SharedIconImgLink;
      'shared.icon-img-title': SharedIconImgTitle;
      'shared.icon-link': SharedIconLink;
      'shared.icon-text-num': SharedIconTextNum;
      'shared.icon-text-tabs': SharedIconTextTabs;
      'shared.icon-title': SharedIconTitle;
      'shared.icon-title-desc': SharedIconTitleDesc;
      'shared.icon-title-link': SharedIconTitleLink;
      'shared.image': SharedImage;
      'shared.image-and-links': SharedImageAndLinks;
      'shared.image-class-and-details': SharedImageClassAndDetails;
      'shared.image-link': SharedImageLink;
      'shared.image-title': SharedImageTitle;
      'shared.image-title-both-reap': SharedImageTitleBothReap;
      'shared.image-with-two-title': SharedImageWithTwoTitle;
      'shared.images': SharedImages;
      'shared.img-detail-button': SharedImgDetailButton;
      'shared.img-icon-class-desc': SharedImgIconClassDesc;
      'shared.img-icon-link': SharedImgIconLink;
      'shared.img-icon-name': SharedImgIconName;
      'shared.img-link-desc': SharedImgLinkDesc;
      'shared.img-title-desc': SharedImgTitleDesc;
      'shared.img-title-link': SharedImgTitleLink;
      'shared.industry-card-details': SharedIndustryCardDetails;
      'shared.itld': SharedItld;
      'shared.job-cards': SharedJobCards;
      'shared.lines': SharedLines;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.nav-links': SharedNavLinks;
      'shared.navbar-common': SharedNavbarCommon;
      'shared.num-email-address': SharedNumEmailAddress;
      'shared.offering-links': SharedOfferingLinks;
      'shared.only-image-repeatable': SharedOnlyImageRepeatable;
      'shared.only-rich': SharedOnlyRich;
      'shared.only-title': SharedOnlyTitle;
      'shared.only-title-img-rich': SharedOnlyTitleImgRich;
      'shared.only-title-repeatable': SharedOnlyTitleRepeatable;
      'shared.our-clients': SharedOurClients;
      'shared.our-partners': SharedOurPartners;
      'shared.our-prod-tabs': SharedOurProdTabs;
      'shared.points': SharedPoints;
      'shared.probs-solution': SharedProbsSolution;
      'shared.process-cards': SharedProcessCards;
      'shared.proop-content-seo': SharedProopContentSeo;
      'shared.quote': SharedQuote;
      'shared.review-section': SharedReviewSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seo-image': SharedSeoImage;
      'shared.slider': SharedSlider;
      'shared.tab-title': SharedTabTitle;
      'shared.tabs-image-desc': SharedTabsImageDesc;
      'shared.tabs-itld': SharedTabsItld;
      'shared.tabs-paras-imgs': SharedTabsParasImgs;
      'shared.tech-and-icon': SharedTechAndIcon;
      'shared.text-link-repeatable': SharedTextLinkRepeatable;
      'shared.thank-you-card': SharedThankYouCard;
      'shared.title-and-text-details': SharedTitleAndTextDetails;
      'shared.title-cards-button': SharedTitleCardsButton;
      'shared.title-desc-date': SharedTitleDescDate;
      'shared.title-desc-icon-class': SharedTitleDescIconClass;
      'shared.title-desc-num': SharedTitleDescNum;
      'shared.title-detail-img': SharedTitleDetailImg;
      'shared.title-detail-imgs': SharedTitleDetailImgs;
      'shared.title-image': SharedTitleImage;
      'shared.title-rich-button': SharedTitleRichButton;
      'shared.title-rich-num-img': SharedTitleRichNumImg;
      'shared.title-rich-reap': SharedTitleRichReap;
      'shared.title-text-link': SharedTitleTextLink;
      'shared.twitter-seo': SharedTwitterSeo;
      'shared.two-color-card': SharedTwoColorCard;
      'shared.two-title-cards': SharedTwoTitleCards;
      'shared.two-title-img': SharedTwoTitleImg;
      'shared.two-title-reapeatable': SharedTwoTitleReapeatable;
      'shared.years-in-the-field': SharedYearsInTheField;
    }
  }
}
