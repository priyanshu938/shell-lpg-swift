import { useContext } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CartContext } from "../../contexts/CartContext";

export default function Review() {
  const { cartItems } = useContext(CartContext);

 

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity : ${product.quantity}`}
            />
            <Typography variant="body2">
              Rs {product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs {cartItems?.reduce((a, b) => a + b.price * b.quantity, 0)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
