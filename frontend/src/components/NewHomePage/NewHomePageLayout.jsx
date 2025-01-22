import ClientsSection from "./NewHomePageComponents/ClientsSection";
import HeroSection from "./NewHomePageComponents/HeroSection";
import Industries from "./NewHomePageComponents/Industries";
import NewHomePageProjectInMind from "./NewHomePageComponents/NewHomePageProjectInMind";
import Offerings from "./NewHomePageComponents/Offerings";
import ResultDriven from "./NewHomePageComponents/ResultDriven";
import SuccessStories from "./NewHomePageComponents/SuccessStories";

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
  const offeringsData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeOfferings"
  );
  const successData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeSuccessStories"
  );
  const industriesData = homePageSectionData.find(
    (section) => section.__typename === "ComponentNewHomeIndustries"
  );


  return (
    <>
      <HeroSection HeroData={HeroData} />
      <ResultDriven resultDriven={ResultDrivenData} />
      <NewHomePageProjectInMind project={projectInMindData} />
      <ClientsSection clientData={clientData}/>
      <Offerings offeringsData={offeringsData} />
      <SuccessStories successData={successData} />
      <Industries industriesData={industriesData}/>
      <h1>hii</h1>
    </>
  );
};

export default NewHomePageLayout;
