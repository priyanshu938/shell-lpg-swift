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

interface INotification {
  severity: "success" | "info" | "warning" | "error";
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NotificationContext = createContext<{
  severity: "success" | "info" | "warning" | "error";
  message: string;
  open: boolean;
  setSeverity: Dispatch<
    SetStateAction<"success" | "info" | "warning" | "error">
  >;
  setMessage: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  severity: "success",
  message: "",
  open: false,
  setSeverity: () => {},
  setMessage: () => {},
  setOpen: () => {},
});

const NotificationContextProvider: FC<IProviderProps> = ({ children }) => {
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <NotificationContext.Provider
      value={{
        severity,
        message,
        open,
        setSeverity,
        setMessage,
        setOpen,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
