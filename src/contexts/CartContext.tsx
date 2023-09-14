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
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  rating: number | null;
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
