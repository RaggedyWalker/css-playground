import { IoHome } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";
import { useState } from "react";
import { BiCubeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

function LeftBar() {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <motion.div className="leftBar bg-orange-200/10 px-6" layout>
      <ul className="flex flex-col gap-4 mt-10">
        <NavItem collapse={collapse} title="Home" icon={<IoHome/>}></NavItem>
        <NavItem collapse={collapse} title="About" icon={<BiCubeAlt/>}></NavItem>
        <NavItem collapse={collapse} title="Contact" icon={<MdOutlineContactSupport/>}></NavItem>
      </ul>

      <GoSidebarCollapse
        className="mt-10"
        onClick={handleCollapse}
      ></GoSidebarCollapse>
    </motion.div>
  );
}

export default LeftBar;

function NavItem({ collapse, icon, title }) {
  return (
    <motion.li className="flex items-center gap-2" layout transition={{}}>
      <motion.span layout className="max-w-min bg-yellow-800 p-2 rounded-full">{icon}</motion.span>
      <motion.span  className={collapse ? "hidden" : ""} animate={{opacity: collapse ? 0:1}}>{title}</motion.span>
    </motion.li>
  );
}
