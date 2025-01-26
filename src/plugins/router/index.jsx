import React from "react";
const RouterContext = React.createContext();

export function RouterProvider({ children }) {
  const [currentRoute, setCurrentRoute] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const handlePopstate = setCurrentRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentRoute(path);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export const useRouter = () => React.useContext(RouterContext);
