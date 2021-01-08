export default class RestaurantService{
    constructor(){
        this._apiBase = 'http://localhost:3001'
    }
    
    _getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    
    getMenuItems = async () => {
        const items = await this._getData('/menu/');
        return items;
    }

    putOrder = async (order) => {
        const orderNumber = await this.getOrderNumber();
        const newOrder = {
            id: orderNumber,
            ...order
        };

        const res = await fetch(`${this._apiBase}/orders`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!res.ok){
            throw new Error('json error'); 
        }
    }

    getOrderNumber = async () => {
        const res = await this._getData('/orders/');
        const orderNumber = res.length + 1;

        return orderNumber;
    }
}