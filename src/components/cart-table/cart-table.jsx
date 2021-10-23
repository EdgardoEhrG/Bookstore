import React from "react";
import { connect } from "react-redux";

import {
  bookRemovedFromCart,
  allBooksRemovedFromCart,
  bookAddedToCart,
} from "../../store/actions";

import "./cart-table.scss";

const CartTable = ({ items, total, onInc, onDec, onDelete }) => {
  const renderRow = (item, i) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{i + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <button className="btn btn-outline-success" onClick={() => onInc(id)}>
            <i className="fa fa-plus-circle"></i>
          </button>
          <button className="btn btn-outline-warning" onClick={() => onDec(id)}>
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table shopping-cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapToSTateProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapToDispatchProps = {
  onDec: bookRemovedFromCart,
  onInc: bookAddedToCart,
  onDelete: allBooksRemovedFromCart,
};

export default connect(mapToSTateProps, mapToDispatchProps)(CartTable);
