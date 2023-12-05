"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//swiper react

import { Swiper, SwiperSlide } from "swiper/react";
//swiper js
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
//component
import ProjectCard from "@/components/ProjectCard";
const projectData = [
  {
    image: "/work/eventguru.png",
    category: "NextJS",
    name: "Event Guru",
    description:
      "EventGuru aims to revolutionize event management, providing a user-friendly and feature-rich platform.",
    link: "https://event-management-nu.vercel.app/",
    github: "https://github.com/Sakib360360/event-management",
  },
  {
    image: "/work/langocamp.png",
    category: "fullstack",
    name: "LangoCamp",
    description:
      "LangoCamp offers an exciting array of foreign language courses.",
    link: "https://lango-camp.web.app/",
    github: "https://github.com/sabbirqazi/language-camp-client",
  },
  {
    image: "/work/toybounty.png",
    category: "ReactJS",
    name: "Event Guru",
    description:
      "ToyBounty is a user-friendly online toy marketplace offering a diverse range of toys." ,
    link: "https://learning-toys-marketplace.web.app/",
    github: "https://github.com/sabbirqazi/toy-bounty-client",
  },

];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[495px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* first 4  */}
            {projectData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
