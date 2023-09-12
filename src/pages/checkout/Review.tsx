import { useContext } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CartContext } from "../../contexts/CartContext";

export default function Review() {
  const { cartItems } = useContext(CartContext);
  const products = [
    {
      name: "Product 1",
      desc: "A nice thing",
      price: "$9.99",
    },
    {
      name: "Product 2",
      desc: "Another thing",
      price: "$3.45",
    },
    {
      name: "Product 3",
      desc: "Something else",
      price: "$6.51",
    },
    {
      name: "Product 4",
      desc: "Best thing of all",
      price: "$14.11",
    },
    { name: "Shipping", desc: "", price: "Free" },
  ];
  //   const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
  //   const payments = [
  //     { name: "Card type", detail: "Visa" },
  //     { name: "Card holder", detail: "Mr John Smith" },
  //     { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  //     { name: "Expiry date", detail: "04/2024" },
  //   ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
