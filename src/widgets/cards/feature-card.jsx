import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { featuresData, teamData, contactData } from "@/data";
import {  FlashDealCard,  } from "@/widgets/cards";


export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-lg  shadow-lg shadow-gray-500/10 bg-orange bg-gradient-to-br from-white " >
      <CardBody className="sm:px-8 text-start">
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
              </Typography>
              <div className="mt-3 sm:grid grid-cols-2 gap-2 flex flex-nowrap sm:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  overflow-x-auto overflow-hidden  sm:overflow-visible">
            {teamData.map(({ img, name, position, socials }) => (
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
