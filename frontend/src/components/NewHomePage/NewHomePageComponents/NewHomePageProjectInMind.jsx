import Link from "next/link";
import React from "react";
// import Links from "../../Shared/Links";

const NewHomePageProjectInMind = ({ project }) => {

  return (
    <div className="bg-[#011D45] py-4 px-4 sm:px-12 md:px-0">
      <div className="container  mx-auto mb-4">
        <div className="rounded-xl py-12 flex justify-between items-center flex-wrap">
          <div>
            <h2 className="py-4 text-white project-in-mind">
              {project?.title}
            </h2>
            <span className="text-[white] text-[1.8rem]">
              {project?.subTitleOne}
            </span>
            <span>
              {project?.links != null && (
                <Link
                  className={
                    "text-[#ff980b] text-[1.8rem] ml-3 pim-links font-bold"
                  }
                  href={project?.links[0]?.href}
                  label={project?.links[0]?.label}
                />
              )}
            </span>
            <span className="text-[white] text-[1.8rem] ml-3">
              {project?.subTitleTwo}
            </span>
            <span>
              {project?.links[1] != undefined && (
                <Link
                  className={
                    "text-[#ff980b] text-[1.8rem] ml-3 pim-links font-bold"
                  }
                  href={project?.links[1]?.href}
                  label={project?.links[1]?.label}
                />
              )}
            </span>
          </div>
          <div>
            <div className="btn-primary bg-[#FF980B] text-white group mt-8 xl:mt-0 md:ml-auto">
              {/* <Link
                href={project?.button?.link?.href}
                label={project?.button?.link?.label}
              /> */}
               <label>{project?.button?.link?.label}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHomePageProjectInMind;
