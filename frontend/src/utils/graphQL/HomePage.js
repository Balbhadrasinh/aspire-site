import { gql } from "@apollo/client";

const HOME_PAGE = gql`
  query {
    homepage {
      landingPage {
        ... on ComponentNewHomeNewHomeHero {
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
          }
          logoTitle
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
        ... on ComponentNewHomeTrustedByHundreds {
          __typename
          title
          description
        
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