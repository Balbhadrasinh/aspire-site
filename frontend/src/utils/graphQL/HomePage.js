import { gql } from "@apollo/client";
const HOME_PAGE = gql`
  query {
    homepage {
      landingPage {
        ... on ComponentNewHomeNewHomeHero {
          __typename
          title
          richText
          newHomeHeroButtons: button {
            textColor
            link {
              href
              label
              target
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
          partnersTitle
          partners {
            image {
              url
              alternativeText
            }
            title
            link {
              href
              label
              target
            }
          }
          yearsField {
            cards {
              number
              title
            }
            is_visible
          }
        }
        ... on ComponentNewHomeResultsDriven {
          __typename
          title
          description
          tabs {
            tabTitle
            id
            bgColor
            iconClass
            heading
            midDesc
            shortDesc
            insideImg {
              url
              alternativeText
            }
            keywords {
              href
              label
            }
            linkTag {
              href
              label
            }
          }
        }
        ... on ComponentNewHomeProjectinMind {
          __typename
          title
          subTitleOne
          subTitleTwo
          links {
            href
            label
          }
          button {
            link {
              href
              label
            }
          }
        }
        ... on ComponentSharedOurClients {
          __typename
          title
          heading
          firstImageRow {
            image {
              url
              alternativeText
            }
            link {
              href
              label
            }
          }
        }
        ... on ComponentNewHomeWhatWeOffer {
          __typename
          headTitle
          title
          description
          tabs {
            button {
              link {
                href
                label
              }
            }
            id
            title
            cards {
              id
              iconClass

              title
              tags {
                id
                title
              }
              links {
                href
                target
              }
            }
          }
        }
        ... on ComponentNewHomeWhoWeWork {
          __typename
          headTitle
          title
          description
          tabs {
            id
            title
            cards {
              id
              bgColor
              title
              description
              iconClass

              links {
                href
                target
              }
            }
          }
        }
        ... on ComponentNewHomeWhyChooseAspire {
          __typename
          title
          description
          cards {
            id
            title
            cards {
              id
              title
              description
              iconClass
            }
          }
        }
        ... on ComponentNewHomeReachOut {
          __typename
          title
          description
          titleOne
          numberValue {
            number
            title
          }
          titleTwo
          bedgeImage {
            title

            link {
              href
              label
              target
            }
          }
          iconLink {
            bgColor
            iconClass
            link {
              href
              label
            }
          }
        }
        ... on ComponentNewHomeMainHero {
          __typename
          heroText {
            title
            richText
            button {
              link {
                href
                label
              }
            }
            Rightside
          }
          logoTitle
        }
        ... on ComponentSharedOurPartners {
          __typename
          title
          imgLinkDesc {
            link {
              href
              label
            }
            description
          }
        }
      }
    }
  }
`;

export { HOME_PAGE };
