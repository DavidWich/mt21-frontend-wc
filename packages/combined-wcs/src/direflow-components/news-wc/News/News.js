import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./News.css";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import { NewsItem } from "./NewsItem";
import { fetchNews, fetchUserCourses } from "../../../assets/methods/fetch";

export default function News(props) {
  const { email, redirect, token } = props;
  const { t } = useTranslation();
  const [filter, setFilter] = useState("ALL");
  const [courses, setCourses] = useState([]);
  const [news, setNews] = useState([]);
  const filterChangeHandler = (value) => setFilter(value);

  useEffect(() => {
    const f = async () => {
      if (email && email.length > 0) {
        const courses = await fetchUserCourses(email, token);
        setCourses(courses.courses);
      }
    };
    f();
  }, [email, token]);

  useEffect(() => {
    const f = async () => {
      const news = await fetchNews(email, token);
      setNews(news.news);
    };
    f();
  }, [email, token]);

  let filteredNews = [];
  switch (filter) {
    case "ALL":
      filteredNews = news;
      break;
    case "COURSE":
      filteredNews = news.filter((item) => item.course !== "ALL");
      break;
    default:
      filteredNews = news.filter((item) => item.course === filter);
  }

  const filters = [
    { value: "ALL", text: t("news.all") },
    { value: "COURSE", text: t("news.course_news") },
  ].concat(courses.map((item) => ({ value: item, text: item })));

  const cardContent =
    filteredNews.length === 0 ? (
      <p>{t("news.not_found")}</p>
    ) : (
      <ul>
        {filteredNews.map((item) => (
          <NewsItem
            key={item._id}
            title={item.title}
            course={item.course}
            description={item.description}
            date={item.date}
            author={item.author}
            redirect={redirect}
          />
        ))}
      </ul>
    );

  return (
    <Styled styles={styles}>
      <section className={"news"}>
        <div className={"heading"}>
          <h1>{t("news.news")}</h1>
          <Dropdown
            onChangeHandler={filterChangeHandler}
            styling={"filter"}
            items={filters}
          />
        </div>
        <Card>{cardContent}</Card>
      </section>
    </Styled>
  );
}
