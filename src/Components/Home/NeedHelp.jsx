import { useContext } from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ChatBot, Messanger, Phone } from "../../assets/Icons/Footer/Icons";
import { needHelpData } from "../../assets/JsonData/needHelpData";
import { DataContext } from "../../DataProcessing/DataContext";

const iconMap = {
  phone: Phone,
  messenger: Messanger,
  chatbot: ChatBot,
};

export default function NeedHelp() {
  const { lang } = useContext(DataContext);
  const { title, subtitle, cards } = needHelpData[lang];
  const handleAction = (card) => {
    if (card.icon === "phone") {
      window.location.href = "tel:09666121131";
    }

    if (card.icon === "messenger") {
      window.open("https://m.me/AntarangaDotCom", "_blank");
    }

    if (card.icon === "chatbot") {
      if (window.$chatwoot) {
        window.$chatwoot.toggle("open");
      }
    }
  };
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      {/* HEADER */}
      <Stack maxWidth="672px" mx="auto" pb="64px" gap="16px">
        <Typography variant="h3" textAlign="center">
          {title}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          {subtitle}
        </Typography>
      </Stack>

      {/* CARDS */}
      <Grid container spacing={3}>
        {cards.map((card) => {
          const Icon = iconMap[card.icon];

          return (
            <Grid item xs={12} md={4} key={card.id}>
              <Stack
                sx={{
                  height: "100%",
                  border: "1px solid #00000014",
                  boxShadow: "0px 0.86px 52.13px -8.57px #59595924",
                  p: "16px",
                  borderRadius: "16px",
                }}
                alignItems="center"
              >
                {/* ICON */}
                <Stack
                  sx={{
                    width: "72px",
                    height: "72px",
                    background: card.gradient,
                    borderRadius: "50%",
                    flexShrink: 0,
                    mb: "20px",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    size={card.icon === "chatbot" ? "40px" : "32px"}
                    color="#fff"
                  />
                </Stack>

                {/* CONTENT */}
                <Stack textAlign="center" flexGrow={1} mb={2}>
                  <Typography variant="h5" fontWeight={700}>
                    {card.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                </Stack>

                {/* HIGHLIGHT */}
                <Stack
                  sx={{
                    background: card.lightBg,
                    p: "12px 16px",
                    borderRadius: "12px",
                    width: "100%",
                    textAlign: "center",
                    my: "24px",
                  }}
                  gap="4px"
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ color: card.color }}
                  >
                    {card.highlightTitle}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    fontWeight={500}
                    sx={{ color: card.color }}
                  >
                    {card.highlightSubtitle}
                  </Typography>
                </Stack>

                {/* BUTTON */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    background: card.gradient,
                    textTransform: "none",
                  }}
                  onClick={() => handleAction(card)}
                >
                  {card.buttonText}
                </Button>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
