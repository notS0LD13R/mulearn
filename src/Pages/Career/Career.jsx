import React, { Fragment } from "react";
import CareersCard from "../../Components/CareersCard/CareersCard";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Career.module.css";
import ClosedCareers from "../../Components/ClosedCareers/ClosedCareers";

import ClosedCarrersData from "./data/data";

const Career = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className={styles.first__section}>
          <div className={styles.fstexts}>
            <p className={styles.fsheading}>
              µLearn <br />
              Career Labs.
            </p>
            <p className={styles.fstagline}>
              In search of a job opportunity / internship? µLearn Career Labs
              helps you connect with opportunities from the industry.
            </p>
          </div>
          <div className={styles.fsimage}>
            <img
              src="/assets/careers/illustration.webp"
              className={styles.fsillustration}
              alt=""
            />
          </div>
        </div>
        <div className={styles.second_section}>
          <p className={styles.ssheading}>
            <span className={styles.ssheadingspan}>µLearn X Yip</span> Hiring
            Call
          </p>
          <div className={styles.opportunities}>
            <CareersCard
              title="Program Manager"
              duration="1 Year"
              payment="INR 60K - 80K"
              criteria="Click View More Button"
              vacancy="01"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/Program-Manager-6aba62240dd34826b37f44afb24d95f4"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
            <CareersCard
              title="Operations Coordinator"
              duration="1 Year"
              payment="INR 20K - 40K"
              criteria="Click View More Button"
              vacancy="01"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/Operations-Coordinator-67535a48b8974ba1ba3e77151f4ae938"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
            <CareersCard
              title="Zonal Coordinator"
              duration="1 Year"
              payment="INR 20K - 40K"
              criteria="Click View More Button"
              vacancy="03"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/Zonal-Coordinator-edbed256b1d04703b7a444b6c070bfbb"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
            <CareersCard
              title="District Coordinator"
              duration="1 Year"
              payment="INR 15K - 30K"
              criteria="Click View More Button"
              vacancy="14"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/District-Coordinator-4f10c75f117a49a3a9507a87f8ce2318"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
            <CareersCard
              title="Creative Coordinator"
              duration="1 Year"
              payment="INR 20K - 40K"
              criteria="Click View More Button"
              vacancy="01"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/Creative-Coordinator-a5083823e02a48c0a023dc86828b74b9"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
            <CareersCard
              title="Zonal Coordinator"
              duration="As per requirement"
              payment="INR 500/Day+TA"
              criteria="Click View More Button"
              vacancy="140"
              lastdate="21st November"
              jdlink="https://mulearn.notion.site/Temporary-Intern-b413ce986e7b410d918a7b2aba3ae879"
              applylink="https://airtable.com/shr5Wy2PVLHFVOgkA"
            />
          </div>
        </div>
        <div className={styles.second_section}>
          <p className={styles.ssheading}>Previous Hiring Calls</p>
          <div className={styles.opportunities}>
            {ClosedCarrersData.map((data) => (
              <ClosedCareers
                company={data.Company}
                title={data.Title}
                duration={data.Duration}
                payment={data.Stipend || data.Package}
                criteria={data.Qualifications && data.Qualifications[0]}
                date={data.date}
                roles={data.Roles}
                jdlink={data.poster}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Career;
