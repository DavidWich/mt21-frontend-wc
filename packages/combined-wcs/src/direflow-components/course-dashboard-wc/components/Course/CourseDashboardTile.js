import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./CourseDashboardTile.css";
import { fetchUserCoursesByMail } from "../../../../assets/methods/fetch";

export default function CourseDashboardTile(props) {
  const { email, redirect, token } = props;
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const f = async () => {
      if (email) {
        const data = await fetchUserCoursesByMail(email, token);
        if (data) {
          setCourses(data.courses);
        }
      }
    };
    f();
  }, [email, token]);

  const linkHandler = (data) =>
    redirect({ pathname: "/course", query: { course: data } });

  return (
    <Styled styles={styles}>
      <div className="dashboard">
        <h2 onClick={() => linkHandler("")}>{t("dashboard.courses")}</h2>
        <ul className="dashboard-items">
          {courses.map((item) => (
            <li key={item._id} onClick={() => linkHandler(item.abbreviation)}>
              {item.course}
            </li>
          ))}
        </ul>
      </div>
    </Styled>
  );
}
