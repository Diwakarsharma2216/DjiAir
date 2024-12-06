import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useStore = create(
    persist(
        (set, get) => ({
            cart: {},
            addCart: (productId) => {
                const currentCart = get().cart;
                const updatedCart = {
                    ...currentCart,
                    [productId]: (currentCart[productId] || 0) + 1, // Increase quantity or set to 1 if not in cart
                };
                set({ cart: updatedCart });
            },
        }),
        {
            name: 'cart-items', // name of the item in the storage (must be unique)
            // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);

export default useStore;

