import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();

  return (
    <>
        <Navbar routes={routes} ></Navbar>
        {/* <div className="relative flex h-screen content-center items-center justify-center">
            <div className="absolute top-0 h-full w-full bg-[url('/img/background-2.jpg')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-grey/100 bg-cover bg-center bg-gradient-to-b from-old-blue" />
        </div> */}

      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
