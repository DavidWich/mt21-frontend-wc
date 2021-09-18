export const fetchUserCourses = async (email, token) =>
  await fetch("/api/courses", {
    method: "POST",
    body: JSON.stringify({ email, token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching individual course data");
    }
  });

export const fetchCourseDetail = async (course, token) =>
  await fetch(`/api/course/${course}`, {
    method: "POST",
    body: JSON.stringify({ course, token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching course detail data");
    }
  });

export const fetchUserCoursesByMail = async (email, token) =>
  await fetch("/api/coursesByMail", {
    method: "POST",
    body: JSON.stringify({ email, token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching individual course data");
    }
  });

export const fetchNews = async (email, token) =>
  await fetch("/api/news", {
    method: "POST",
    body: JSON.stringify({ email, token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching news");
    }
  });

export const fetchUserEmails = async (email, token) =>
  await fetch("/api/emails", {
    method: "POST",
    body: JSON.stringify({ email, token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching individual email data");
    }
  });

export const fetchBooks = async (token) =>
  await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: { "CONTENT-TYPE": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching books");
    }
  });

export const fetchBooksByCart = async (items, token) =>
  await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({ items, token }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error fetching books by cart");
    }
  });

export const sendMail = async (sender, recipient, subject, content) =>
  await fetch("/api/new-email", {
    method: "POST",
    body: JSON.stringify({
      sender,
      recipient,
      subject,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
