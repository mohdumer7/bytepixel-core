"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import {Courses} from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import BookDemo from "./components/BookDemo/BookDemo";
import Footer from "./components/Footer";
import WhySection from "@/app/components/Route/WhySection";
import {OurWork} from "@/app/components/Route/OurWork";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Bytepixel"
        description="Bytepixel is a platform for students to learn and get help from teachers"
        keywords="Prograaming,Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <WhySection/>
      <Courses/>
        <OurWork />
      <Reviews />
      <FAQ />
        <BookDemo/>
      <Footer />
    </div>
  );
};

export default Page;
