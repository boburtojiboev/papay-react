import { Favorite } from "@mui/icons-material";
import { CardOverflow, IconButton } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Box, Container, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import React, { useRef } from "react";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory } from "react-router-dom";
// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";

// REDUX SELECTOR
const topRestaurantsRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function TopRestaurants() {
  // INITIALIZATIONS
  const history = useHistory();
  const { topRestaurants } = useSelector(topRestaurantsRetriever);
  console.log("topRestaurants:::", topRestaurants);
  const refs: any = useRef([]);

  // HANDLERS//
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  };

  const targetLikeTop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
        });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeTop, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">TOP Restauranlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
            {topRestaurants.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    sx={{
                      minHeight: 430,
                      minWidth: 325,
                      mr: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <CardCover>
                      <img src={image_path} loading="lazy" alt="" />
                    </CardCover>
                    <CardCover
                      sx={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                      }}
                    />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Typography level="h2" fontSize="lg" textColor="#fff">
                        {ele.mb_nick}
                      </Typography>
                      <Typography
                        startDecorator={<LocationOnRounded />}
                        textColor="neutral.300"
                      >
                        {ele.mb_address}
                      </Typography>
                    </CardContent>

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
                          bottom: 45,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeTop(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          fontWeight: "md",
                          color: "neutral.300",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {ele.mb_views}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
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
                        <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {ele.mb_likes}
                        </div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
