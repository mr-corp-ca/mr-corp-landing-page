import React, { useEffect } from "react";
import Home from "./pages/LandingPage";

function App() {
  useEffect(() => {
    // Add the Meta Pixel script
    const metaPixelScript = document.createElement("script");
    metaPixelScript.async = true;
    metaPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '764407359216880');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(metaPixelScript);

    // Add the noscript tag for Meta Pixel fallback
    const metaPixelNoscript = document.createElement("noscript");
    metaPixelNoscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=764407359216880&ev=PageView&noscript=1"/>
    `;
    document.body.appendChild(metaPixelNoscript);

    // Add the Google tag script
    const googleTagScript = document.createElement("script");
    googleTagScript.async = true;
    googleTagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-16476282520";
    document.head.appendChild(googleTagScript);

    const googleTagInit = document.createElement("script");
    googleTagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16476282520');
    `;
    document.head.appendChild(googleTagInit);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaPixelScript);
      document.body.removeChild(metaPixelNoscript);
      document.head.removeChild(googleTagScript);
      document.head.removeChild(googleTagInit);
    };
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
