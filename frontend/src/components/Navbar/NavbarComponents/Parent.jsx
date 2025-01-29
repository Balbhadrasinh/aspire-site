import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Links from "@/Shared/Links";
import React from "react";
import OfferingsMenu from "./OfferingsMenu";
import IndustriesMenu from "./IndustriesMenu";
import CompanyMenu from "./CompanyMenu";
import ResourcesMenu from "./ResourcesMenu";

const Parent = (props) => {
  const router = useRouter();
  const parentNavPathQuery = router.asPath;
  const [toggleMegaMenu, setToggleMegaMenu] = useState(false);
  const [toggleLink, setToggleLink] = useState("");
  const [menuName, setMenuName] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const element = document.querySelector(".swiper");
    if (element) {
      const handleClick = () => {
        setToggleMegaMenu(false);
        props.setHover(false);
      };
      element.addEventListener("click", handleClick);
      return () => {
        element.removeEventListener("click", handleClick);
      };
    }
  }, [router]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleMegaMenu(false);
        props.setHover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setToggleMegaMenu(false);

    setTimeout(() => {
      setToggleMegaMenu(true);
    }, 200);
  }, [toggleLink]);

  const megaMenuCloseOnClick = (onclick) => {
    setToggleMegaMenu(onclick);
    props.setHover(false);
  };
  const route = useRouter();
  const offeringData = props?.headers?.megaMenu?.menus.find(
    (section) => section.__typename === "ComponentMegaMenuSlicesOfferings"
  );
  const industriesData = props?.headers?.megaMenu?.menus.find(
    (section) => section.__typename === "ComponentMegaMenuSlicesIndustries"
  );
  const companyData = props?.headers?.megaMenu?.menus.find(
    (section) => section.__typename === "ComponentMegaMenuSlicesCompany"
  );
  const resourcesData = props?.headers?.megaMenu?.menus.find(
    (section) => section.__typename === "ComponentMegaMenuSlicesResources"
  );

  return (
    <div className="flex items-center gap-8 lg:gap-0 xl:gap-8" ref={ref}>
      <nav className="hidden lg:flex items-center justify-between text-base">
        {props.headers?.megaMenu?.ParentLinks.map((header) => {
          const currentHref = header.href;
          const mainMenu = parentNavPathQuery.slice(0, currentHref.length);
          return (
            <div
              key={header.id}
              onClick={() => {
                const isSameMenu = header?.label === toggleLink;

                if (isSameMenu) {
                  setToggleMegaMenu(!toggleMegaMenu);
                } else {
                  setToggleMegaMenu(true);
                  setToggleLink(header?.label);
                }

                props.setHover(
                  header?.label !== "offerings" &&
                    header?.label !== "industries" &&
                    header?.label !== "company" &&
                    header?.label !== "resources" &&
                    header?.label !== "Contact Us"
                    ? false
                    : true
                );
              }}
              onMouseLeave={() => {
                // props.setHover(false)
              }}
              className="relative px-2 4xl:px-4 w-fit"
            >
              <div>
                {header?.label === "offerings" ||
                header?.label === "industries" ||
                header?.label === "company" ||
                header?.label === "resources" ||
                header?.label === "Contact Us" ? (
                  <h2
                    className={`${
                      header?.href == route.pathname
                        ? ""
                        : props.isScrollNavbar ||
                          props.isHovered ||
                          props.shouldNavbarBlack
                        ? ""
                        : "text-[#0D1B2F]"
                    } ${
                      currentHref === mainMenu
                        ? "text-[#0D1B2F] text-[1.8rem] font-[400]"
                        : ""
                    } nav-item nav-link-ltr my-auto mx-4 text-[#0D1B2F] text-[1.8rem] font-semibold cursor-pointer transition-all navbar-parent`}
                  >
                    {header?.label}
                  </h2>
                ) : (
                  <h2>
                    <Links
                      className={`${
                        header?.href == route.pathname
                          ? "text-[#0D1B2F]"
                          : props.isScrollNavbar ||
                            props.isHovered ||
                            props.shouldNavbarBlack
                          ? ""
                          : "text-[#0D1B2F]"
                      } ${
                        currentHref === mainMenu
                          ? "text-[#0D1B2F]"
                          : "text-[#0D1B2F]"
                      } nav-item nav-link-ltr my-auto mx-4 text-[1.6rem] text-[#0D1B2F] font-semibold cursor-pointer transition-all navbar-parent`}
                      href={header?.href}
                      label={header?.label}
                      target={header?.target}
                    ></Links>
                  </h2>
                )}
              </div>
            </div>
          );
        })}
        <div
          className={`absolute max-w-fit transition-all duration-500 ${
            toggleMegaMenu
              ? "opacity-100 -translate-y-0"
              : "opacity-0 -translate-y-16"
          } left-0 right-0 mx-auto lg:top-[8rem] megamenu-top`}
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          {toggleMegaMenu && toggleLink === "offerings" ? (
            <OfferingsMenu
              offeringData={offeringData}
              //closeOnClick={megaMenuCloseOnClick}
            />
          ) : toggleMegaMenu && toggleLink === "industries" ? (
            <IndustriesMenu
              industriesData={industriesData}
              //closeOnClick={megaMenuCloseOnClick}
            />
          ) : toggleMegaMenu && toggleLink === "company" ? (
            <CompanyMenu
              companyData={companyData}
              //closeOnClick={megaMenuCloseOnClick}
            />
          ) : toggleMegaMenu && toggleLink === "resources" ? (
            <ResourcesMenu
              resourcesData={resourcesData}
              //closeOnClick={megaMenuCloseOnClick}
            />
          ) : (
            <></>
          )}
        </div>
      </nav>
      <div className="lg:flex items-center gap-6 hidden">
        <button className="btn-primary" onClick={props.megaMenuCloseOnClick}>
          <Links href="/contact-us" className="m-0" label="Schedule a call" />
        </button>
      </div>
    </div>
  );
};

export default Parent;
