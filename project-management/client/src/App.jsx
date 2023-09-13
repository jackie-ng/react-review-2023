import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"
import Register from './pages/Register.jsx'
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Write from "./pages/Write.jsx"
import Single from "./pages/Single.jsx"
import "./App.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])
function App() {
  return (
    <div className="app">
      {/* <div className="container"></div> */}
      <RouterProvider router={router} />
    </div>
  )
}


export default App;