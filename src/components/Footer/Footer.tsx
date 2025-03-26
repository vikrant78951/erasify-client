import React from "react";
import { SectionWrapper } from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";

import { NavLink } from "react-router-dom";
import { FOOTER_LINKS } from "../../constants/Constants";

const Footer = () => {
  return (
    <footer className="">
      <SectionWrapper className="flex items-start justify-between gap-3 md:items-center">
        <>
          <Logo />

          <nav className="">
            <ul className="flex flex-col gap-3 md:flex-row md:gap-4">
              {FOOTER_LINKS.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={nav.link}
                      className="text-md md:text-lg text-text-primary hover:underline"
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
