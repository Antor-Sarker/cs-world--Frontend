import { Provider } from "react-redux"
import Home from "./home/home"
import store from "./redux/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Player from "./player/player"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'player/:id',
    element: <Player/>
  }

])

function App(){
  return(
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App