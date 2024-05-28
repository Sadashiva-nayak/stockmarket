import React, { useEffect, useRef } from 'react'

const Overview = () => {
  const container = useRef();
  let check=useRef(0);
  useEffect(
    () => {
      if(check.current<1){
      check.current+=1;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
  {
  "width": 1040,
  "height": 550,
  "currencies": [
    "EUR",
    "USD",
    "JPY",
    "GBP",
    "CHF",
    "AUD",
    "CAD",
    "NZD"
  ],
  "isTransparent": false,
  "colorTheme": "light",
  "locale": "en",
  "backgroundColor": "#ffffff"
}`;
container.current.appendChild(script);
    }},
    []
  );

  return (
<div ref={container} className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
</div>
  )
}

export default Overview
