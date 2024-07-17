import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, url }) {
  const notchStyle = {
    overflow: 'visible',
    clipPath: 'polygon(0 15%,15% 0,100% 0,100% 85%,85% 100%,0% 100%)'
  };

  return (
    <a href={`/top-up/${url}`}>
      <Card shadow={false} className="hover:bg-orange p-0.5 md:p-1 sm:hover:scale-110 hover:scale-105 rounded-none group text-center hover:outline-8  transform transition duration-300" style={notchStyle}>
      <Card shadow={false} className=" p-0.5 md:p-1  rounded-none " style={notchStyle}>
        <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="square"
        className="h-full w-full bg-white shadow-lg" 
        style={notchStyle}
        />
      </Card>
      
      {/* <div className=" grid grid-cols-2   rounded-b-lg">
      <Typography variant="h5" color="white" className="text-left  p-5">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-grey text-right p-5">
          {position}
        </Typography>
      )}
      </div> */}
      
    </Card>
    </a>
    
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
