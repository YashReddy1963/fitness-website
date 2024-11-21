import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout"; //import the Navbar function from navbar.jsx file of layout dir
import routes from "@/routes"; //import routes.jsx from src dir


function App() {
  localStorage.clear()
  const { pathname } = useLocation(); //Here pathname is the property of the useLocation hook which is used to get the pathname of the current url

  return (
    <>
      {/*Here the condition checks that, if the pathname is not /sign-in or /sign-up i.e. the login page then only the Navbar component is rendered, if the pathname condition is true then Navbar component dosen't get rendered */}
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">

          <Navbar routes={routes} />
        </div>
      )
      }

      {/*This tells that that at what path which element should be rendered*/}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {/*if there is no path after the port name then replace it with home/ */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
