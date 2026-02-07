import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HappyClientGrid() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("/clients");
        setClients(res.data || []);
      } catch (error) {
        console.error("Failed to load clients:", error);
      }
    };
    fetchClients();
  }, []);

  return (
    <Container sx={{ py: 10 }}>
      {/* Section Heading */}
      <Typography variant="h3" align="center" fontWeight={700} mb={1}>
        Trusted by Many Companies
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" mb={6}>
        We proudly work with leading brands across industries
      </Typography>

      {/* Logo Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {clients.map((client, idx) => (
          <Box
            key={idx}
            sx={{
              width: "100%",
              maxWidth: 140,
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={client.image?.url}
              alt={client.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
