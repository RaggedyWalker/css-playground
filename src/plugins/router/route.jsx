import { useRouter } from "./router/index.jsx";

export const Route = ({ path, component }) => {
  const { currentRoute } = useRouter();
  function matchRoute(route, path) {
    const routeParts = route.split("/");
    const pathParts = path.split("/");
    if (routeParts.length !== pathParts.length) {
      return false;
    }
    return routeParts.every((part, i) => {
      return part === pathParts[i] || part.startsWith(":");
    });
  }
  return matchRoute(currentRoute, path) ? component : null;
};
