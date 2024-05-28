import React from 'react';
import './TradingComponent.css';

function TradingComponent() {
  return (
    <div className="trading-container">
      <div className="trading-panel">
        <div className="trading-tabs">
          <button className="active">Limit</button>
          <button>Market</button>
          <button>Stop Limit</button>
          <button>Stop Market</button>
        </div>
        <div className="trading-form">
          <div className="trading-input">
            <input type="text" placeholder="Price" />
            <span className="currency">BTC</span>
          </div>
          <div className="trading-input">
            <input type="text" placeholder="Amount" />
            <span className="currency">ETH</span>
          </div>
          <div className="trading-percentage-buttons">
            <button>25%</button>
            <button>50%</button>
            <button>75%</button>
            <button>100%</button>
          </div>
          <div className="trading-info">
            <p>Available: 0 BTC = 0 USD</p>
            <p>Volume: 0 BTC = 0 USD</p>
            <p>Margin: 0 BTC = 0 USD</p>
            <p>Fee: 0 BTC = 0 USD</p>
          </div>
          <button className="buy-button">BUY</button>
        </div>
        <div className="trading-form">
          <div className="trading-input">
            <input type="text" placeholder="Price" />
            <span className="currency">BTC</span>
          </div>
          <div className="trading-input">
            <input type="text" placeholder="Amount" />
            <span className="currency">ETH</span>
          </div>
          <div className="trading-percentage-buttons">
            <button>25%</button>
            <button>50%</button>
            <button>75%</button>
            <button>100%</button>
          </div>
          <div className="trading-info">
            <p>Available: 0 BTC = 0 USD</p>
            <p>Volume: 0 BTC = 0 USD</p>
            <p>Margin: 0 BTC = 0 USD</p>
            <p>Fee: 0 BTC = 0 USD</p>
          </div>
          <button className="sell-button">SELL</button>
        </div>
      </div>
    </div>
  );
}

export default TradingComponent;
