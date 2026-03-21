import styles from "./TimelineSection.module.css";
import { memo } from "react";

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

type TimelineProps = {
  heading: string;
  items: TimelineItem[];
};

const TimelineSection = ({ heading, items }: TimelineProps) => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineContainer}>
        {/* TITLE */}
        <h2 className={styles.timelineHeading}>{heading}</h2>

        {/* TIMELINE */}
        <div className={styles.timelineWrapper}>
          {/* LINE */}
          <div className={styles.timelineLineDesktop}></div>
          <div className={styles.timelineLineMobile}></div>

          <div className={styles.timelineList}>
            {items.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                {/* DOT */}
                <div
                  className={`${styles.timelineDot} ${
                    i % 2 === 0 ? "bg-primary-dark" : "bg-accent"
                  }`}
                />

                {/* YEAR */}
                <div
                  className={`${styles.timelineYear} ${
                    i % 2 === 0 ? "bg-primary-dark" : "bg-accent"
                  }`}
                >
                  {item.year}
                </div>

                {/* CONTENT */}
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TimelineSection);
