import ClientsSection from "./NewHomePageComponents/ClientsSection";
import HeroSection from "./NewHomePageComponents/HeroSection";
import NewHomePageProjectInMind from "./NewHomePageComponents/NewHomePageProjectInMind";
import Offerings from "./NewHomePageComponents/Offerings";
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
  const clientData = homePageSectionData.find(
    (section) => section.__typename === "ComponentSharedOurClients"
  );


  return (
    <>
      <HeroSection HeroData={HeroData} />
      <ResultDriven resultDriven={ResultDrivenData} />
      <NewHomePageProjectInMind project={projectInMindData} />
      <ClientsSection clientData={clientData}/>
      <Offerings ourClients={clientData} />
      <h1>hii</h1>
    </>
  );
};

export default NewHomePageLayout;
