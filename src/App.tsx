import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import Header from "./components/Header"
import ScreenContextProvider from "./context/screenContext"




function App() {


  const router = useRoutes(routes)


  return (
    <>
      <ScreenContextProvider>
        

          <Header />
          {router}

        

      </ScreenContextProvider>
    </>
  )
}

export default App
