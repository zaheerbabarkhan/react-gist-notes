import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import SingleGistPublic from '../pages/SingleGistPublicPage'
import CreateGistPage from '../pages/CreateGistPage'
import AllGistPage from '../pages/AllGistPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/gists' element={<HomePage />} />
    <Route path='/gists/:id' element={<SingleGistPublic />}/>
    <Route path='/gists/create' element={<CreateGistPage />}/>
    <Route path='/gists/users/:username' element={<AllGistPage />}/>
  </Route>
))
function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
