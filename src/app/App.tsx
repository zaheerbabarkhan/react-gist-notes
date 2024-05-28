import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import SingleGistPublic from '../pages/SingleGistPublicPage'
import CreateGistPage from '../pages/CreateGistPage'
import AllGistPage from '../pages/AllGistPage'
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyCu4FEctfB0YRZDPmwjLZZ7CiEN138MHk8",
  authDomain: "gist-notes-project.firebaseapp.com",
  projectId: "gist-notes-project",
};

initializeApp(firebaseConfig);

const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<MainLayout />}>
    <Route path='/' element={<HomePage />} />
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
