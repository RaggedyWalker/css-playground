import { path } from "framer-motion/client";
import { BiCubeAlt } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const wrapRoute = (routes, handle) => routes.map(handle);
const withPrefix = (prefix) => (route) => ({
  ...route,
  path: prefix + route.path,
});

const ComponentList = [
  {
    title: "Home",
    icon: <IoHome />,
  },
  {
    title: "About",
    icon: <BiCubeAlt />,
  },
  {
    title: "Contact",
    icon: <MdOutlineContactSupport />,
  },
  {
    title: "StickyCeilingGroupList",
    path: "/sticky-ceiling-group-list",
    icon: <IoHome />,
  },
];
export const routeList = [
  ...wrapRoute(ComponentList, withPrefix("/component")),
];
// ComponentList.map(withRoutePrefix.bind(null, "/component"));
