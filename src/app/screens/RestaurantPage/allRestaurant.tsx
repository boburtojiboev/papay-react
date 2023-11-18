import React from "react";
import {
  Card,
  CardOverflow,
  Typography,
  IconButton,
  AspectRatio,
  Link,
  CssVarsProvider,
} from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Call, Favorite, LocationOnRounded, Search } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const order_list = Array.from(Array(8).keys());
console.log(order_list);

export function AllRestaurants() {
  return (
  <div className="all_restaurant">
    <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className={"fit_search_box"}>
            <Box className={"fit_box"}>
              <a>Zo'r</a>
              <a>Mashhur</a>
              <a>Trendagi</a>
              <a>Yangi</a>
            </Box>

            <Box className={"search_big_box"}>
              <form className={"search_form"} action="">
                <input
                  type={"search"}
                  className={"search_input"}
                  name={"resSearch"}
                  placeholder="qidiruv"
                />
                <Button
                  className="button_search"
                  variant="contained"
                  endIcon={<Search />}
                >
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>
          <Stack className={"all_res_box"}>
            <CssVarsProvider>
              {order_list.map((ele) => {
                return (
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={"1"}>
                        <img
                          src="/restaurant/burak.jpeg"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>

                      <IconButton
                        aria-label="Like animal phtography"
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
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      Texas De Brazil Restaurant
                    </Typography>
                    <Typography textColor="neutral.300">
                      <Link
                        href=""
                        startDecorator={<LocationOnRounded />}
                        textColor={"rgba(56, 55, 55, 0.90);"}
                      >
                        Tashkent, Yunus Abad 4-1
                      </Link>
                    </Typography>
                    <Typography textColor="neutral.300">
                      <Link
                        href=""
                        startDecorator={<Call />}
                        textColor={"rgba(56, 55, 55, 0.90);"}
                      >
                        +998999059949
                      </Link>
                    </Typography>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "rgba(56, 55, 55, 0.90);",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        10000{" "}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                      <Typography
                      level="body-sm"
                        sx={{
                          fontSize: "md",
                          color: "text.secondary",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>5000</div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>

          <Stack className="bottom_box">
            <img
              className="line_img_left"
              src={"/icons/line_group.svg"}
              alt=""
            />
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />

            <img
              className="line_img_right"
              src={"/icons/line_group.svg"}
              alt=""
            />
          </Stack>
        </Stack>
      </Container>
  </div>
  );
}
