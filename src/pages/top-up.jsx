import React, { useEffect,useState } from "react";
import { TopUpCard, BannerTopUp} from "@/widgets/cards";
import { useParams, Navigate,useLocation } from 'react-router-dom';
import { topUpData,metodePembayaranData,gameData } from "@/data";
import { Avatar, Typography, Button,Card ,Input, IconButton, typography} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


export function TopUp() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const { gameName } = useParams(); // Retrieve the gameName parameter from the URL
  const query = useQuery();
  const Game = gameData.find(game => game.url === gameName);
  const topup = topUpData.filter(prep => prep.gameId === Game.id);
  const [effectEnabled, setEffectEnabled] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  let total,totalDiscount;

  useEffect(() => {
    if (effectEnabled){
      const selectid = query.get('selected');
    if (selectid) {
      // Assuming you have a way to map the 'selected' query parameter to the corresponding card data
      const selectedCard = topUpData.find(card => card.id == selectid);
      console.log(selectedCard);
      if (selectedCard) {
        const { price, isDiscount, discount, id } = selectedCard;
        handleCardClick(price, isDiscount, discount, id);
      }
    }
    }
    
  }, [query]);

  const handleCardClick = (price,isDiscount,discount,id) => {
    setEffectEnabled(false);
    setSelectedId(id);
    
    if(isDiscount){
      totalDiscount = (price * discount)/100;
      total = price - totalDiscount;
    } else {
      total = price
    }
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(total);
    setSelectedPrice(formattedPrice)
    
  };

  if (!Game) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="flex flex-wrap bg-gradient-to-b from-old-blue/100  to-white py-5 justify-center">
      {/* <section className="relative block h-[60vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />        
      </section> */}
      <div className="container mx-1">
      {Game && (
        <BannerTopUp
          key={Game.id}
          id={Game.id}
          name={Game.name}
          img={Game.img}
          desc={Game.desc}
          developer={Game.developer}
        />
      )}
      
      {/* <Card className="sm:mx-0  w-full  rounded-xl flex flex-wrap  bg-[url('/img/background-4.jpg')] bg-cover shadow-lg">
      <div className="absolute -top-32 h-full w-full bg-cover bg-center bg-gradient-to-b from-old-blue/30" />
      
          <img
                  src="/img/Carousel_2.jpg"
                  alt="image 2"
                  className="h-[140px] sm:h-[190px] md:h-[250px] lg:h-[310px] xl:h-[350px] 2xl:h-[420px] w-full object-cover rounded-xl px-2 py-1.5 rounded-b-none"
                />
                <section className="w-full mx-auto relative ">
        <div className="container mx-auto   flex w-full lg:px-20 md:px-16 px-10 min-w-0 flex-col break-words ">
      <div className=" flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start 2xl:pb-14 lg:pb-10 md:pb-8 pb-4">
                <div className="2xl:-mt-32 lg:-mt-24 sm:-mt-16 md:-mt-20 2xl:w-56 lg:w-44 md:w-32 sm:w-28 w-24 -mt-14">
                <Card className="rounded-lg">
                <Avatar
                    src="/img/team-4.png"
                    alt="Profile picture"
                    variant="rounded"
                    className="h-full w-full lg:p-2 p-1 bg-orange/40"
                  />
                </Card>
                  
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Jenna Stones
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">jena@mail.com</Typography>
                </div>
              </div>
            </div>
            </div>
          </section>
        </Card> */}
        <form className="sm:px-0 px-1  grid gap-4 grid-cols-1 lg:grid-cols-3 mt-4 ">
        <div className="hidden lg:col-span-2 lg:grid lg:grid-cols-1">
          <div>
          <div className="grid grid-cols-2 gap-2">
                  {topup.map(({ id,img, name, price,isDiscount,discount }) => (
                    <button onClick={() => handleCardClick(price,isDiscount,discount,id)} type="button" >
                    <TopUpCard
                      key={id}
                      id={id}
                      img={img}
                      name={name}
                      price={price}
                      isDiscount={isDiscount}
                      discount={discount}
                      selectedId={selectedId}                  
                    />  
                    </button>
                                 
                  ))}

            </div>
          </div>
            
        </div>
        <div className="col-span-1 ">
        
            <Card className="p-4 ">
                  <Typography variant="h5" color="black" className="font-extrabold border-b pb-1">
                    Informasi Pesanan
                  </Typography>
                  <Typography variant="small" className="font-medium py-2">
                    Masukkan User ID
                  </Typography>
                  <div className="mb-2 ">
              <Input variant="outlined" placeholder="User ID"  className=" focus:!border-2 focus:!border-orange transition-none !border-gray-400" labelProps={{
          className: "hidden",
        }}
        containerProps={{
          className: "min-w-0",
        }} /> 
            </div>
            <Typography variant="small" className="font-medium py-2">
                    Masukkan Zone ID
                  </Typography>
                  <div className="mb-2 ">
              <Input variant="outlined" type="number" placeholder="Zone ID" className=" focus:!border-2 focus:!border-orange transition-none !border-gray-400" labelProps={{
          className: "hidden",
        }}
        containerProps={{
          className: "min-w-0",
        }} /> 
            </div>
                  <Card className="p-4 bg-grey mt-2">
                    <div className="flex justify-between mb-2">
                    <Typography variant="small" className="font-medium">
                      No. WhatsApp
                    </Typography>
                    <Typography variant="small" className="font-medium text-discount ">
                      Required
                    </Typography>
                    </div>
                    <div className=" ">
              <Input variant="outlined" type="number"  placeholder="No. Whatsapp" className="bg-white focus:!border-2 focus:!border-orange transition-none !border-gray-400" labelProps={{
          className: "hidden",
        }}
        containerProps={{
          className: "min-w-0",
        }} /> 
            </div>

                    
            </Card>
            

            </Card>
            <div className="lg:hidden lg:col-span-2 mt-4 lg:grid-cols-1">
             <div>
          <div className="grid grid-cols-2 gap-2">
                  {topup.map(({ id,img, name, price,isDiscount,discount }) => (
                    <button onClick={() => handleCardClick(price,isDiscount,discount,id)} type="button" >
                    <TopUpCard
                      key={id}
                      id={id}
                      img={img}
                      name={name}
                      price={price}
                      isDiscount={isDiscount}
                      discount={discount}     
                      selectedId={selectedId}               
                    />  
                    </button>
                                 
                  ))}

            </div>
            </div>
            </div>
             <Card className="p-4 mt-4">
                  <Typography variant="h5" color="black" className="font-extrabold border-b pb-1">
                    Pilih Pembayaran
                  </Typography>
                  {metodePembayaranData.map(({ img, name, position, socials }) => (
                    <Card key={name} className="p-4 border mt-4 hover:ring bg-cover hover:ring-orange flex-row items-center justify-between">
                      <div className="">
                      <Typography color="black" className="font-normal xl:text-lg  text-left ">
                      {name}
                      </Typography>
                      {socials && (<div className="flex items-center gap-2 ">
                      {socials.map(({ color, name, gambar, etc }) => (
                        <div key={name} className="items-center ">
                        {gambar ? (
                          <div>
                          {name === "qris" ?(
                            <img src={gambar} className="w-28 h-4"></img>
                          ):(
                            <img src={gambar} className="w-10 max-h-5"></img>
                          )}                            
                          </div>
                        ):(
                          <i className={`fa-brands text-sm fa-${name}`} />
                        )}
                        {etc && (
                          <span >
                          {etc}
                          </span>    
                        )}
                        </div>                              
                      ))}
                      </div>)}
                      </div>
                      <div className="">
                        <Typography className="text-center text-xs font-bold">
                        {selectedPrice === null ? (
                          <span></span>
                        ):(
                        `Rp ${selectedPrice},-`
                        )}
                        </Typography>
                      </div>                  
                      
                  </Card>
                  ))}
                  
                  {/* <Card className="p-4 bg-grey mt-4">
                  <Typography color="black" className="font-normal text-lg text-left ">
                  Qris
                  </Typography>
                  </Card>
                  <Card className="p-4 bg-grey mt-4">
                  <Typography color="black" className="font-normal text-lg text-left ">
                  Qris
                  </Typography>
                  </Card> */}
                  
                  


            </Card>
        </div>     

      </form>
      </div>
      </div>
      
      
      
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default TopUp;
