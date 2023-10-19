import React from 'react';
import CartTable from '../cart-table';
import CartForm from '../cart-form/cart-form'

const CartPage = () => {
    return (
        <div className="cart"> 
            <CartTable/>
            <CartForm />
        </div>
    )
}

export default CartPage;