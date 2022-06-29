import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { VscClose, VscMenu } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { useInView } from "react-intersection-observer";

import Styles from "../styles/components/Navbar.module.css";
import logo from "../images/logo.png";
import Image from "next/image";
import Icon from "./icon";

export default function Navbar() {
  const [navItems] = useState([
    { name: "about", path: "/about" },
    { name: "work", path: "/work" },
  ]);
  const [connectItems] = useState([
    { icon: BsGithub, href: "https://github.com/jeffreymcfarland/" },
    { icon: BsLinkedin, href: "https://www.linkedin.com/in/jlmmcfarlandj/" },
    { icon: MdEmail, href: "mailto:jlmcfarlandj@gmail.com" },
  ]);
  const [toggleShelf, setToggleShelf] = useState(false);
  const path = useRouter().asPath;

  const IconElement = toggleShelf ? VscClose : VscMenu;

  function toggleNav() {
    setToggleShelf(!toggleShelf);
  }

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref} className={Styles.topBar}></div>
      <nav className={Styles.nav} top-bar-visible={inView.toString()}>
        <div className={Styles.navContents}>
          <Link href="/">
            <a className={Styles.logoContainer}>
              <Image src={logo} alt="jm logo" />
            </a>
          </Link>
          <button className={Styles.menuButton} onClick={toggleNav}>
            <Icon element={IconElement} color="--color-base-steelblue-5" />
          </button>
          <div
            className={Styles.menuContainer}
            show-menu={toggleShelf.toString()}
          >
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
              {connectItems.map((item, index) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.connectLink}
                  key={index}
                >
                  <Icon
                    element={item.icon}
                    color="--color-base-gray-5"
                    size={35}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
