'use client';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
//swiper js
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Good Web Development skills with implementing pixel perfect design",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Nancy Jane",
    job: "Engineer",
    review:
      "Highly recommended , delivery on time and good manner",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Taylor Nathan",
    job: "Athletes",
    review:
      "Good Web Development skills with implementing pixel perfect design",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Jane Dawson",
    job: "Video Editor",
    review:
      "Good Web Development skills with implementing pixel perfect design",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Wilson Will",
    job: "Digital Marketer",
    review:
      "Highly recommended , delivery on time and good manner",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Dakota Jhonson",
    job: "Activist",
    review:
      "Highly recommended , delivery on time and good manner",
  },
];
const Review = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 mx-auto text-center">Reviews</h2>
        {/* slider */}
        <Swiper
            className="h-[350px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                    <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                        <Image 
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority/>
                    
                    {/* name */}
                    <div className="flex flex-col">
                        <CardTitle >
                            {person.name}

                        </CardTitle>
                        <p>{person.job}</p>
                        </div>
                    </div>
                    </CardHeader>
                    <CardDescription className='text-lg text-muted-foreground'>
                      {person.review}  
                    </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
