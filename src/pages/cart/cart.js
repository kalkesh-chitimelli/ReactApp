import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Footer from "../../components/footer";
import FooterBanner from "../../components/footer-banner";
import Navbar from "../../components/navbar";
import OrderSuccessful from "../../components/order";
import SingleBanner from "../../components/singleBanner";
import { orderSuccessfulProvider } from "../../pages/provider";
import "./cart.css";
import "./cartContainer.css";
import "./orderSuccessfull.css";
import "./paymentContainer.css";
import "./progress.css";
import "./shippingContainer.css";
const Cart = () => {
  const [cartData, setCartData] = React.useState([]);
  const [subTotal, setSubTotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [active, setActive] = React.useState(1);
  const [tax, setTax] = React.useState(0);
  const [deliveryDate, setDeliveryDate] = React.useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]
  );

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartData(cart);

      let tempsubTotal = 0;
      cart.forEach((item) => {
        tempsubTotal += item.productdata.SalesPrice * item.quantity;
      });
      // console.log(tempsubTotal)
      setSubTotal(tempsubTotal);
      setShipping(80);
      setTax(tempsubTotal * 0.18 + 80 * 0.1);
      setReloadNavbar(!reloadNavbar);
    } else {
      console.log("Cart is empty");
      setReloadNavbar(!reloadNavbar);
    }
  };

  React.useEffect(() => {
    getcartitemsfromlocalstorage();
  }, []);

  const checklogin = () => {
    return true;
  };

  const [reloadNavbar, setReloadNavbar] = React.useState(false);
  const removeitemfromcart = (index) => {
    // alert(index)
    let temp = [...cartData];
    temp.splice(index, 1);
    setCartData(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
    getcartitemsfromlocalstorage();
  };

  const savedaddress = [
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456",
    },
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "123456",
    },
  ];

  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(
    orderSuccessfulProvider
  );
  return (
    <div>
      <Navbar reloadNavbar={reloadNavbar} />
      {ordersuccesscont && (
        <OrderSuccessful
          orderid={selectedOrderId}
          message={`Order Placed Successfully, Order ID: ${selectedOrderId}`}
          redirecto="userorders"
        />
      )}
      <SingleBanner
        heading="My Cart"
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <div className="cart">
        <div className="progress">
          {active === 1 ? (
            <div
              className="c11"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>My Cart</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>My Cart</span>
            </div>
          )}

          {active === 2 ? (
            <div
              className="c11"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(2);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>Shipping</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(2);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>Shipping</span>
            </div>
          )}

          {active === 3 ? (
            <div
              className="c11"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(3);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <span>Payment</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(3);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <span>Payment</span>
            </div>
          )}
          {active === 4 ? (
            <div
              className="c11"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(4);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <span>Success</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                cartData.length > 0 && checklogin() && setActive(4);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <span>Success</span>
            </div>
          )}
        </div>

        {active === 1 && (
          <div className="cartcont">
            {/* <p>Cart cont</p> */}
            {cartData.length > 0 ? (
              <table className="carttable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => {
                    return (
                      <tr key={index} className="cartitemrow">
                        <td data-label="Product">
                          <div
                            className="cartproduct"
                            onClick={() => {
                              window.location.href = `/product/${item.productdata.ProductId}`;
                            }}
                          >
                            <img
                              src={item.productdata.ProductImage[0].image}
                              alt={item.productdata.ProductName}
                            />
                            <p>{item.productdata.ProductName}</p>
                          </div>
                        </td>

                        <td data-label="Quantity">
                          <div className="quantity">
                            <button
                              className="minus"
                              onClick={() => {
                                let newcartData = [...cartData];

                                if (newcartData[index].quantity > 1) {
                                  newcartData[index].quantity -= 1;
                                  setCartData(newcartData);
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify(newcartData)
                                  );
                                  getcartitemsfromlocalstorage();
                                }
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="plus"
                              onClick={() => {
                                let newcartData = [...cartData];
                                newcartData[index].quantity += 1;
                                setCartData(newcartData);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(newcartData)
                                );
                                getcartitemsfromlocalstorage();
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td data-label="Price">
                          <p>
                            ${" "}
                            {item.productdata.SalesPrice
                              ? item.productdata.SalesPrice.toFixed(2)
                              : 0.0}
                          </p>
                        </td>

                        <td>
                          <p>
                            ${" "}
                            {(
                              item.productdata.SalesPrice * item.quantity
                            ).toFixed(2)}
                          </p>
                        </td>

                        <td data-label="Remove">
                          <div
                            className="delbtn"
                            onClick={() => {
                              removeitemfromcart(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Sub-Total</td>
                    <td className="totaltableright">$ {subTotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Shipping</td>
                    <td className="totaltableright">$ {shipping.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Total</td>
                    <td className="totaltableright">
                      $ {(subTotal + shipping).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Tax</td>
                    <td className="totaltableright">$ {tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Net-Total</td>
                    <td className="totaltableright">
                      $ {(tax + subTotal + shipping).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="emptycart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        )}

        {active === 2 && (
          <div className="shippingcont">
            <div className="selectdate">
              <h2 className="mainhead1">Select Delivery Date</h2>
              <input
                min={
                  new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                type="date"
                value={deliveryDate}
                onChange={(e) => {
                  setDeliveryDate(e.target.value);
                }}
              />
            </div>
            <div className="previous">
              <h2 className="mainhead1">Previous Saved Address</h2>
              {savedaddress.length > 0 ? (
                savedaddress.map((item, index) => {
                  return (
                    <div className="radio" key={index}>
                      <input type="radio" name="address" id={index} />
                      <span>
                        {item.AddressLine1 +
                          ", " +
                          item.AddressLine2 +
                          ", " +
                          item.AddressLine3 +
                          ", " +
                          item.postalcode}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="emptyaddress">
                  <p>No address Found</p>
                </div>
              )}
            </div>
            <h3>OR</h3>
            <div className="shippingadd">
              <input type="text" placeholder="Address Line 1" />
              <input type="text" placeholder="Address Line 2" />
              <input type="text" placeholder="Address Line 3" />
              <input type="text" placeholder="Postal Code" />
              <button>Save</button>
            </div>
          </div>
        )}
        {active === 3 && (
          <div className="paymentcont">
            <h2 className="mainhead1">Select Payment Method</h2>
            <div className="paymenttypes">
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment1" />
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                  alt="paypal"
                />
              </div>
            </div>

            <div className="paymentagreement">
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="c2">
              <span>Net Total</span>
              &nbsp;&nbsp;
              <span>$ {(subTotal + tax + shipping).toFixed(2)}</span>
            </div>
          </div>
        )}
        {active === 4 && (
          <div className="ordersuccessfull">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>

            <h2 className="mainhead1">Order Placed Successfully</h2>
            <p>Thank you for shopping with us</p>
            <span>Order ID : 12345</span>
          </div>
        )}

        {/* CART BUTTONS */}
        {active === 1 && cartData.length > 0 && (
          <div className="btns">
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setActive(2);
              }}
            >
              Next
            </button>
          </div>
        )}

        {active === 2 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checklogin() && setActive(1);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setActive(3);
              }}
            >
              Next
            </button>
          </div>
        )}

        {active === 3 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checklogin() && setActive(2);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setActive(4);
              }}
            >
              Next
            </button>
          </div>
        )}
        {active === 4 && (
          <div className="btns">
            {/* <button className='backbtn'
              onClick={() => {
                checklogin() && setActive(3)
              }}
            >Back</button> */}
            <button
              className="nextbtn"
              onClick={() => {
                setSelectedOrderId(12345);
                setordersuccesscont(true);
              }}
            >
              View Invoice
            </button>
          </div>
        )}
      </div>
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Cart;
