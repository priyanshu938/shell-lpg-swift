import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

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

export const CartContext = createContext<{
  cartItems: ICartItems[];
  setCartItems: Dispatch<SetStateAction<ICartItems[]>>;
}>({
  cartItems: [],
  setCartItems: () => {},
});

const CartContextProvider: FC<ICartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
