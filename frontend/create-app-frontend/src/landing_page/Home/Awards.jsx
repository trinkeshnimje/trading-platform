import React from 'react';

function Awards() {
  return ( 
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <div className='col-6 p-5'>
          <img src="media/images/largestBroker.svg" className='w-100'/>
        </div>
        <div className='col-6 p-5'>
          <h1>Largest Stock Broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retial order volumes in india by trading and investing in: </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Stocks & IPO</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds & govt. Security</p></li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width:"80%"}}/>
        </div>
      </div>
    </div>
   );
}

export default Awards;