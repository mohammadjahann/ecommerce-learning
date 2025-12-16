import { useLocation, useRoutes } from "react-router-dom"
import routes from "./Routes"
import Header from "./components/Header"
import ScreenContextProvider from "./context/screenContext"
import { AnimatePresence } from "framer-motion";




function App() {


  const location = useLocation();
  const router = useRoutes(routes, location)



  return (
    <>
      <ScreenContextProvider>


        <Header />

        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            {router}
          </div>

        </AnimatePresence>


      </ScreenContextProvider>
    </>
  )
}

export default App
