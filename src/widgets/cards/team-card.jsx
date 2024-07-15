import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card color="transparent" shadow={false} className="bg-orange group text-center shadow-lg sm:hover:scale-110  hover:scale-105  transform transition duration-300">
      <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="rounded"
        className="h-full w-full  shadow-gray-500/25 rounded-b-none grayscale group-hover:grayscale-0"
      />
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
