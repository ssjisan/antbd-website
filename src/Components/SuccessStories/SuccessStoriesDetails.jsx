import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import NewsContentRenderer from "../../lib/html2text";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";

export default function SuccessStoriesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);

  // 📡 fetch single story
  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/success-stories/${id}`);
        setStory(res.data);
      } catch {
        toast.error("Failed to load success story");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchStory();
  }, [id]);

  // 📅 safe date formatting
  const formattedDate = story?.createdAt
    ? new Date(story.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  if (loading) return <Box sx={{ p: 5 }}>Loading...</Box>;

  if (!story) return <Box sx={{ p: 5 }}>No Data Found</Box>;

  return (
    <Container sx={{ py: 6, maxWidth: "900px" }}>
      {/* 🔙 Back Button */}
      <Button onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Back
      </Button>

      {/* 🖼 Cover Image */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, md: 380 },
          borderRadius: "16px",
          overflow: "hidden",
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={story.coverPhoto}
          alt={story.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* 🏷 Title */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        {story.title}
      </Typography>

      {/* 📅 Date */}
      <Typography
        sx={{
          fontSize: 14,
          color: "text.secondary",
          mb: 3,
        }}
      >
        Published on {formattedDate}
      </Typography>

      {/* 📄 Content */}
      <Box
        sx={{
          "& h3": { fontSize: 22, fontWeight: 700, mt: 3 },
          "& p": { fontSize: 16, lineHeight: 1.7, mb: 2 },
        }}
      >
        <NewsContentRenderer html={story.contentHTML} />
      </Box>
    </Container>
  );
}
