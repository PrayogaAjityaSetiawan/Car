import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Router
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayouts from "./layouts/mainLayouts"
import CarPage from "./pages/CarPage"
import AddCar from "./pages/AddCar"
import ErrorPage from "./pages/ErrorPage"
import CarMorePage from "./pages/CarMorePage"

function App() {
  
  const addCar = async () => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addCar),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/car" element={<CarPage />}/>
        <Route path="/add-car" element={<AddCar/>}/>
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
