import { FiMapPin, FiDollarSign, FiSettings, FiShield, FiBox } from "react-icons/fi";
import styles from "./JobList.module.css";
import { memo } from "react";

type JobItem = {
  title: string;
  desc: string;
  location: string;
  salary: string;
  type: string;
};

type Props = {
  data: JobItem[];
};

const icons = [FiSettings, FiShield, FiBox];

const JobList = ({ data }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Vị trí đang tuyển dụng</h2>
        <p>
          Chúng tôi luôn tìm kiếm những cộng sự tài năng và nhiệt huyết để cùng
          đồng hành.
        </p>
      </div>

      <div className={styles.grid}>
        {data.map((job, i) => {
          const Icon = icons[i % icons.length];

          return (
            <div key={i} className={styles.card}>
              {/* top */}
              <div className={styles.top}>
                <div className={styles.iconBox}>
                  <Icon />
                </div>

                <span className={styles.badge}>{job.type}</span>
              </div>

              {/* content */}
              <h3 className={styles.title}>{job.title}</h3>
              <p className={styles.desc}>{job.desc}</p>

              <div className={styles.meta}>
                <span>
                  <FiMapPin /> {job.location}
                </span>
                <span>
                  <FiDollarSign /> {job.salary}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* button */}
      <div className={styles.ctaWrapper}>
        <button className={styles.cta}>
          Xem tất cả cơ hội nghề nghiệp
        </button>
      </div>
    </section>
  );
};

export default memo(JobList);