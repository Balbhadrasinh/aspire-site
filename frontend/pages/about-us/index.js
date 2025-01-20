import React from 'react'
import { getData } from '../../src/services/FetchData';
import { ABOUT_PAGE } from '../../src/utils/graphQL/AboutPage';
import AboutLayout from '@/src/components/About/AboutLayout'

const About = (props) => {
  return (
    <div>
      <AboutLayout
        aboutSectionData={props.aboutSections}
      />
    </div>
  )
}

export async function getStaticProps({ req }) {
  const aboutSections = await getData(ABOUT_PAGE, true);
  return {
    props: {
      aboutSections: aboutSections?.data?.about,
    },
    revalidate: 60,
  };
}


export default About