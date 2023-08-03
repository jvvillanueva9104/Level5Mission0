import React from "react";
import "./Reviews.css";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Reviews = () => {
  return (
    <Carousel className="h-[700px] w-full">
      <div className="relative h-full w-full ">
        {/* <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt=""
          className="h-full w-full object-cover reviewImg"
        /> */}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/90">
          <div className="w-3/4 text-center md:w-2/4 reviewBox">
            <img className="reviewPhotos" src="mj.jpg" alt="" />
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Michael Jordan
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              After I quit basketball and baseball, I wanna try to skate but
              don't know where to start. Luckily, I found OllieZone and the rest
              was history. The shops here are all premium and sells the best
              skateboarding gears ever!
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        {/* <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt=""
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/80">
          <div className="w-3/4 text-center md:w-2/4 reviewBox">
            <img className="reviewPhotos" src="eminem.jpg" alt="" />
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Eminem
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Yo, listen up, skaters in the place, I got a review that'll pick
              up the pace, For this skateboard site, let's break it down, Where
              the sickest skate gears in the town are found.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        {/* <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt=""
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/90">
          <div className="w-3/4 text-center md:w-2/4 reviewBox">
            <img className="reviewPhotos" src="TonyHawk.jpg" alt="" />
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Tony Hawk
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              I recently came across this skateboard listing website, and I must
              say, I was thoroughly impressed with the range of products they
              offer. Whether you're a seasoned skater or just getting started,
              this site has something for everyone.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Reviews;
