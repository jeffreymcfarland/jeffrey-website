import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Section from "../components/section";
import Grid from "../components/grid";
import Heading from "../components/heading";
import Text from "../components/text";
import Styles from "../styles/Home.module.css";
import headshot from "../images/headshot.jpg";
import Icon from "../components/icon";
import Tooltip from "../components/tooltip";
import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiSass,
  DiRuby,
} from "react-icons/di";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiTypescript,
  SiNetlify,
  SiAwsamplify,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";

export default function Index() {
  const [skills] = useState([
    { name: "React", icon: FaReact },
    { name: "React Native", icon: TbBrandReactNative },
    { name: "JavaScript", icon: DiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "CSS", icon: DiCss3 },
    { name: "HTML", icon: DiHtml5 },
    { name: "NodeJs", icon: DiNodejsSmall },
    { name: "Sass", icon: DiSass },
    { name: "Ruby", icon: DiRuby },
    { name: "Docker", icon: FaDocker },
    { name: "Firebase", icon: SiFirebase },
    { name: "Netlify", icon: SiNetlify },
    { name: "AWS Amplify", icon: SiAwsamplify },
    { name: "Figma", icon: IoLogoFigma },
  ]);

  return (
    <Section>
      <Head>
        <title>Jeffrey McFarland</title>
      </Head>
      <Grid>
        <Grid.Item colSpan={{ sm: 6, lg: 6 }} colStart={{ lg: 7 }}>
          <div className={Styles.profileInfoContainer}>
            <Heading
              weight="bold"
              color="alternate"
              className={Styles.profileInfoHeading}
            >
              Jeffrey McFarland
            </Heading>
            <Text
              weight="semibold"
              size="xl"
              className={Styles.profileInfoText}
            >
              Front End Developer
            </Text>
            <Text
              weight="semibold"
              size="xl"
              className={Styles.profileInfoText}
            >
              Based in Nashville, TN
            </Text>
          </div>
        </Grid.Item>
        <Grid.Item
          colSpan={{ sm: 6, lg: 4 }}
          colStart={{ lg: 3 }}
          order={{ sm: "start" }}
        >
          <div className={Styles.profileContainer}>
            <div className={Styles.headshotContainer}>
              <Image
                src={headshot}
                alt="Headshot of Jeffrey McFarland"
                className={Styles.headshotImage}
              />
            </div>
          </div>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item colSpan={{ sm: 8, md: 6 }} colStart={{ sm: 3, md: 4 }}>
          <div className={Styles.passionSection}>
            <Text size="lg" align="center">
              User experiences, clean code and thoughtful documentation are a
              few of my passions
            </Text>
            <Text size="lg" align="center">
              Currently working on a{" "}
              <Text
                element="span"
                size="xl"
                color="alternate"
                weight="semibold"
              >
                Design System
              </Text>{" "}
              built in three different languages
            </Text>
          </div>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item>
          <Heading weight="semibold" level={2} align="center">
            Current Skills
          </Heading>
          <div className={Styles.skillsContainer}>
            {skills.map((skill, index) => (
              <Tooltip title={skill.name} key={index}>
                <Icon color="--color-base-blue-4" element={skill.icon} />
              </Tooltip>
            ))}
          </div>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
