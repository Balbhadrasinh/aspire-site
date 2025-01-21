import HeroSection from "./NewHomePageComponents/HeroSection";
import NewHomePageProjectInMind from "./NewHomePageComponents/NewHomePageProjectInMind";
import ResultDriven from "./NewHomePageComponents/ResultDriven";

const NewHomePageLayout = ({ homePageData }) => {
  const homePageSectionData = homePageData?.data?.homepage?.landingPage;

  const projectInMindData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeProjectinMind"
  );
  const HeroData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeNewHomeHero"
  );
  const ResultDrivenData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeResultsDriven"
  );

  return (
    <>
      <HeroSection HeroData={HeroData} />
      <ResultDriven resultDriven={ResultDrivenData} />
      <NewHomePageProjectInMind project={projectInMindData} />
      <h1>hii</h1>
    </>
  );
};

export default NewHomePageLayout;
