import { Avatar, Typography, Button, Card, Input } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[500px] mt-10 mb-10">
      
      <div className="w-5/5 h-full hidden lg:block">
        <Card className="mr-10 rounded bg-[url('/img/Carousel_2.jpg')] h-[520px] w-full object-cover rounded-r-full">
        <h1 className="text-white ml-28 mt-36 font-bold text-2xl">L A C A K P E S A N A N</h1>
        <h1 className="text-white mt-5 ml-28 font-extrabold text-4xl">Lacak pesanan kamu hanya</h1>
        <h1 className="text-white ml-28 font-extrabold text-4xl">dengan nomor WhatsApp</h1>
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
          <div className="mb-8 ml-28 mt-9 w-3/4 flex items-center space-x-2">
            <div className="flex-1">
            <Input variant="outlined" size="lg" label="Lacak Pesanan" className="bg-white" />
            </div>
            <button className="px-4 py-2 bg-white text-black flex-shrink-0">
            Cari Pesanan
            </button>
          </div>
        <h1 className="text-white ml-28 font-semibold">Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap tunggu 1-2 jam namun jika</h1>
        <h1 className="text-white ml-28 font-semibold">pesanan  masih tidak muncul maka kamu dapat menghubungi kami <a href="#" className="text-blue-500 underline">disini</a></h1>
        </Card>
        
        </div>
        {/* <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" /> */}
        {/* <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center " /> */}
      </section>
      <div className="bg-green-100">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
