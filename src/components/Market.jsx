import React, { useEffect, useRef } from 'react'

const Market = () => {
    const container = useRef();
    let check=useRef(0);
    useEffect(
      () => {
        if(check.current<1){
        check.current+=1;
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
  {
    "width": "100%",
    "height": 550,
    "defaultColumn": "overview",
    "defaultScreen": "general",
    "market": "india",
    "showToolbar": true,
    "colorTheme": "light",
    "locale": "en"
}`
  container.current.appendChild(script);
  }},[])
  return (
    <div  ref={container} className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
</div>
  )
}

export default Market
