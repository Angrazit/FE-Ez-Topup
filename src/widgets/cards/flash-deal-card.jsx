import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function FlashDealCard({ img, name, position, socials }) {
  return (
    <Card color="transparent" shadow={false} className="bg-old-blue snap-start bg-cover group text-center shadow-lg sm:hover:scale-105  hover:scale-105  transform transition duration-300 whitespace-nowrap">
      <div className="grid grid-cols-5  md:w-72 w-60 items-center ml-2">
        <div className="md:ml-1 ">
        <Card className="">
        <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="rounded"
        className="h-12 sm:h-12 md:h-14 w-full shadow-gray-500/25  grayscale group-hover:grayscale-0 "
      />
        </Card>
        </div>
        
        <div className="col-span-3 rounded-b-lg p-2 md:p-4">
        <Typography variant="" color="white" className="text-left  text-xs">
          {name}
        </Typography>
        {position && (
          <Typography className="font-bold text-grey text-left ">
            {position}
          </Typography>
        )}
        </div>
      </div>
      
      
      
    </Card>
  );
}

FlashDealCard.defaultProps = {
  position: "",
  socials: null,
};

FlashDealCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

FlashDealCard.displayName = "/src/widgets/layout/flash-deal-card.jsx";

export default FlashDealCard;
