import NewHomePageProjectInMind from "./NewHomePageComponents/NewHomePageProjectInMind";

const NewHomePageLayout = ({ homePageData }) => {
  const homePageSectionData = homePageData?.data?.homepage?.landingPage;

  const projectInMindData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeProjectinMind"
  );

  return (
    <>
      <NewHomePageProjectInMind project={projectInMindData} />
      <h1>hii</h1>
    </>
  );
};

export default NewHomePageLayout;
