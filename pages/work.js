import Head from "next/head";
import Section from "../components/section";
import Grid from "../components/grid";
import Heading from "../components/heading";
import List from "../components/list";
import Text from "../components/text";
import Icon from "../components/icon";
import { IoMdOpen } from "react-icons/io";

export default function Work() {
  return (
    <Section>
      <Head>
        <title>Work | Jeffrey McFarland</title>
      </Head>
      <Grid>
        <Grid.Item colSpan={{ sm: 10 }} colStart={{ sm: 2 }}>
          <Heading level={1} weight="bold">
            Recent Work
          </Heading>
          <Heading level={2} color="alternate" weight="semibold">
            Ramsey Solutions
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan={{ sm: 8 }} colStart={{ sm: 3 }}>
          <Heading level={4} color="subtle">
            Ramsey Design System
          </Heading>
          <List>
            <Text>
              Build out components and design tokens for the{" "}
              <Text element="span" color="alternate" weight="semibold">
                Design System
              </Text>{" "}
              in three different languages, including React, Freemarker, and
              Ruby.
            </Text>
            <Text>
              Account for{" "}
              <Text element="span" color="alternate" weight="semibold">
                accessibility
              </Text>{" "}
              with each component so every person can recieve an awesome user
              experience.
            </Text>
            <Text>
              Write and maintain excellent{" "}
              <Text element="span" color="alternate" weight="semibold">
                documentation
              </Text>{" "}
              for a better user experience across all disciplines.
            </Text>
          </List>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item colSpan={{ sm: 8 }} colStart={{ sm: 3 }}>
          <Heading level={4} color="subtle">
            <a
              href="https://www.ramseysolutions.com/"
              target="_blank"
              rel="noreferrer"
            >
              RamseySolutions.com
              <Icon element={IoMdOpen} size={32} />
            </a>
          </Heading>
          <List>
            <Text>
              Create{" "}
              <Text element="span" color="alternate" weight="semibold">
                templates
              </Text>{" "}
              and{" "}
              <Text element="span" color="alternate" weight="semibold">
                components
              </Text>{" "}
              for the CMS Platform to enable company-wide site migrations.
            </Text>
            <Text>
              Maintain a global assessment tool that sees an average of{" "}
              <Text element="span" color="alternate" weight="semibold">
                10,000 sessions
              </Text>{" "}
              per day.
            </Text>
          </List>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item colSpan={{ sm: 10 }} colStart={{ sm: 2 }}>
          <Heading level={2} color="alternate" weight="semibold">
            Personal
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan={{ sm: 8 }} colStart={{ sm: 3 }}>
          <Heading level={4} color="subtle">
            <a
              href="https://github.com/jeffreymcfarland/rds-package-dependents"
              target="_blank"
              rel="noreferrer"
            >
              RDS Dependents Graph
              <Icon element={IoMdOpen} size={32} />
            </a>
          </Heading>
          <List>
            <Text>
              <a
                href="https://rds-dependents.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link to live site
                <Icon element={IoMdOpen} size={25} />
              </a>
            </Text>
            <Text>
              Create{" "}
              <Text element="span" color="alternate" weight="semibold">
                dependents graph
              </Text>{" "}
              for private Ramsey Design System packages to get better insights
              into company adoption of Design System components.
            </Text>
          </List>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
