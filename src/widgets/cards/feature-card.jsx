import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { featuresData, flashSaleData, contactData } from "@/data";
import {  FlashDealCard  } from "@/widgets/cards";




export function FeatureCard() {
  function CountDown(hours,minutes,seconds){
    const [countdown, setCountdown] = useState(0)
    const timerId = useRef()

    useEffect(() => {
      if(countdown === 0){
        reset()
      }     
      }
    )

    useEffect(() => {
      setCountdown(+hours * 3600 + +minutes * 60 + +seconds)
      timerId.current = setInterval(() => {
        setCountdown(prev => prev - 1)        
      }, 1000);
      return () => clearInterval(timerId.current)
    }, [])

    const hour = Math.floor(countdown/3600)
    const minute = Math.floor((countdown % 3600)/60)
    const second = countdown % 60
    console.log(countdown)

    const reset = () => {
      setCountdown(0)
      clearInterval(timerId.current)
    }

    return(
            <div className="grid grid-flow-col gap-1 text-center auto-cols-max ">
          <div className="flex flex-col p-0.5 bg-black bg-gradient-to-br from-discount from-45% text-white shadow-lg rounded-lg">
            <span className="countdown  font-mono text-sm sm:text-xl lg:text-3xl border rounded-lg p-1.5">
              <span style={{"--value":hour}}></span>
            </span>
          </div> 
          <div className="flex flex-col p-0.5 bg-black bg-gradient-to-br from-discount from-45% text-white shadow-lg rounded-lg">
            <span className="countdown font-mono text-sm sm:text-xl lg:text-3xl border rounded-lg p-1.5">
              <span style={{"--value":minute}}></span>
            </span>
          </div> 
          <div className="flex flex-col p-0.5 bg-black bg-gradient-to-br from-discount from-45% text-white shadow-lg rounded-lg">
            <span className="countdown font-mono text-sm sm:text-xl lg:text-3xl border rounded-lg p-1.5">
              <span style={{"--value":second}}></span>
            </span>
          </div>
          </div>
    )

  }
  

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    const scrollStep = 300; // Adjust the scroll speed here
    const scrollInterval = 2000; // Adjust the interval time (in ms) here
    const resetThreshold = 1;

    const scrollRight = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollWidth - scrollContainer.scrollLeft - scrollContainer.clientWidth <= resetThreshold) {
          scrollContainer.scrollLeft = 0;
          
        } else {
          scrollContainer.scrollLeft += scrollStep;
          console.log(scrollContainer.scrollWidth - scrollContainer.scrollLeft - scrollContainer.clientWidth);
        }
      }
    };

    const intervalId = setInterval(scrollRight, scrollInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="rounded-lg  shadow-lg shadow-gray-500/10 bg-orange bg-gradient-to-br from-white " >
      
      <CardBody className=" sm:px-8 text-start">
              <div className="flex sm:flex-nowrap flex-wrap justify-between sm:mt-0 ">
              <Typography
                        variant="h2"
                        className=" font-extrabold font-outline-2 tracking-wide -mt-3 sm:-mt-5 sm:text-2xl lg:text-4xl text-lg"
                        color="black"
                      >
                        F 
                        <span>
                          <img src="/img/flash.png" className="h-8 w-6  sm:h-12 sm:w-10 lg:h-16 lg:w-12 inline-flex sm:mt-4 mt-2"></img>
                        </span>
                        A S H 
                        <span className="ml-5 lg:ml-8">
                          D E A L
                        </span>                   
              </Typography>
              <div className="sm:-mt-1 -mt-2 ml-auto" >
                {CountDown(1,0,10)}
              </div>  
             </div>
             
            
              <div ref={scrollRef}
              className="px-2 py-3 scroll-smooth grid  gap-x-4 gap-y-2  grid-rows-2 grid-flow-col grid-cols-[max-content] overflow-hidden overflow-x-auto sm:overflow-x-hidden whitespace-nowrap snap-x">
            {flashSaleData.map(({ img, name, position, socials }) => (
              <FlashDealCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
