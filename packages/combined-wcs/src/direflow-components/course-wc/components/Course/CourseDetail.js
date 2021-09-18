import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchCourseDetail } from "../../../../assets/methods/fetch";

import styles from "./CourseDetail.css";

export default function CourseDetail(props) {
  const { t } = useTranslation();
  const [courseData, setCourseData] = useState({});
  const { course, redirect, token } = props;

  const sendMailHandler = (event) => {
    event.preventDefault();
    redirect({
      pathname: "/mail",
      query: {
        new_mail: "true",
        recipient: `${courseData.abbreviation}@my-university.de`,
      },
    });
  };

  useEffect(() => {
    const f = async () => {
      const data = await fetchCourseDetail(course, token);
      setCourseData(data.courseData);
    };
    f();
  }, [course, token]);

  return (
    <Styled styles={styles}>
      <div className="course-detail">
        <div className="inline">
          <h1>
            {courseData.course} ({courseData.abbreviation})
          </h1>
          <button onClick={sendMailHandler}>{t("courses.send_mail")}</button>
        </div>
        <h3>
          {t("courses.lecturer")}: {courseData.professor}
        </h3>
        <p>
          {t("courses.enrolled")}: {courseData.currentPeople}/
          {courseData.maxPeople}
        </p>
      </div>
    </Styled>
  );
}
