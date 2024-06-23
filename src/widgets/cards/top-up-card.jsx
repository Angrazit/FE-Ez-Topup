import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TopUpCard({ id,img, name, price,isDiscount,discount,selectedId,selectid }) {
  let totalDiscount = 0;
  let total = 0;
  let classplus = '';

  if(id === selectedId){    
    classplus = 'ring ring-orange';
    
  }

  if(isDiscount){
    totalDiscount = (price * discount)/100;
    total = price - totalDiscount;
  } else {
    total = price
  }
  
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0
  }).format(total);

  const Price = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0
  }).format(price);

  return (
  <Card color="transparent" shadow={false} className={`bg-white overflow-hidden hover:ring bg-cover hover:ring-orange  group text-center shadow-lg transform transition duration-300 whitespace-nowrap ${classplus}`}>
      <div className="grid grid-cols-5  md:w-72 w-60 items-center ml-2 ">
        <div className="md:ml-1 ">

        <Avatar
        src={img}
        alt={name}
        size="xl"
        variant="rounded"
        className="h-12 sm:h-12 md:h-14 w-full shadow-gray-500/25  "
      />

        </div>
        
        
        {isDiscount === true ? (
          <div className="col-span-3 rounded-b-lg p-2 px-3 flex flex-col max-h-[85px] ">
        <Typography variant="h6" color="black" className="text-left text-base font-extrabold">
          {name}
          
        </Typography>
        {price && (
          <div>
          <Typography className="font-medium text-left text-discount ">
           Rp {formattedPrice },-
          </Typography>
          <Typography color="black" className="font-normal text-left text-gray-700 text-sm line-through">
            Rp {Price},-
          </Typography>
          
          </div>          
        )}
          
          </div>
        ):(
          <div className="col-span-3 rounded-b-lg p-4 px-3 min-h-[85px] h-full items-center">
        <Typography variant="h6" color="black" className="text-left text-base font-extrabold ">
          {name}
        </Typography>
        {price && (
          <Typography color="black" className="font-normal text-left ">
            Rp {formattedPrice },-
          </Typography>
        )}
          </div>
        )}
        
        
      </div>
      {id === selectedId && (
        <Card variant="rounded" className="absolute bg-orange -right-1.5 -top-1.5 p-1 pt-1.5 pr-2 overflow-hidden">
        <i className="fas fa-check text-white text-xs" />
        </Card>
      )}
        
          
      {/* <div className="absolute -right-6 -bottom-1.5 sm:-right-7 sm:mr-0.5 mr-1 sm:-bottom-2 ">
        <img src="/img/disco.png" className="h-8 w-16 sm:h-10 sm:w-20">
        </img>
      </div>
      <div className="absolute right-0.5 bottom-0.5 sm:right-1 sm:bottom-0 text-white text-xs sm:text-base">
        70%
      </div> */}

      
      
    </Card>
  );
}

TopUpCard.defaultProps = {
  price: "",
  socials: null,
};

TopUpCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  discount: PropTypes.number,
  selectedId: PropTypes.number,
  selectid: PropTypes.number,
  socials: PropTypes.node,
};

TopUpCard.displayName = "/src/widgets/layout/top-up-card.jsx";

export default TopUpCard;
