import React from 'react';

function Hero() {
  return ( 
    <section className='container-fluid' id="SupportHero" style={{backgroundColor:"#f8f9fa"}}>
      <div className='container p-5'>
        
        {/* Title and My Tickets */}
        <div className='row mb-4' id="Supportwrapper">
          <div className='col-6'>
            <h1 className='fw-bold'>Support Portal</h1>
          </div>
          <div className='col-6 d-flex justify-content-end align-items-center'>
            <button className='btn btn-primary'>My Tickets</button>
          </div>
        </div>

        {/* Search bar */}
        <div className='row'>
          <div className='col-12'>
            <div className='input-group p-2' style={{backgroundColor:"#fff", borderRadius:"8px", border:"1px solid #ddd"}}>
              <span className='input-group-text border-0 bg-white'>
                <i className='fa fa-search text-muted'></i>
              </span>
              <input 
                type='text' 
                className='form-control border-0' 
                placeholder='Eg: How do I open my account, How do i activate F&O...'
              />
            </div>
          </div>
        </div>

      </div>
    </section>
   );
}

export default Hero;