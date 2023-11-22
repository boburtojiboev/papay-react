import React from "react";
import { Box, Button, Checkbox, Container, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { RemoveRedEye } from "@mui/icons-material";
import Marginer from "../../components/marginer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, FreeMode } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const chosen_list = Array.from(Array(4).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele, index) => {
              const image_path = `/others/sandvich.jpeg`;
              return (
                <SwiperSlide key={index}>
                  <img
                    src={image_path}
                    alt=""
                    style={{ width: "100%", height: "452px" }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className=" bottom_wrap"
            slidesPerView={3.3}
            centeredSlides={false}
            spaceBetween={20}
          >
            {Array.from(Array(5).keys()).map((ele, index) => {
              const image_path = `/others/sandvich.jpeg`;
              return (
                <SwiperSlide
                  className="bottom_img"
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <img src={image_path} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_txt">Sweet Sandvich</strong>
            <span className="resto_name">Texas De Brazil</span>
            <Box className="rating_box">
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <div className="evaluation_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={true}
                  />
                  <span>98 ta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEye sx={{ mr: "10px" }} />
                  <span>1000 ta</span>
                </div>
              </div>
            </Box>
            <p className="dish_desc_info">Juda mazali sendvich</p>
            <div className="dish_desc_bottom">
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#000"
              />
              <div className="dish_price_box">
                <span>Narxi:</span>
                <span>$11</span>
              </div>
              <div className="button_box">
                <Button variant="contained">Savatga qo'shish</Button>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
