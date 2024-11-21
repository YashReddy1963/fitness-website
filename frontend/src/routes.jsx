import { Home, Profile, SignIn, SignUp } from "@/pages";
import { element } from "prop-types";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Blogs",
    href: "/blogs",
    target: "_blank",
    element: "",
  },
  {
    name: "Communities",
    href: "/community",
    target: "_blank",
    element: "",
  }
];

export default routes;
