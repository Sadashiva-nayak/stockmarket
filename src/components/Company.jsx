import React, { useEffect ,useRef} from 'react'

const Company = () => {
  const container = useRef();
  let check=useRef(0);
  useEffect(
    () => {
      if(check.current<1){
      check.current+=1;
    const script = document.createElement("script");
    script.type="text/javascript"
    script.src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
    script.async = true;
    script.innerHTML =`
    {
      "symbol": "BSE:SENSEX",
      "width": "1040",
      "locale": "en",
      "colorTheme": "light",
      "isTransparent": true
    }`;
    container.current.appendChild(script);
}},[])
  return (
    <section ref={container} id="symbol-info">
    <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
    </div>
</section>
  )
}

export default Company
