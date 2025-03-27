import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Logo from "@components/Logo/Logo";
import { Menu, CircleX } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NAVBAR } from "@constants/Constants";
import { useState } from "react";
import ManageUser from "../Manageuser/ManageUser";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav((prev) => !prev);
  };

  return (
    <header className=" bg-surface z-100">
      <SectionWrapper>
        <div className="flex justify-between">
          <div className="flex w-full justify-between md:w-fit">
            <Logo />

            <Menu
              onClick={toggleNav}
              className="cursor-pointer select-none md:hidden"
            />
          </div>
          <nav
            className={`absolute left-0 top-0 z-10 h-screen w-full bg-surface p-4 md:w-fit ${activeNav ? "block" : "hidden"} md:relative md:flex md:h-auto`}
          >
            <div className="flex w-full justify-between md:hidden">
              <Logo />

              <CircleX
                onClick={toggleNav}
                className="cursor-pointer select-none"
              />
            </div>

            <ul className="mt-6 flex flex-col gap-6 md:mt-0 md:flex-row md:items-center">
              {NAVBAR.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={nav.link}
                      className="text-lg text-text-primary hover:underline"
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                );
              })}

              <ManageUser />
            </ul>
          </nav>
        </div>
      </SectionWrapper>
    </header>
  );
};

export default Header;
