import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/Index'
import { BoxPage } from './pages/geometries/Box';
import { RoundedBoxPage } from './pages/geometries/RoundedBox';
import { MyRoundedBoxPage } from './pages/geometries/MyRoundedBox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "/geometries/Box",
    element: <BoxPage />
  },
  {
    path: "/geometries/RoundedBox",
    element: <RoundedBoxPage />
  },
  {
    path: "/geometries/MyRoundedBox",
    element: <MyRoundedBoxPage />
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
