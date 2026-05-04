import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
          <a href={learnMore} >learnMore</a>
          </div>
        </div>
        <div className='col-6  p-5'>
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;