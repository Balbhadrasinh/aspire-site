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
        ... on ComponentNewHomeOfferings {
          __typename
          Title
          tab {
            title
            bgImage {
              url
              alternativeText
            }
            headingOne
            headingTwo
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
        ... on ComponentNewHomeSuccessStories {
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
        ... on ComponentNewHomeIndustries {
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
            imgIcon {
              url
              alternativeText
            }
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

        ... on ComponentSharedEverything {
          __typename
          tab {
            title
            date
            description
            image {
              url
              alternativeText
            }
          }
        }

         ... on ComponentSharedPodcasts {
          __typename
          tab {
            title
            date
            description
            image {
              url
              alternativeText
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
      }
    }
  }
`;

export { HOME_PAGE };
