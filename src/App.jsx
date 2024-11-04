import LeftBar from "./components/LeftBar"

const App = () => {
  return (
    <div className='flex flex-row min-h-screen  '>
      {<LeftBar></LeftBar>}
      <div className="container"></div>
    </div>
  )
}

export default App


