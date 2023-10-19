import React from 'react';
import { connect } from 'react-redux'

import { deleteFromCart } from '../../actions'

import './cart-table.scss';

const CartTable = ({ items, deleteFromCart }) => {
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, price, url, qtty, id } = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-details">{price}$</div>
                                <div className="cart__item-details">x {qtty}</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

const mapStateToProps = ({ cart }) => {
    return {
        items: cart.items
    }
};

const mapDispatchToProps = {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);