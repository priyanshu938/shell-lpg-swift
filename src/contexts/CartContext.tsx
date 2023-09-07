import { FC, ReactNode, createContext, useState } from "react";

interface ICartProviderProps {
  children: ReactNode;
}
interface ICartItems {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}

//fix create cart items bugs
export const CartContext = createContext({
  cartItems: [],
  setCartItems: (cartItems: ICartItems[]) => {},
});

const CartContextProvider: FC<ICartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
