import { useRouter } from "./index.jsx";

export const Link = ({ to, children }) => {
  const { navigate } = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
