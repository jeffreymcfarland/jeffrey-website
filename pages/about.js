import Section from "../components/section";
import Heading from "../components/heading";
import Grid from "../components/grid";
import Text from "../components/text";
import List from "../components/list";

export default function About() {
  return (
    <Section>
      <Grid>
        <Grid.Item colSpan={{ sm: 10 }} colStart={{ sm: 2 }}>
          <Heading size="xl" weight="bold">
            About Me
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan={{ sm: 8 }} colStart={{ sm: 3 }}>
          <Text>
            Hi! I&apos;m{" "}
            <Text element="span" color="alternate" weight="semibold">
              Jeffrey McFarland
            </Text>{" "}
            and I&apos;m a Software Engineer at Ramsey Solutions in Nashville,
            TN.
          </Text>
          <Text>
            Currently, I&apos;m working on a team building out a{" "}
            <Text element="span" color="alternate" weight="semibold">
              Design System
            </Text>{" "}
            for the entire company and have a passion for front end development.
          </Text>
          <Text>
            I previously worked on architecture, templates, and components for
            our CMS platform. My team enabled the entire company to move from
            almost{" "}
            <Text element="span" color="alternate" weight="semibold">
              20 websites
            </Text>{" "}
            down to just{" "}
            <Text element="span" color="alternate" weight="semibold">
              one
            </Text>
            .
          </Text>
          <Text>
            I made the transition to tech in 2020, earning a Full Stack Web
            Development certificate from Vanderbilt University.
          </Text>
          <Text>Some things I enjoy outside of engineering:</Text>
          <List>
            <li>
              <Text>Coffee with friends and family.</Text>
            </li>
            <li>
              <Text>
                Going on walks with my wife Regan, my son Lewis, and my dog
                Oliver.
              </Text>
            </li>
            <li>
              <Text>Capturing memories through film.</Text>
            </li>
            <li>
              <Text>Watching a really good show or movie.</Text>
            </li>
          </List>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
