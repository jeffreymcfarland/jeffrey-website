import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
  const [navItems] = useState([
    { name: "about", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "connect", path: "/connect" },
  ]);
  const path = useRouter().asPath;

  return (
    <nav className={Styles.nav}>
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
    </nav>
  );
}
