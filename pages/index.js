import Image from "next/image";
import Section from "../components/section";
import Grid from "../components/grid";
import Heading from "../components/heading";
import Text from "../components/text";
import Styles from "../styles/Home.module.css";
import headshot from "../images/headshot.jpg";

export default function Index() {
  return (
    <Section>
      <Grid>
        <Grid.Item colSpan={{ sm: 6, lg: 6 }} colStart={{ lg: 7 }}>
          <div className={Styles.profileInfoContainer}>
            <Heading weight="bold">Jeffrey McFarland</Heading>
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
        <Grid.Item colSpan={{ sm: 6 }} colStart={{ sm: 4 }}>
          <div className={Styles.passionSection}>
            <Text size="lg">
              User experiences, clean code and thoughtful documentation are just
              a few of my passions
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
    </Section>
  );
}
