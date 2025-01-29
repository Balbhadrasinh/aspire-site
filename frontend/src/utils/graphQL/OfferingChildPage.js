import { gql } from '@apollo/client';

 const OFFERING_QUERY = gql`
 query {
    offerningChildPages {
      offeringChild {
        ... on ComponentOfferingChildSliceHeroSection {
                __typename
          HeroSection {
            title
            richText
            button {
              textColor
              link {
                href
              }
            }
            heroImage {
              url
              alternativeText
            }
            mobileImage {
              url
              alternativeText
            }
          }
        }
        ... on ComponentOfferingChildSliceOverview {
                __typename

          Heading
          Description
        }
        ... on ComponentOfferingChildSliceAspireEdge {
                __typename

          Heading
          description
          AspireEdgeCards {
            Heading
            description
            icons {
              url
            }
            link {
              href
              label
            }
          }
        }
        ... on ComponentOfferingChildSliceKeyOfferning {
                __typename

          Heading
          AspireEdgeCards {
            Heading
            description
            icons {
              url
            }
            link {
              href
              label
            }
          }
        }
        ... on ComponentOfferingChildSliceTechnologies {
                __typename

          Heading
          AspireEdgeCards {
            Heading
            description
            icons {
              url
            }
            link {
              href
              label
            }
          }
        }
        ... on ComponentOfferingChildSliceClientTestimonial {
                __typename

          Heading
          caseBtn
          caseDescription
          link {
            href
            label
          }
          image {
                url
          }
          clientProfile {
            story
            clientPic {
              url
            }
            clientName
            clientDesignation
          }
        }
        ... on ComponentOfferingChildSliceOurProccess {
                __typename

          Heading
          ProcessDetails {
            image {
              url
            }
            iconClass
            title
            description
          }
        }
      }
    }
  }
`;
export { OFFERING_QUERY };

