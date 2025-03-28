import { Box, SxProps, Theme } from "@mui/material";
import { JSX, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ICarousel {
  dots?: boolean;
  infinite?: boolean;
  slidesToScroll?: number;
  slidesToShow?: number;
  arrows?: boolean;
  centerMode?: boolean;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export default function Carousel({
  dots,
  infinite,
  slidesToScroll,
  arrows,
  nextArrow,
  centerMode,
  prevArrow,
  sx,
  children,
  slidesToShow,
}: ICarousel) {
  const mobileType = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerPadding: "40px",
    centerMode: true,
    swipeToSlide: true,
    swipe: true,
    speed: 500,
  };

  const settings = {
    dots: dots || false,
    infinite: infinite || false,
    speed: 500,
    slidesToShow: slidesToShow || 5,
    slidesToScroll: slidesToScroll || 1,
    arrows: arrows || true,
    centerMode: centerMode || false,
    prevArrow,
    nextArrow,
    responsive: [
      {
        breakpoint: 768,
        settings: mobileType, // Corrigido para passar o objeto diretamente
      },
    ],
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <Box
      sx={{
        "& .slick-list": {
          padding: "0 !important",
        },
      }}
    >
      <Box
        component={Slider}
        {...settings}
        ref={sliderRef}
        sx={{
          "& .slick-slide": {
            padding: "0 10px",
          },
          ...sx,
        }}
        data-testid="slider"
      >
        {children}
      </Box>
    </Box>
  );
}
