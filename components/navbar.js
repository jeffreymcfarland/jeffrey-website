import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { VscClose, VscMenu } from "react-icons/vsc";
import { IconContext } from "react-icons";

import Styles from "../styles/components/Navbar.module.css";
import logo from "../images/logo.png";
import Image from "next/image";
import Icon from "./icon";

export default function Navbar() {
  const [navItems] = useState([
    { name: "about", path: "/about" },
    { name: "work", path: "/work" },
  ]);
  const [toggleShelf, setToggleShelf] = useState(false);
  const path = useRouter().asPath;

  const IconElement = toggleShelf ? VscClose : VscMenu;

  function toggleNav() {
    setToggleShelf(!toggleShelf);
  }

  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContents}>
        <Link href="/">
          <a className={Styles.logoContainer}>
            <Image src={logo} alt="jm logo" />
          </a>
        </Link>
        <button className={Styles.menuButton} onClick={toggleNav}>
          <Icon element={IconElement} color="--color-base-steelblue-5" />
        </button>
        <div className={Styles.menuContainer} data-show={toggleShelf}>
          <ul className={Styles.list}>
            {navItems.map((navItem, index) => (
              <li className={Styles.item} key={index}>
                <Link href={navItem.path}>
                  <a
                    className={`${Styles.link} ${
                      path === navItem.path ? Styles.selected : null
                    }`.trim()}
                  >
                    {navItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={Styles.connectIconsContainer}>
            <IconContext.Provider
              value={{
                className: Styles.connectIcon,
                color: "var(--color-base-gray-5)",
                size: 25,
              }}
            >
              <a
                href="https://github.com/jeffreymcfarland/"
                target="_blank"
                rel="noreferrer"
                className={Styles.connectLink}
              >
                <BsGithub />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: Styles.connectIcon,
                color: "var(--color-base-gray-5)",
                size: 25,
              }}
            >
              <a
                href="https://www.linkedin.com/in/jlmmcfarlandj/"
                target="_blank"
                rel="noreferrer"
                className={Styles.connectLink}
              >
                <BsLinkedin />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <hr className={Styles.hr} />
      </div>
    </nav>
  );
}
