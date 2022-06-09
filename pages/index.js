import Image from "next/image";
import Section from "../components/section";
import Grid from "../components/grid";
import Styles from "../styles/Home.module.css";
import headshot from "../images/headshot.jpg";

export default function Index() {
  return (
    <Section>
      <Grid>
        <Grid.Item colSpan={{ md: 10 }} colStart={{ md: 2 }}>
          <div className={Styles.profileContainer}>
            <div className={Styles.headshotContainer}>
              <Image
                src={headshot}
                alt="Headshot of Jeffrey McFarland"
                className={Styles.headshotImage}
              />
            </div>
            <div className={Styles.profileInfoContainer}>
              <h1 className={Styles.profileHeading}>Jeffrey McFarland</h1>
              <p className={Styles.profileInfo}>
                Software Engineer based in Nashville, TN
              </p>
            </div>
          </div>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
