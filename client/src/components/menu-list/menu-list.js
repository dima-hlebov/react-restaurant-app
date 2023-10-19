import React, {Component} from 'react';
import {connect} from 'react-redux';

import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequested, addToCart} from '../../actions';

import MenuListItem from '../menu-list-item/menu-list-item';
import Spinner from '../spinner/spinner'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        const {menuLoaded, menuRequested} = this.props
        menuRequested(); 

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => menuLoaded(res));
    }

    renderItems(menuItems, addToCart){
        const items = menuItems.map(menuItem => {
            return <MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem} 
                        onAddToCart={() => addToCart(menuItem.id)}/>
        })

        return items;
    }

    render() {
        const {menuItems, loading, addToCart} = this.props;

        if(loading){
            return <Spinner/>;
        }

        const spinner = loading ? <Spinner/> : null;
        const content = !(loading) ? this.renderItems(menuItems, addToCart) : null;

        return (
            <ul className="menu__list">
                {spinner}
                {content}
            </ul>
        )
    }
};

const mapStateToProps = ({menu, loading}) => {
    return {
        menuItems: menu,
        loading: loading
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));