import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Course from "./components/Course/Course";
import CourseDetail from "./components/Course/CourseDetail";

const App = (props) => {
  const { i18n } = useTranslation();
  const { course, email, language, redirect, token } = props;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  if (course && course.length > 0) {
    return <CourseDetail course={course} redirect={redirect} token={token} />;
  }

  return <Course email={email} redirect={redirect} token={token} />;
};

export default App;
