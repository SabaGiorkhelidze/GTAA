import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import img from '../../assets/logo.png'
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ imgURL }: { imgURL: string[] }) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "95%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const imageUrls = imgURL;
  console.log(imageUrls);

  return (
    <Box
      position={"relative"}
      height={{ base: "100%", md: "400px", lg: "400px" }}
      width={{ base: "100%", md: "70%", lg: "500px" }}
      overflow={"hidden"}
      className="border-2  rounded-lg "
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)} centerMode={true} >
        {imageUrls.map((image, index) => (
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center",
              position: "relative",
            }}
            src={img}
            key={index}
          />
        ))}
      </Slider>
    </Box>
  );
}
