import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllSuccessStories() {
  const [stories, setStories] = useState([]);

  // 📡 fetch API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get("/all-stories");
        setStories(data || []);
      } catch (err) {
        console.error("Failed to load stories", err);
      }
    };

    fetchStories();
  }, []);

  return (
    <Container sx={{ pt: 8, pb: 8 }}>
      {/* 🏷 Section Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 20, md: 28 },
            fontWeight: 700,
          }}
        >
          Starlink Success Stories
        </Typography>

        {/* 🔘 See All Button */}
      </Box>

      {/* 🧱 Grid */}
      <Grid container spacing={3}>
        {stories.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={`/success-stories/${item._id}`}
              >
                {/* 🖼 Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={item.coverPhoto}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />

                {/* 📝 Content */}
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      mb: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "text.secondary",
                    }}
                  >
                    Published: {new Date(item.createdAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
