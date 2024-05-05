import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayouts from "./layouts/mainLayouts"
import CarPage from "./pages/CarPage"
import AddCar from "./pages/AddCar"
import ErrorPage from "./pages/ErrorPage"
import CarMorePage from "./pages/CarMorePage"
import UpdateCarPage from "./pages/UpdateCar"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/car" element={<CarPage />}/>
        <Route path="/add-car" element={<AddCar/>}/>
        <Route path="/car/:id" element={<CarMorePage/>}/>
        <Route path="/car-update/:id" element={<UpdateCarPage/>}/>
        
        <Route 
          path='/car/:id'
          element={<CarMorePage  />}
        />
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
