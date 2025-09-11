import { useEffect } from "react";

const ChatWoot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.unichat.com.bd";
    
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: "9D8MwtpZ4uzncgXzX11vhgqE",
          baseUrl: BASE_URL,
        });
      }
    };

    document.body.appendChild(script);

    // Optional: cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};

export default ChatWoot;
