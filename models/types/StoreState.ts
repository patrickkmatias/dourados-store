import { ProductModel } from "../ProductModel";

export type StoreState = {
    cart: { cartItems: ProductModel[] };
};
