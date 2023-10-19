import React from 'react';
import { connect } from 'react-redux'

import WithRestoService from '../hoc/with-resto-service';
import { deleteAllFromCart } from '../../actions'
import { Button } from '../buttons/button';

import './cart-form.sass';

const CartForm = ({ order, deleteAllFromCart, RestoService }) => {
    const submitHendler = (e) => {
        e.preventDefault();
        const getInput = (name) => {
            const inputValue = e.target.querySelector(`input[name="${name}"]`).value;
            e.target.querySelector(`input[name="${name}"]`).value = '';
            return inputValue;
        }
        const newOrder = {
            ...order,
            name: getInput('name'),
            email: getInput('email')
        }
        RestoService.putOrder(newOrder);
        deleteAllFromCart();
    };

    if (order.items.length === 0) {
        return null;
    }

    return (
        <form onSubmit={submitHendler}
            className="cart-form">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <Button label={"Send"} className={"btn__w-full"} />
        </form>
    );
};

const mapStateToProps = ({ cart }) => {
    return {
        order: cart
    }
};

const mapDispatchToProps = {
    deleteAllFromCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartForm));