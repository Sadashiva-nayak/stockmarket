import React, { useEffect, useRef } from 'react'

const About = () => {
    const container = useRef();
  let check=useRef(0);
  useEffect(
    () => {
      if(check.current<1){
      check.current+=1;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
  {
  "width": 400,
  "height": 550,
  "isTransparent": false,
  "colorTheme": "light",
  "symbol": "NASDAQ:AAPL",
  "locale": "en"
}`
container.current.appendChild(script);
}},
[]
);

  return (
<div  ref={container} className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
</div>
  )
}

export default About
