import { GoSidebarCollapse } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import { routeList } from "../config/menuList";
import { Link } from "../plugins/router/link";

function LeftBar() {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <motion.div className="leftBar bg-orange-200/10 px-6" layout>
      <ul className="flex flex-col gap-4 mt-10">
        {routeList.map((route, index) => (
          <NavItem key={index} collapse={collapse} route={route}></NavItem>
        ))}
      </ul>

      <GoSidebarCollapse
        className="mt-10"
        onClick={handleCollapse}
      ></GoSidebarCollapse>
    </motion.div>
  );
}

export default LeftBar;

function NavItem({ collapse, route }) {
  return (
    <motion.li className="flex items-center gap-2" layout transition={{}}>
      <Link to={route.path}>
        <motion.span
          layout
          className="max-w-min bg-yellow-800 p-2 rounded-full"
        >
          {route.icon}
        </motion.span>
        <motion.span
          className={collapse ? "hidden" : ""}
          animate={{ opacity: collapse ? 0 : 1 }}
        >
          {route.title}
        </motion.span>
      </Link>
    </motion.li>
  );
}
