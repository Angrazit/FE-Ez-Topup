import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function FlashDealCard({ id,img, name, nominal,discount,url, socials }) {
  return (
    <a href={`/top-up/${url}?selected=${id}`}>
      <Card color="transparent" shadow={false} className=" bg-old-blue snap-start rounded-br-none bg-cover group text-center shadow-lg border border-transparent transform hover:ring hover:ring-red-500 transition duration-300 whitespace-nowrap ">
      <div className="grid grid-cols-5 w-60 md:max-w-72 md:w-72 max-w-60 items-center ml-2">
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
        {name && (
          <Typography className="font-bold text-grey text-left ">
            {nominal}
          </Typography>
        )}
        <Typography color="white" className="text-left  text-xs">
          {name}
        </Typography>
        
        </div>
      </div>
      <div className="absolute -right-6 -bottom-1.5 sm:-right-7 sm:mr-0.5 mr-1 sm:-bottom-2 ">
        <img src="/img/disco.png" className="h-8 w-16 sm:h-10 sm:w-20">
        </img>
      </div>
      <div className="absolute right-0.5 bottom-0.5 sm:right-1 sm:bottom-0 text-white text-xs sm:text-base">
        {discount}%
      </div>

      
      
    </Card>
    </a>
    
  );
}

FlashDealCard.defaultProps = {
  nominal: "",
  socials: null,
};

FlashDealCard.propTypes = {
  id: PropTypes.number,
  discount: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nominal: PropTypes.string,
  socials: PropTypes.node,
};

FlashDealCard.displayName = "/src/widgets/layout/flash-deal-card.jsx";

export default FlashDealCard;
