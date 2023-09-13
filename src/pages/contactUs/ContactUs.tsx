import { useContext, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { NotificationContext } from "../../contexts/NotificationContext";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const { setSeverity, setMessage, setOpen } = useContext(NotificationContext);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xyyqpzjy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contactMessage }),
      });
    } catch (error) {
      console.log(error);
    }
    setSeverity("success");
    setMessage("Message sent successfully");
    setOpen(true);
    setName("");
    setEmail("");
    setContactMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          borderRadius: "0.5em",
          boxShadow: "0 0 10px  #838080",
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#e9b142",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#e6bb4f",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
