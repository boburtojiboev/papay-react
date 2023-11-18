import React from "react";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src="icons/line_group.svg"
        style={{ position: "absolute", left: "6%" }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"/restaurant/burak.jpeg"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: "2" }}>
                  Texas De Brazil Restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +990999059949
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    bgcolor: "Background.level1",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              {/* ########### 2nd CARD */}
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"/restaurant/burak.jpeg"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: "2" }}>
                  Texas De Brazil Restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +990999059949
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    bgcolor: "Background.level1",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              {/* ######### 3rd CARD */}
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"/restaurant/burak.jpeg"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: "2" }}>
                  Texas De Brazil Restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +990999059949
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    bgcolor: "Background.level1",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              {/* *********** 4rd CARD */}
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"/restaurant/burak.jpeg"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal phtography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: "2" }}>
                  Texas De Brazil Restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-md" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +990999059949
                  </Link>
                </Typography>
                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    bgcolor: "Background.level1",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontSize: "md",
                      color: "neutral.300",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "white" }}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}