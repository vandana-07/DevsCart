import React, { useState } from "react";
import "./Cart.css";

const Cart = ({cartItems, setCartItems}) => {
  const [address, setAddress] = useState(
    localStorage.getItem("Address")
      ? localStorage.getItem("Address")
      : "Add location to deliver"
  );


  let items = [];
  let subtotal  = 0;
  for(let i=0;i<cartItems.length;i++){
    subtotal += cartItems[i].price;
    items.push(<div className="item">
    <div className="itemImage">
      <img src={cartItems[i].image} alt="" />
    </div>
    <div className="itemDescription">
      <p className="itemName">{cartItems[i].name}</p>
      <p className="itemSeller">Seller: DevsCart</p>
      <p className="itemPrice">
        {cartItems[i].price} <span> {cartItems[i].cutprice}</span>
      </p>
      <button className="removeBtn">REMOVE</button>
    </div>
  </div>) 
  }

  return (
    <div className="cartPage">
      <div className="left">
        <div className="leftHeading">Shopping Cart</div>

        <div className="cartItems">
          {items.length==0?"No Item in Cart":items}

         
        </div>
      </div>

      <div className="right">
        <div className="totalSection">
          <div className="totalHeading">
             ITEMS TOTAL <hr />
          </div>

          <div className="items">
            <span>0{cartItems.length?cartItems.length:0}</span>
          </div>
          {/* <div className="total">
            Total: ₹ <span>3745</span>{" "}
          </div> */}
          <button id="checkout">Checkout</button>
        </div>
        <div className="address">
          <div className="addressHeading">
            Address <hr />
          </div>

          <div className="mainAddress">{address}</div>

          <div id="addModal" className="modal">
            <div className="modal-content">
              <div className="modalHead">
                <p>Edit Address</p>

                <span
                  onClick={() => {
                    document.getElementById("addModal").style.display = "none";
                  }}
                  className="close"
                >
                  &times;
                </span>
              </div>

              <hr />
              <div className="addDetails">
                <label htmlFor="">
                  House No.
                  <input type="text" name="hno" />
                </label>
                <label htmlFor="">
                  Street
                  <input type="text" name="hno" />
                </label>
                
                <label htmlFor="">
                  PinCode
                  <input type="number" name="hno" />
                </label>
                <label htmlFor="">
                  State
                  <input type="text" name="hno" />
                </label>
              </div>

              <button
                onClick={(e) => {
                  let newAdd = "";
                  if (
                    e.target.previousSibling.children[0].children[0].value != ""
                  ) {
                    for (let i = 0; i < 4; i++) {
                      newAdd +=
                        e.target.previousSibling.children[i].children[0].value +
                        ", ";
                    }
                    localStorage.setItem("Address", newAdd);
                    setAddress(newAdd);
                  }
                  document.getElementById("addModal").style.display = "none";
                }}
                id="checkout"
              >
                Save Address
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              document.getElementById("addModal").style.display = "block";
            }}
            id="checkout"
          >
            Edit
          </button>
        </div>

        <div className="recommendations">
          <div className="recommendationsHeading">
            Recommedations <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
