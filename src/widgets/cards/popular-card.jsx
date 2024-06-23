import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function PopularCard({ id,img, name, developer,url }) {
  console.log(id)

  return (
    <a href={`/top-up/${url}`}>
      <Card color="transparent" shadow={false} className=" bg-old-blue bg-gradient-to-br hover:bg-orange hover:bg-gradient-to-br from-grey group text-center shadow-lg  hover:scale-105  transform transition duration-300">
      <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="rounded"
        className="h-28 w-full  shadow-gray-500/25 rounded-b-none grayscale group-hover:grayscale-0"
      />
      <div className=" grid grid-cols-2   rounded-b-lg">
      <Typography variant="h5" color="white" className="text-left  p-3 px-5">
        {name}
      </Typography>
      {developer && (
        <Typography className="font-bold text-grey text-right p-3 px-5">
          {developer}
        </Typography>
      )}
      </div>
      
    </Card>
    </a>
    
  );
}

PopularCard.defaultProps = {
  developer: "",
  socials: null,
};

PopularCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string,
  socials: PropTypes.node,
};

PopularCard.displayName = "/src/widgets/layout/popular-card.jsx";

export default PopularCard;
