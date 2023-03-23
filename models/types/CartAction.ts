import { ProductModel } from '../ProductModel';

export type CartAction = {
    type: 'CART_ADD_ITEM';
    payload: ProductModel;
};
