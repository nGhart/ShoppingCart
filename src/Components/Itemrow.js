import React from 'react'
import Item from './Item'

function Itemrow() {
  return (
    <>
	  <div className="row">
	  	<Item source="images/a1.webp" cloth="Tracksuit Top" cedi="23" pesewa="50" sale="21.50" />
        <Item source="images/a2.webp" cloth="Teal T-Shirt" cedi="23" pesewa="50" sale="21.50" />
        <Item source="images/a3.webp" cloth="Black Mesh Top" cedi="32" pesewa="99" sale="27.99" />
        <Item source="images/a4.webp" cloth="'Cute as a Cactus' T-Shirt" cedi="21" pesewa="50" sale="19.90" />
	  </div>
	  <div className="row">
    	<Item source="images/a5.webp" cloth="Black T-Shirt" cedi="23" pesewa="50" sale="21.50" />
    	<Item source="images/a6.webp" cloth="'Stay Groovy' Top" cedi="15" pesewa="99" sale="13.50" />
    	<Item source="images/a7.webp" cloth="Black Long-Sleeve Hoodie" cedi="49" pesewa="50" sale="45.90" />
    	<Item source="images/a8.webp" cloth="Ninja Turtles T-Shirt" cedi="18" pesewa="45" sale="17.50" />
	  </div>
	  <div className="row">
        <Item source="images/a9.webp" cloth="T-Shirt" cedi="22" pesewa="50" sale="21.50" />
        <Item source="images/a10.webp" cloth="Black 'Hang Loose' T-Shirt" cedi="25" pesewa="95" sale="23.50" />
        <Item source="images/a11.webp" cloth="Wine Palm T-shirt" cedi="18" pesewa="55" sale="17.50" />
        <Item source="images/a12.webp" cloth="Gray 'Hang Loose' T-Shirt" cedi="23" pesewa="50" sale="21.50" />
	  </div>
	  <div className="row">
      	<Item source="images/a13.webp" cloth="Black Logo T-Shirt" cedi="35" pesewa="50" sale="31.50" />
        <Item source="images/a14.webp" cloth="White T-Shirt" cedi="24" pesewa="50" sale="22.50" />
        <Item source="images/a15.webp" cloth="Gray Logo T-Shirt" cedi="15" pesewa="50" sale="11.50" />
        <Item source="images/a16.webp" cloth="White T-Shirt" cedi="27" pesewa="99" sale="25.99" />
	  </div>
	</>
  )
}

export default Itemrow