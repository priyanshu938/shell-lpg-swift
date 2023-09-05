import { FC, ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({
  cartItems: 0,
  setCartItems: (cartItems: number) => {},
});

const CartContextProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
