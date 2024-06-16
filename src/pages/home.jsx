import React from "react";
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
import { FeatureCard, TeamCard, } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";



export function Home() {
  return (
    <>
    
      <div className=" ">
        <div className="px-3 lg:px-8 bg-gradient-to-t from-white  to-old-blue">
        <div className="container relative mx-auto pt-5 ">
              <div className=" mr-auto ml-auto text-center ">
              <Carousel
                autoplay loop transition={{ type: "spring" ,duration: 0.4}}
                autoplayDelay={4000}
                className="rounded-xl h-[180px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[490px] 2xl:h-[500px]"
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
              <div className=" grid grid-cols-1 gap-10 gap-x-10 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
                {teamData.map(({ img, name, position, socials }) => (
                  <TeamCard
                    key={name}
                    img={img}
                    name={name}
                    position={position}
                    socials={
                      <div className="flex items-center gap-2">
                        {socials.map(({ color, name }) => (
                          <IconButton key={name} color={color} variant="text">
                            <i className={`fa-brands text-xl fa-${name}`} />
                          </IconButton>
                        ))}
                      </div>
                    }
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
              <Button className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              <Button className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              <Button className="bg-old-blue mr-4" size="sm">
                <Typography variant="small" color="white" className="text-left font-medium ">
                  Top up Games
                </Typography>
              </Button>
              
            </div>
            <div className="pt-5 grid grid-cols-1 gap-10 gap-x-10 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>

          </div>

        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
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
