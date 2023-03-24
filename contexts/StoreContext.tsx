import { createContext, useReducer, ReactNode } from 'react';
import { CartAction, StoreState } from '@/models/types';

const initialStore: StoreState = {
    cart: { cartItems: [] },
};

export const StoreContext = createContext<{
    state: StoreState;
    dispatch: React.Dispatch<any>;
}>({
    state: initialStore,
    dispatch: () => null,
});

/**
 * Changes the actual state of the StoreContext
 * accordingly to the passed action.
 *
 * @param {StoreState} state
 * @param {CartAction} action
 * @returns Passed state with or without new state
 */
function reducer(state: StoreState, action: CartAction) {
    switch (action?.type) {
        case 'CART_ADD_ITEM': {
            const items = state.cart.cartItems;
            const newItem = action!.payload;
            const existItem = items.find((i) => i.slug === newItem.slug);
            if (!existItem) {
                return {
                    cart: { cartItems: [...items, newItem] },
                };
            }
        }
        case 'CART_REMOVE_ITEM': {
            const cartItems = state.cart.cartItems.filter(
                (item) => item.slug !== action.payload.slug
            );
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        default:
            return state;
    }
}

export function StoreProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialStore);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}
