import Link from "next/link";
import logo from "../../../public/images/aspire-logo-color.svg";
import { useState, useEffect, useContext } from "react";
import Parent from "./NavbarComponents/Parent";
//import Hamburger from "./NavbarComponents/Hamburger";
import { NAVBAR_PARENT_HEADERS } from "../../utils/graphQL/Navigation";
import { useLazyQuery } from "@apollo/client";
import Image from "next/legacy/image";
import aspire from "public/images/aspire-logo-color.svg";
import { useRef } from "react";
import { useRouter } from "next/router";

function Navigation({ isThankyou }) {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const [isScrollNavbar, setIsScrollNavbar] = useState(false);
  const [navBarQuery, { data }] = useLazyQuery(NAVBAR_PARENT_HEADERS);
  const [isHovered, setIsHovered] = useState(false);
  const width = useRef(0);

  const changeToStickey = () => {
    if (window.scrollY >= 80) {
      setIsScrollNavbar(true);
    } else {
      setIsScrollNavbar(false);
    }
  };

  //const { isBlack } = useContext(NavbarContext);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    width.current = screenWidth;
  }, []);

  useEffect(() => {
    (async () => {
      window.addEventListener("scroll", changeToStickey);
      navBarQuery();
    })();
  }, [navBarQuery]);

  const closeHamburger = () => {
    setIsHamburgerOpened((prev) => !prev);
    document.body.classList.remove("overflow-hidden");
  };

  const router = useRouter();
  const routerPath = router.asPath;
  const routerPathArray = routerPath.split("/");
  const shouldNavbarBlack =
    (routerPathArray.length >= 3 &&
      (routerPathArray.includes("blog") ||
        routerPathArray.includes("portfolio"))) ||
    routerPathArray.includes("thank-you") ||
    routerPathArray.includes("404") ||
    isThankyou;

  return (
    <>
      <header
        className={`text-gray-600 body-font top-0 z-[100] transition-all duration-300 w-full ${
          isScrollNavbar || isHovered
            ? "bg-[#ffffff] shadow-lg fixed min-h-[8rem] z-[100] text-para navbar-header"
            : "absolute"
        }`}
        id="navbar"
      >
        <div
          className={`mx-auto flex justify-between px-2 items-center xl:pl-[4rem] xl:pr-[4rem] ${
            isThankyou ? "pb-[1.5rem] border-b-[0.5px] border-gray-200" : ""
          } ${
            isScrollNavbar || isHovered
              ? "sm:pt-[1.2rem] pt-[1.8rem] pb-[1.5rem]"
              : "sm:pt-[1.5rem] pt-[2rem]"
          } gap-14 relative navbar-onscroll`}
        >
          <div className="lg:col-span-2 col-span-4">
            <Link href="/" className="relative lg:top-2 top-1">
              {logo != undefined && (
                <Image
                  src={
                    isScrollNavbar || isHovered || shouldNavbarBlack
                      ? aspire
                      : logo
                  }
                  alt="aspire-logo"
                  width={width.current <= 1700 ? 165 : 220}
                  height={width.current <= 1700 ? 40 : 50}
                  quality={75}
                />
              )}
            </Link>
          </div>
          <div>
            <Parent
              headers={data}
              isScrollNavbar={isScrollNavbar}
              shouldNavbarBlack={shouldNavbarBlack}
              isHovered={isHovered}
              setHover={setIsHovered}
            />
          </div>
          <div
            className={`cursor-pointer lg:hidden absolute right-12 ${
              isHamburgerOpened ? "pointer-events-none" : ""
            }`}
            onClick={() => {
              setIsHamburgerOpened((prev) => !prev);
            }}
          >
            <div
              className={
                isScrollNavbar
                  ? "text-gray-600 h-fit"
                  : shouldNavbarBlack
                  ? "text-gray-600 opacity-[0.95] h-fit"
                  : "text-white h-fit"
              }
            >
              {/* <Icon name="bars" size={32} /> */}
            </div>
          </div>
        </div>
        <div
          className={
            isHamburgerOpened
              ? "w-full text-[#003f63] max-h-screen overflow-y-auto lg:hidden bg-white transition-all duration-500 absolute top-0"
              : "w-full bg-white max-h-screen overflow-y-auto lg:hidden top-0 -translate-x-full translate-all absolute duration-500"
          }
        >
          <div
            className="cursor-pointer p-0 transition-all duration-500 flex items-center sm:pt-12 pt-[2.8rem] px-6"
            onClick={() => {
              setIsHamburgerOpened((prev) => !prev);
              document.body.classList.remove("overflow-hidden");
            }}
          >
            <Link
              href="/"
              className="title-font font-medium items-start text-gray-900 sm:mb-4 mb-0 md:mb-0"
            >
              {logo != undefined && (
                <Image
                  src={aspire}
                  alt="aspire-logo"
                  width={width.current <= 1700 ? 165 : 220}
                  height={width.current <= 1700 ? 40 : 50}
                  quality={75}
                />
              )}
            </Link>

            <div className="ml-auto h-fit -mt-2 mr-8 flex justify-center items-center">
              <strong className="text-white font-light cursor-pointer alert-del">
                <button type="button" aria-label="fa-bars">
                  {/* <Icon name="bars" size={32} color="#5f5f5f" /> */}
                </button>
              </strong>
            </div>
          </div>
          {isHamburgerOpened ? (
            <Hamburger
              headers={data}
              bottomNavBarData={
                data?.commonData?.data?.attributes?.commonCollection[9]
                  ?.lowerNavStrip
              }
              closeHamburger={closeHamburger}
              isHamburgerOpened
            />
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}

export default Navigation;
