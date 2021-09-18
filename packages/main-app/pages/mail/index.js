import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebComponentWrapper from "../../components/Layout/WebComponentWrapper";

export default function MailPage() {
  const router = useRouter();
  const [rendered, setRendered] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const { new_mail, recipient } = router.query;

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

  if (new_mail === "true") {
    return (
      <WebComponentWrapper
        auth={true}
        name="new-email-wc"
        wcProps={{ recipient: recipient }}
      />
    );
  }

  return <WebComponentWrapper auth={true} name="email-wc" />;
}
