import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/Index'
import { BoxPage } from './pages/geometries/Box';
import { RoundedBoxPage } from './pages/geometries/RoundedBox';

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
