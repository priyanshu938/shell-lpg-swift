import {
  FC,
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IProviderProps {
  children: ReactNode;
}

interface IUser {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<{
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}>({
  email: "",
  setEmail: () => {},
});

const UserContextProvider: FC<IProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
