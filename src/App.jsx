import LeftBar from "./components/LeftBar";
import { RouterProvider } from "./plugins/router/index.jsx";
import StickyCeilingGroupList from "./sticky-ceiling-group-list";

const App = () => {
  return (
    <div className="flex flex-row h-screen">
      {<LeftBar></LeftBar>}
      <div className="container h-full overflow-y-auto">
        <StickyCeilingGroupList></StickyCeilingGroupList>
        <RouterProvider></RouterProvider>
      </div>
    </div>
  );
};

export default App;
