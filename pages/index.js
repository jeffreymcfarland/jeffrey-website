import Image from "next/image";
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
  return (
    <Section>
      <Grid>
        <Grid.Item colSpan={{ sm: 6, lg: 6 }} colStart={{ lg: 7 }}>
          <div className={Styles.profileInfoContainer}>
            <Heading weight="bold" color="alternate">
              Jeffrey McFarland
            </Heading>
            <Text weight="semibold" size="xl">
              Front End Developer
            </Text>
            <Text weight="semibold" size="xl">
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
            <Text size="lg">
              User experiences, clean code and thoughtful documentation are a
              few of my passions
            </Text>
            <Text size="lg">
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
            Currently Used Skills
          </Heading>
          <div className={Styles.skillsContainer}>
            <Tooltip title="React">
              <Icon color="--color-base-blue-4" element={FaReact} />
            </Tooltip>
            <Tooltip title="React Native">
              <Icon color="--color-base-blue-4" element={TbBrandReactNative} />
            </Tooltip>
            <Tooltip title="JavaScript">
              <Icon color="--color-base-blue-4" element={DiJavascript} />
            </Tooltip>
            <Tooltip title="TypeScript">
              <Icon color="--color-base-blue-4" element={SiTypescript} />
            </Tooltip>
            <Tooltip title="CSS">
              <Icon color="--color-base-blue-4" element={DiCss3} />
            </Tooltip>
            <Tooltip title="HTML">
              <Icon color="--color-base-blue-4" element={DiHtml5} />
            </Tooltip>
            <Tooltip title="NodeJs">
              <Icon color="--color-base-blue-4" element={DiNodejsSmall} />
            </Tooltip>
            <Tooltip title="Sass">
              <Icon color="--color-base-blue-4" element={DiSass} />
            </Tooltip>
            <Tooltip title="Ruby">
              <Icon color="--color-base-blue-4" element={DiRuby} />
            </Tooltip>
            <Tooltip title="Docker">
              <Icon color="--color-base-blue-4" element={FaDocker} />
            </Tooltip>
            <Tooltip title="Firebase">
              <Icon color="--color-base-blue-4" element={SiFirebase} />
            </Tooltip>
            <Tooltip title="Netlify">
              <Icon color="--color-base-blue-4" element={SiNetlify} />
            </Tooltip>
            <Tooltip title="AWS Amplify">
              <Icon color="--color-base-blue-4" element={SiAwsamplify} />
            </Tooltip>
            <Tooltip title="Figma">
              <Icon color="--color-base-blue-4" element={IoLogoFigma} />
            </Tooltip>
          </div>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
