import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function BannerTopUp({ id,img, name, developer,desc }) {
  return (
    <Card className="sm:mx-0  w-full  rounded-xl flex flex-wrap  bg-[url('/img/background-4.jpg')] bg-cover shadow-lg">
      <div className="absolute -top-32 h-full w-full bg-cover bg-center bg-gradient-to-b from-old-blue/30" />
      
          <img
                  src={img}
                  alt="image 2"
                  className="h-[140px] sm:h-[170px] md:h-[220px] lg:h-[270px] xl:h-[300px] 2xl:h-[350px] w-full object-cover rounded-xl px-2 py-1.5 rounded-b-none"
                />
                <section className="w-full mx-auto relative ">
        <div className="container mx-auto   flex w-full lg:px-16 md:px-12 px-8 min-w-0 flex-col break-words ">
      <div className=" flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start 2xl:pb-10 lg:pb-10 pb-2">
                <div className="2xl:-mt-28 lg:-mt-20 sm:-mt-16 md:-mt-20 2xl:w-56 lg:w-48 md:w-36 sm:w-32 w-28 -mt-14">
                <Card className="rounded-lg">
                <Avatar
                    src="/img/team-4.png"
                    alt="Profile picture"
                    variant="rounded"
                    className="h-full w-full lg:p-2 p-1 bg-orange/40"
                  />
                </Card>
                  
                </div>
                <div className="flex flex-col lg:mt-2 lg:gap-1">
                  <Typography variant="h3" color="black" className="font-extrabold lg:text-3xl sm:text-2xl text-lg capitalize">
                    {name}
                  </Typography>
                  <div className="hidden lg:flex lg:flex-row lg:gap-2">
                  {desc.map(({ info,color }) => (
                    <Card className={`bg-${color} text-white px-2`} >
                      <Typography variant="h6">
                      {info}
                      </Typography>                      
                    </Card>
                  ))}
                  </div>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal sm:text-lg text-sm">{developer}</Typography>
                </div>
              </div>
              <div className="lg:hidden flex flex-row gap-2 pb-3 pt-1">
              {desc.map(({ info,color }) => (
                    <Card className={`bg-${color} text-white px-2`} >
                      <Typography variant="h6" className="leading-4 py-1">
                      {info}
                      </Typography>                      
                    </Card>
                  ))}
              </div>
              
            </div>
            </div>
          </section>
        </Card>
  );
  
}

BannerTopUp.defaultProps = {
  developer: "",
  desc: null,
};

BannerTopUp.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string,
  
};

BannerTopUp.displayName = "/src/widgets/layout/banner-top-up.jsx";

export default BannerTopUp;
