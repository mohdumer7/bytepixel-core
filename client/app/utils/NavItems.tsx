import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
      <>
        <div className="hidden 800px:flex relative">
          {navItemsData &&
              navItemsData.map((i, index) => (
                  <Link href={i.url} key={index} passHref>
              <span
                  className={`relative z-10 ${
                      activeItem === index
                          ? "dark:text-[#49018A] text-[crimson]"
                          : "dark:text-white text-black"
                  } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {i.name}
              </span>
                  </Link>
              ))}
          <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-0.5 bg-[crimson] dark:bg-[#49018A]"
              style={{
                width: `${navItemsData[activeItem].name.length * 1.5}rem`,
                left: `${activeItem * 6}rem`,
              }}
          />
        </div>
        {isMobile && (
            <div className="800px:hidden mt-5">
              <div className="w-full text-center py-6">
                <Link href={"/"} passHref>
              <span className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                BytePixel
              </span>
                </Link>
              </div>
              {navItemsData &&
                  navItemsData.map((i, index) => (
                      <Link href={i.url} passHref key={index}>
                <span
                    className={`${
                        activeItem === index
                            ? "dark:text-[#37a39a] text-[crimson]"
                            : "dark:text-white text-black"
                    } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {i.name}
                </span>
                      </Link>
                  ))}
            </div>
        )}
      </>
  );
};

export default NavItems;
