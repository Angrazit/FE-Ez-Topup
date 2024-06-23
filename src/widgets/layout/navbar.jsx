import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



export function Navbar({ brandName, routes, action }) {
  
  function activelink(nama = null){

    let classes = ''
    if (nama === namepage){
      classes += 'capitalize border-b-2 text-white lg:px-4 lg:pb-2 lg:-mb-2 '
    }else{
      classes += 'capitalize text-orange lg:px-4 lg:pb-2 lg:-mb-2 hover:text-white hover:border-b-2'
    }
  
    return classes
  
  }


  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  var { pathname } = useLocation();
  let namepage = pathname.split('/')?.at(1);

  const navList = (
    <ul className=" flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className={activelink(name)}
        >
        
          <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75",
                })}
              {name}
            </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="sticky bg-old-blue top-0 z-10  max-w-full rounded-none -my-1 px-4 py-1 lg:px-8 " color="transparent"
  >
      <div className="container mx-auto flex items-center  text-orange  pt-0.5 pb-0.5">
        <Link to="/">
          <Typography className=" ml-2  cursor-pointer font-bold ">
            <img src="/img/ez-topup.png" className="w-9"></img>
          </Typography>
        </Link>
        <div className="hidden lg:block lg:pl-10">{navList}</div>
        {/* <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
            <Button variant="text" size="sm" color="white" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div> */}
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse
        open={openNav}
      >
      <div className="rounded-xl bg-old-blue px-4 pt-2 pb-4 text-blue-gray-900">
      <div className="container mx-auto">
          {navList}
          {/* <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })} */}
        </div>
      </div>
        
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  
  brandName: "EZ Top-up",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
