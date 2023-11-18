import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);


export function Events() {
    const events_list = [
        {
          title: "Boyin foodga marhamat",
          desc: "Yangicha uslubda, yangicha ta'm",
          author: "Abdurahmon Mufid",
          date: "2023/03/05",
          location: "Tashkent, Nurafsho ko'cha",
          img: "/restaurant/burak.jpeg",
        },
        {
          title: "Katta chegirma endi Belisommda",
          desc: "Faqat 25~31-iyul kunlari Pitsa yegani tashrif buyuring!",
          author: "BellisommodUz",
          date: "2022/10/12",
          location: "Tashkent, Chilonzor",
          img: "/restaurant/belissimo.png",
        },
        {
          title: "Yangi ta'mni ta'tib ko'rmoqchimisiz!?",
          desc: "Halol va mazzali steaklar, azizlar!",
          author: "Chicken House",
          date: "2023/10/17",
          location: "Tashkent, Chilonzor",
          img: "/restaurant/pizzar.jpeg",
        },
        {
          title: "O'zgacha Steakhouse!",
          desc: "Yangicha uslubda, yangicha ta'm",
          author: "Nusrat",
          date: "2023/08/12",
          location: "Tashkent, Yangi Toshkent",
          img: "/restaurant/nusrat.jpeg",
        },
      ];
    
    return (
        <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_txt">
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className="prev_next_frame">
            <img
              src={"/icons/left-arrow.svg"}
              className={"swiper-button-prev"}
              alt=""
            />
            <div className="dot_frame_pagination swiper-pagination"></div>
            <img
              src={"/icons/left-arrow.svg"}
              className={"swiper-button-next"}
              style={{ transform: "rotate(-180deg)" }}
              alt=""
            />
          </Box>
          <Swiper
            className={"events_info swiper_wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className="events_img">
                    <img src={value.img} alt="" className={"events_img "} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <div>
                            {" "}
                            <strong style={{ width: "100%" }}>
                              {value.title}
                            </strong>
                          </div>

                          <div className="event_organizator">
                            <img
                              src={"/icons/speaker.svg"}
                              alt=""
                              style={{
                                width: "20px",
                                height: "23px",
                                marginRight: "10px",
                              }}
                            />
                            <p className={"spec_txt_author"}>{value.author}</p>
                          </div>
                        </div>
                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/calendar.svg"}
                              alt=""
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/location.svg"}
                              alt=""
                              style={{
                                marginRight: "10px",
                                width: "15px",
                                height: "15px",
                                color: " #4f547b",
                              }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
      </div>
    );
}