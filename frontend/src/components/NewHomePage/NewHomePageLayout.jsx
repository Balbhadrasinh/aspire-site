import { HOME_PAGE_COMPONENT_TYPE_NAME } from "../../utils/graphQL/HomePage";
import { useEffect } from "react";
import NewHomePageProjectInMind from "./NewHomePageComponents/NewHomePageProjectInMind";
import { getSectionDataBasedOnComponentTypeName } from "@/src/utils/Commons";

const NewHomePageLayout = ({
  homePageData,
}) => {
  const homePageSectionData = homePageData?.data?.homepage?.landingPage;
  console.log(homePageSectionData, "dataaa")


  const projectInMindData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeProjectinMind"
  );

 // console.log(projectInMindData, "projet")

  // const projectInMindSectionData = getSectionDataBasedOnComponentTypeName(
  //   homePageSectionData,
  //   HOME_PAGE_COMPONENT_TYPE_NAME.projectInMind
  // );

 // console.log(projectInMindSectionData, "projectInMindSectionData")

  return (
    <>
      <NewHomePageProjectInMind project={projectInMindData} />
    <h1>hii</h1>
    </>
  );
};

export default NewHomePageLayout;
