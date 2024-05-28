import React, { useEffect, useRef } from 'react'

const TickerTape = () => {
    const container = useRef();
    let check=useRef(0);
    useEffect(
      () => {
        if(check.current<1){
        check.current+=1;
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }`;
      container.current.appendChild(script);
          }
   
},[]);
  return (
<div ref={container} className="tradingview-widget-container">
  <div className="tradingview-widget-container__widget"></div>
</div>
  )
}

export default TickerTape
