import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import WebComponentWrapper from "../../components/Layout/WebComponentWrapper";

export default function CoursePage() {
  const [rendered, setRendered] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const { course } = router.query;

  useEffect(() => {
    if (!rendered) {
      setRendered(true);
    } else if (!isAuth) {
      router.replace("/");
    }
  }, [isAuth, router, rendered]);

  if (!isAuth) {
    return null;
  }

  if (course) {
    return (
      <WebComponentWrapper
        name="course-wc"
        auth={true}
        wcProps={{ course }}
      />
    );
  }

  return <WebComponentWrapper name="course-wc" auth={true} />;
}
