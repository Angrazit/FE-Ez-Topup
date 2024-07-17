import React from "react";
import axios from 'axios';
import {
  Card,
  Carousel,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, PopularCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, gameData, populerData } from "@/data";



export function Home() {
  

  return (
    <>
    
      <div className=" ">
        <div className="px-3 lg:px-8 bg-gradient-to-b from-old-blue from-5% to-old-white">
          <div className="container relative mx-auto pt-5 ">
                <div className=" mr-auto ml-auto text-center ">
                <Carousel
                  autoplay loop transition={{ type: "spring" ,duration: 0.4}}
                  autoplayDelay={4000}
                  className="rounded-xl h-[190px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[490px] 2xl:h-[520px] shadow-lg"
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
                >
                  <img
                    src="/img/Carousel_1.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/img/Carousel_2.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/img/Carousel_3.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                </Carousel>
                <div className="lg:mt-10 md:mt-8  mt-5">
                
                  {featuresData.map(({ color, title, icon, description }) => (
                    <FeatureCard
                      key={title}
                      color={color}
                      title={title}
                      icon={React.createElement(icon, {
                        className: "w-5 h-5 text-white",
                      })}
                      description={description}
                    />
                  ))}
                  
                </div>
                </div>
          </div>
        </div>
        <section className="bg-white px-3 lg:px-8">
              <div className="container mx-auto ">
              <div className="mt-10   ">
                <div className="flex flex-wrap items-center mb-5">
                  <div className="mb-8 sm:mb-6 inline-flex h-12 w-12 items-center justify-center  rounded-full text-center ">
                    <img src="/img/icon-fire.png" className=""></img>
                  </div>
                <div className="   pl-1 lg:w-5/12 w-10/12">
                  <Typography
                    variant="h4"
                    className=" font-bold text-orange font-outline-2 tracking-wide "
                    color="blue-gray"
                  >
                    POPULAR SEKARANG!
                  </Typography>
                  <Typography className="-ml-1 sm:-ml-3 text-sm  sm:text-base font-normal text-blue-gray-600 ">
                  Berikut adalah produk yang sedang populer saat ini.
              </Typography>
              
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {populerData.map(({ id,img, name,developer,url }) => (
                  <PopularCard
                    key={id}
                    id={id}
                    img={img}
                    name={name}
                    developer={developer}
                    url={url}                    
                  />
                ))}
              </div>

              </div>

            </div>
        </section>

            <section className="  px-4 pb-10 ">
            <div className="container mx-auto">


            <div className="mt-10 ">
            <div className="flex flex-nowrap items-center mb-5  overflow-x-auto whitespace-nowrap">
              <Button className="bg-orange mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              {/* <Button className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              <Button className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              <Button type="button" className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button> */}
              
            </div>
            <div className=" pt-5 pb-5 grid gap-2 gap-y-3 md:gap-3 md:gap-y-4 grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {gameData.map(({ img, name,url }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                url={url}
              />
            ))}
          </div>

          </div>

        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
      </div>
    </>
  );
}

export default Home;