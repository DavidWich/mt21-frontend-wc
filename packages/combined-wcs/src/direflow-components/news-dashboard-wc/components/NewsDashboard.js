import { Styled } from "direflow-component";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./NewsDashboard.css";
import { fetchNews } from "../../../assets/methods/fetch";

export default function NewsDashboard(props) {
  const { email, redirect, token } = props;
  const { t } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const f = async () => {
      const _news = await fetchNews(email, token);
      setNews(_news.news);
    };
    f();
  }, [email, token]);

  const linkHandler = (event) => {
    event.preventDefault();
    redirect("/news");
  };

  return (
    <Styled styles={styles}>
      <div className="dashboard">
        <h2 onClick={linkHandler}>{t("dashboard.news")}</h2>
        <ul className="dashboard-items">
          {news.map((item) => (
            <li key={item.id}>
              <div className="link" onClick={linkHandler}>
                {item.title}
              </div>
              <div className="item-date">{item.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </Styled>
  );
}
