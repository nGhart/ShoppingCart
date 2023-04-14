import React from 'react'

function Item(props) {
  return (
    <div className="col-xs-3 item">
      <img className="model" alt=''src={props.source}/>
	  	<div className="freeShip">Free shipping</div>
	  
      <div className="caption">
	  		<h5>{props.cloth}</h5>
        <p>
	  			<span className="line">&#8213;</span>
	  		</p>
	  		<div>
          <p>GHC <b>{props.cedi}</b>.{props.pesewa}</p>
          <p><small>now GHC {props.sale}</small></p>
        </div>
        <button className="btn btn-primary btn-block cart">Add to Cart</button>
      </div>
	  
    </div>
  )
}

export default Item