import React from "react";
import Cart from "./cart";

//1. Component
const Menu = props => {
  return (
    <React.Fragment>
      {props.products.map(product => ( 
        <div className="card col-6">
          <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                    <h5 className="card-title"> {product.name} </h5>
                    <p className="card-text">{product.price}</p>
                    <Cart onClick={props.onClick} product={product} />
              </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Menu;
