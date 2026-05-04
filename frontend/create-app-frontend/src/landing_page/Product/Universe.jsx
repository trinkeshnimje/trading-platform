import React from 'react';

function Universe() {
  return (
    <div className='container mt-5 '>
      <div className='row text-center'>
        <h1>The Zerodha Universe</h1>
        <p className='text-center text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4  p-3  mt-5'>
          <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}}/>
          <p className='text-small text-muted'>Zerodha Fund House</p>
        </div>
        <div className='col-4  p-3 mt-5'>
          <img src="media/images/sensibullLogo.svg" style={{width:"40%"}}/>
          <p className='text-small text-muted'>Sensibull Platform</p>
        </div>
        <div className='col-4  p-3 mt-5'>
          <img src="media/images/tijori.svg" style={{width:"40%"}}/>
          <p className='text-small text-muted'>Tijori Platform</p>
        </div>
        <div className='col-4  p-3 mt-5'>
          <img src="media/images/streakLogo.png" style={{width:"40%"}}/>
          <p className='text-small text-muted'>Streak Platform</p>
        </div>
        <div className='col-4  p-3 mt-5'>
          <img src="media/images/smallcaseLogo.png" style={{width:"40%"}}/>
          <p className='text-small text-muted'>SmallCase Platform</p>
        </div>
        <div className='col-4  p-3 mt-5'>
          <img src="media/images/dittoLogo.png" style={{width:"30%"}}/>
          <p className='text-small text-muted'>Ditto Platform</p>
        </div>
        <button className="p-2 mt-3 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto",borderRadius:"0%"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;