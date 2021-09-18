import { Styled } from "direflow-component";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./CourseItem.css";

export function CourseItem(props) {
  const {
    abbreviation,
    course,
    currentPeople,
    maxPeople,
    professor,
    redirect,
  } = props;
  const { t } = useTranslation();

  const onClickHandler = (event) => {
    event.preventDefault();
    redirect({ query: { course: abbreviation } });
  };

  return (
    <Styled styles={styles}>
      <li className="single">
        <div>
          <h3
            id={`course_${props.abbreviation}`}
            onClick={onClickHandler}
          >{`${course} (${abbreviation})`}</h3>
          <div className="description">{professor}</div>
          <div className="description">
            {currentPeople}/{maxPeople} {t("courses.people")}
          </div>
        </div>
      </li>
    </Styled>
  );
}
