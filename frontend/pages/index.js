import {
  HOME_PAGE
} from "@/src/utils/graphQL/HomePage";
import { getData } from "@/src/services/FetchData";
import NewHomePageLayout from "@/src/components/NewHomePage/NewHomePageLayout";

const LandingPage = (props) => {
  return (
    <>
      <NewHomePageLayout
        homePageData={props.homePage}
      />
    </>
  );
};
export async function getStaticProps({ req }) {
  const homePage = await getData(HOME_PAGE, true);
  console.log(homePage,"homepage")
  return {
    props: {
      homePage: homePage,
    },
    revalidate: 60,
  };
}
export default LandingPage;
