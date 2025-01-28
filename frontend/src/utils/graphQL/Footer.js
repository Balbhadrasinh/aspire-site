import { gql } from "@apollo/client";
const FOOTER_COMPONENT_TYPE_NAME = {
  footerAbout: "footerAboutSectionComponent",
  areasWeServe: "areasWeServeSectionComponent",
  careerOp: "careerOpSectionComponent",
  startConvo: "startConvoSectionComponent",
  sharedOnlyTitle: "sharedOnlyTitleSectionComponent",
  quickLinks: "quickLinksSectionComponent",
  footerService: "footerServiceSectionComponent",
};

const FOOTER = gql`
  query {
    footer {
      footer {
        ... on ComponentFooterDiscover {
          __typename
          title
          links {
            href
            label
            target
          }
        }
        ... on ComponentFooterResources {
          __typename
          title
          links {
            href
            label
            target
          }
        }
        ... on ComponentFooterCareers {
          __typename
          title
          links {
            href
            label
            target
          }
        }

        ... on ComponentFooterReviewSection {
          __typename
          tab {
            title
            rank
            platformImage {
              url
              alternativeText
              width
              height
            }
            starImage {
              url
              alternativeText
              width
              height
            }
            link {
              href
              label
              target
            }
          }
        }

        ... on ComponentFooterAreasWeServe {
          __typename
          is_visible
          title
          locations {
            id
            sector
            title
            description
            iconClass
            contact {
              href
              label
            }
            image {
              url
              alternativeText
              width
              height
            }
            links {
              href
              label
            }
          }
        }

        ... on ComponentFooterAbout {
          __typename
          image {
            url
            width
            alternativeText
            height
          }
          shortAbout
          socialLinks {
            image {
              url
              width
              alternativeText
              height
            }
            link {
              href
              label
            }
            iconClass
            id
          }
        }
      }
    }
  }
`;

export { FOOTER };
