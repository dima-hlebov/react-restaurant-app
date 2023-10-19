import React from 'react';

import './menu-list-item.scss';
import { Button } from '../buttons/button';

const MenuListItem = ({ menuItem, onAddToCart }) => {
    const { title, url, category, price } = menuItem;
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <Button onClick={() => onAddToCart()} label={"Add to cart"} />
            </li>
        </>
    )
};

export default MenuListItem;