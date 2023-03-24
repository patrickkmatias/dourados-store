import { ProductModel } from '../ProductModel';

export type CartAction = {
    type: 'CART_ADD_ITEM' | 'CART_REMOVE_ITEM';
    payload: ProductModel;
};
