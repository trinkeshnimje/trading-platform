import React from 'react';

function Hero() {
  return ( 
    <div className='container'>
      <div className='row p-5 mt-5 text-center'>
        <h1 className='fs-2 text-center'>Charges</h1>
        <h4 className='text-muted'>List of all charges and taxes</h4>
      </div>

      <div className='row p-5 mt-1'>
        <div className='col-4 p-5'>
          <img src="media/images/pricingEquity.svg" />
          <h2>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-5'>
          <img src="media/images/intradayTrades.svg" />
          <h2>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 p-5'>
          <img src="media/images/pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
   );
}

export default Hero;