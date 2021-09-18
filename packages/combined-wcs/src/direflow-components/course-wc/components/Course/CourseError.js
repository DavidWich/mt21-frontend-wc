import React from "react";
import { useTranslation } from "react-i18next";

export default function CourseError(props) {
  const { abbreviation } = props;
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("courses.error")}</h1>
      <p>
        {t("courses.course")} {`&apos`} {abbreviation} {`&apos`}{" "}
        {t("courses.not_found")}!
      </p>
    </>
  );
}
