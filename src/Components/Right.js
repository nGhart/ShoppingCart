import React from 'react'

function Right() {
  return (
    <>
    <h6>Sizes: </h6>
	  <div className="row">
      <div className="col-xs-4 size"><h6>XS</h6></div>
      <div className="col-xs-4 size"><h6>S</h6></div>
      <div className="col-xs-4 size"><h6>M</h6></div>
      <div className="col-xs-4 size"><h6>ML</h6></div>
    </div>
    <div className="row">
      <div className="col-xs-4 size"><h6>L</h6></div>
      <div className="col-xs-4 size"><h6>XL</h6></div>
      <div className="col-xs-4 size"><h6>XXL</h6></div>
      <div className="col-xs-4 new"></div>
    </div>
    <div className="row">
      <p><small className="text-center">Leave a rating on our site</small></p>
    </div>
    <div className="row star">
	  	<button className="btn btn-default" ><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star </button> <span className="tooltiptext">848</span>
    </div>
    </>
  )
}

export default Right