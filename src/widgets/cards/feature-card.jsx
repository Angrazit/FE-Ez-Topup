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

    // useEffect(() => {
    //   reset()
    // }
    // )

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

    // const reset = (): void => {
    //   setCountdown(0)
    // }

    return(
      <span className="ml-5 countdown">
      <span style={{"--value":hour}}></span>:
      <span style={{"--value":minute}}></span>:
      <span style={{"--value":second}}></span>
      </span>
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
              <div className="flex">
              <Typography
                        variant="h2"
                        className=" font-extrabold font-outline-2 tracking-wide -mt-5 text-2xl lg:text-4xl"
                        color="black"
                      >
                        F 
                        <span>
                          <img src="/img/flash.png" className="h-12 w-10 lg:h-16 lg:w-12 inline-flex mt-4"></img>
                        </span>
                        A S H 
                        <span className="ml-5 lg:ml-8">
                          D E A L
                        </span>
                        {CountDown(2,1,62)}
              </Typography>
                      
                     
                      
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
