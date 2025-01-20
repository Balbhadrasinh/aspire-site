import { gql } from "@apollo/client";
//import { COMMON_DATA_COMPONENT_QUERY } from "./Shared";

const HOME_PAGE_COMPONENT_TYPE_NAME = {
  hero: "HeroSectionComponent",
  resultDriven: "ResultDrivenSectionComponent",
  whatWeOffer: "WhatWeOfferSectionComponent",
  whoWeWorkWith: "WhoWeWorkWithSectionComponent",
  whyChooseAspire: "WhyChooseAspireSectionComponent",
  yearsInTheField: "YearsInTheFieldSectionComponent",
  trustedByHundreds: "trustedByHundredsSectionComponent",
  projectInMind: "projectInMindSectionComponent",
  reachOut: "ComponentNewHomeReachOut",
  mainHero: "MainHeroSectionComponent",
  ourPartners: "partnerSectionComponent",
  seo: "seoSectionComponent",
};


const HOME_PAGE = gql`
query{
  homepage{
        landingPage{
          ...on ComponentNewHomeNewHomeHero{
            __typename
            heroText{
              title
              richText
              button{
                link{
                  href
                  label
                }
              }
            }
            logoTitle
          }
        
          ...on ComponentNewHomeResultsDriven{
          __typename
            title
            description
            tabs{
              tabTitle
              id
              bgColor
              iconClass
            
              heading
              midDesc
              shortDesc
             
              linkTag{
                href
                label
              }
            }
          }
          ...on ComponentNewHomeProjectinMind{
        __typename
            title
            subTitleOne
            subTitleTwo 
            links{
              href
              label
            }
            button{
              link{
                href
                label
              }
            }
          }
          ...on ComponentNewHomeTrustedByHundreds{
          __typename
            title
            description
           
          }
          ...on ComponentNewHomeWhatWeOffer{
          __typename
            headTitle
            title
            description
            tabs{
              button{
                link{
                  href
                  label
                }
              }
              id
              title
              cards{
                id
                iconClass
              
                title
                tags{
                  id
                  title
                }
                links{
                  href
                  target
                }
              }
            }
          }
          ...on ComponentNewHomeWhoWeWork{
           __typename
            headTitle
            title
            description
            tabs{
              id
              title
              cards{
                id
                bgColor
                title
                description
                iconClass
                
                links{
                  href
                  target
                }
              }
            }
          }
          ...on ComponentNewHomeWhyChooseAspire{
          __typename
            title
            description
            cards{
              id
              title
              cards{
                id
             
                title
                description
                iconClass
              }
            }
          }
        
          ...on ComponentNewHomeReachOut{
         __typename
            title
            description
            titleOne
            numberValue{
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
            iconLink{
              bgColor
              iconClass
              link{
                href
                label
              }
            }
            
          }
       
         
     
    }
  }
}

`;

const COMMON_SECTIONS_COMPONENTS_FOR_HOME_PAGE = () => {
  return [
    COMMON_DATA_COMPONENT_QUERY.clientsBedgeQuery,
    COMMON_DATA_COMPONENT_QUERY.latestBlogQuery,
    COMMON_DATA_COMPONENT_QUERY.ourClientsQuery,
  ];
};

export {
  HOME_PAGE_COMPONENT_TYPE_NAME,
  HOME_PAGE,
  COMMON_SECTIONS_COMPONENTS_FOR_HOME_PAGE,
};
