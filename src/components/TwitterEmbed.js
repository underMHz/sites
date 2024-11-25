// src/components/TwitterEmbed.js
import React, { useEffect } from "react";

const TwitterEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/underMHz?ref_src=twsrc%5Etfw"
        data-width="100%"
        data-height="700"
        data-theme="dark"
      >
        Posts from @underMHz
      </a>
    </div>
  );
};

export default TwitterEmbed;
