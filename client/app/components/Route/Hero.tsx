'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, {FC, useEffect, useRef, useState} from "react";
import {FlipWords} from "@/app/components/ui/flip-words";
import {GridBackground} from "@/app/components/ui/GridBackground";
type Props = {};

import { DotLottiePlayer } from '@dotlottie/react-player';

const Hero: FC<Props> = (props) => {

const words = ["Builds","Programs","Creates","Grows","Leanrs","Plays","Dreams","Imagines","Explores"];
  return (
      <>
          <GridBackground>
              <DotLottiePlayer
                  src="/animations/robot.lottie"
                  autoplay
                  loop
                  className="absolute -top-[180%] left-[10%] h-44 rotate-12"
              >
              </DotLottiePlayer>
              <DotLottiePlayer
                  src="/animations/laptop.lottie"
                  autoplay
                  loop
                  className="absolute top-[140%] left-[40%] h-96"
              >
              </DotLottiePlayer>
              <DotLottiePlayer
                  src="/animations/spacebot.lottie"
                  autoplay
                  loop
                  className="absolute -top-[90%] right-[10%] h-56"
              >
              </DotLottiePlayer>
              <div className="text-6xl w-full font-normal text-neutral-600 dark:text-purple-400">
                  A place where Your Kid
                  <FlipWords words={words}/> <br/>

              </div>
          </GridBackground>
      </>
  );
};

export default Hero;
