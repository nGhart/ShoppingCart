import React, { Component } from 'react'

export class Head extends Component {
  render() {
    return (
	<div className="row">
		<nav className="navbar navbar-default banner">

			<div className="container-fluid">
				<ul className="nav navbar-nav">
                    <li className="active">16 Product(s) found</li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <label className="order" for="no">Order by</label> 
                        <input type="number" name="" id="no" placeholder=" Select" />
					</li>
                </ul>
            </div>
        
	  	</nav>
    </div>
    )
  }
}

export default Head