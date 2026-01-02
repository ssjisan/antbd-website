import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Bullet } from "../../assets/Icons/Common/Icons";

export default function SelfPortal() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack
            gap="24px"
            sx={{
              pl: { md: "100px" },
              mt: { xs: "32px", md: 0 },
            }}
          >
            <Typography variant="h2">Client Self Portal</Typography>
            <Typography variant="h5" color="text.secondary">
              Manage everything from one secure dashboard. Pay bills, track
              usage, and get support instantly.
            </Typography>
            <Stack flexDirection="column" mt={5} gap="24px">
              <Stack flexDirection="row" gap="12px">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Stack gap="4px">
                  <Typography variant="h6" fontWeight={700}>
                    View Bills & Payment History
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    Access all your past invoices and transactions
                  </Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" gap="12px">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Stack gap="4px">
                  <Typography variant="h6" fontWeight={700}>
                    Pay Online Instantly
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    Multiple payment methods supported
                  </Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" gap="12px">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Stack gap="4px">
                  <Typography variant="h6" fontWeight={700}>
                    Create & Track Support Tickets
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    Get help faster with priority support
                  </Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" gap="12px">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Stack gap="4px">
                  <Typography variant="h6" fontWeight={700}>
                    Monitor Usage & connectivity
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    Real-time insights into your connection
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            {/* <Button
              sx={{ width: "fit-content" }}
              variant="contained"
              component="a"
              href="https://my.antbd.com/"
            >
              Login to self portal
            </Button> */}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 560,
              mx: "auto",
              position: "relative",
              overflow: "hidden", // 🔥 important
              borderRadius: "32px",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="Frame.png"
              alt="Mission"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
