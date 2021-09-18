import { Styled } from "direflow-component";
import React from "react";

import styles from "./NewsItem.css";

export function NewsItem(props) {
  const { author, course, date, description, redirect, title } = props;

  const onClickHandler = (event) => {
    event.preventDefault();
    redirect({ pathname: "/course", query: { course: course } });
  };

  const parseCourse = (course) =>
    course === "ALL" || course.length === 0 ? (
      ""
    ) : (
      <div className={"course"} onClick={onClickHandler}>{`[${course}]`}</div>
    );

  return (
    <Styled styles={styles}>
      <li className={"single"}>
        <div>
          <div className={"headline"}>
            <h3>{title}</h3>
            {parseCourse(course)}
          </div>
          <div className={"description"}>{description}</div>
          <div className={"author"}>
            - {author} ({date})
          </div>
        </div>
      </li>
    </Styled>
  );
}
