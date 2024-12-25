"use client";
import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

const IntercomChatComponent = () => {
  useEffect(() => {
    Intercom({
      app_id: "wwne8hg3",
    });

    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return <></>;
};

export default IntercomChatComponent;
