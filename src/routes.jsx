import { Home, Profile, SignIn, SignUp,TopUp } from "@/pages";

export const routes = [
  {
    nameshow: "beranda",
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    nameshow: "lacak pesanan",
    name: "lacak-pesanan",
    path: "/lacak-pesanan",
    element: <Profile />,
  },
  {
    
    path: "/top-up/:gameName",
    element: <TopUp />,
  },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
