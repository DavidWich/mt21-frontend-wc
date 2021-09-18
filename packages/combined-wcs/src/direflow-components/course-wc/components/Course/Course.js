import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Course.css";
import Card from "../UI/Card";
import { CourseItem } from "./CourseItem";
import { fetchUserCoursesByMail } from "../../../../assets/methods/fetch";

export default function Course(props) {
  const { t } = useTranslation();
  const { email, redirect, token } = props;
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

  return (
    <Styled styles={styles}>
      <section className="course">
        <h1>{t("courses.courses")}</h1>
        <Card>
          <ul>
            {courses.map((item) => (
              <CourseItem
                key={item._id}
                course={item.course}
                abbreviation={item.abbreviation}
                professor={item.professor}
                currentPeople={item.currentPeople}
                maxPeople={item.maxPeople}
                redirect={redirect}
              />
            ))}
          </ul>
        </Card>
      </section>
    </Styled>
  );
}
