import { gql } from "@apollo/client";
//import { COMMON_DATA_COMPONENT_QUERY } from "./Shared";

const NAVIGATION_COMPONENT_TYPE_NAME = {
  whatWeDoMenuSection: "WhatWeDo",
  whoWeWorkWithMenuSection: "WhoWeWorkWith",
  whoWeAreMenuSection: "WhoWeAre",
  productsMenuSection: "OurSolutions",
  technologiesMenuSection: "Technologies",
  portfolioMenuSection: "Portfolio",
};

const COMMON_SECTION_QUERY = {
  firstSection: `firstSection {
    title
    details
    button {
      theme
      link {
        href
        label
        slug
      }
    }
    imageLink{
      image{
        data{
          attributes{
            width
            height
            url
          }
        }
      }
      link{
        href
      }
    }
  }`,
  thirdSection: `thirdSection{
    iconClass
    image{
      data{
        attributes{
          alternativeText
          url
        }
      }
    }
    buttonLink{
      href
      label
      target
      slug
    }
    bgColor
  }`,
};

const NAVBAR_PARENT_HEADERS = gql`
  query {
    megaMenu {
      ParentLinks(sort: "id:asc") {
        id
        href
        label
        target
      }
      menus {
        ... on ComponentMegaMenuSlicesOfferings {
          __typename
          Title
          tab {
            title
            mainTitle {
              href
              label
              target
            }
            subTitle {
              href
              label
              target
            }
          }
        }
        ... on ComponentMegaMenuSlicesIndustries {
          __typename
          title
          tab {
            title
            images {
              alternativeText
              url
            }
            richText
          }
        }
        ... on ComponentMegaMenuSlicesCompany {
          __typename
          title
          tab {
            title
            images {
              alternativeText
              url
            }
            richText
          }
        }
        ... on ComponentMegaMenuSlicesResources {
          __typename
          title
          tab {
            title
            images {
              alternativeText
              url
            }
            richText
          }
        }
      }
    }
  }
`;

export { NAVBAR_PARENT_HEADERS, NAVIGATION_COMPONENT_TYPE_NAME };
