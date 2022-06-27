import { useState } from "react";
import Image from "next/image";
import Styles from "../styles/components/Footer.module.css";
import Grid from "./grid";
import Text from "./text";

import footerLogo from "../images/footer-logo.png";

export default function Footer() {
  const [footerLinks] = useState([
    { name: "Github", href: "https://www.github.com/jeffreymcfarland/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jlmmcfarlandj/" },
    { name: "Email", href: "mailto:jlmcfarlandj@gmail.com" },
  ]);

  return (
    <footer className={Styles.footer}>
      <Grid className={Styles.grid}>
        <Grid.Item colSpan={{ base: 6 }}>
          <div className={Styles.leftContainer}>
            <div className={Styles.logoContainer}>
              <Image src={footerLogo} alt="subtle colored jm logo" />
            </div>
            <Text
              color="subtle"
              size="lg"
              weight="semibold"
              className={Styles.leftContainerItem}
            >
              Jeffrey McFarland
            </Text>
          </div>
        </Grid.Item>
        <Grid.Item colSpan={{ base: 6 }}>
          <div className={Styles.rightContainer}>
            <Text
              color="subtle"
              size="lg"
              className={Styles.rightContainerItem}
            >
              Get In Touch
            </Text>
            {footerLinks.map((link, index) => (
              <Text
                color="subtle"
                className={Styles.rightContainerItem}
                key={index}
              >
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Text>
            ))}
          </div>
        </Grid.Item>
      </Grid>
    </footer>
  );
}
