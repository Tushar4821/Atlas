import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Country from './pages/Country.jsx'
import Error from './pages/Error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CountryDetails from './components/CountryDetails.jsx'
import Quiz from './pages/Quiz.jsx'
import FlagQuiz from './components/FlagQuiz.jsx'
import Cluequiz from './components/Cluequiz.jsx'
import SpeedQuiz from './components/SpeedQuiz.jsx'

const router = createBrowserRouter([{
  path: "/",
  element : <App/>,
  errorElement : <Error/>,
  children : [

 {
   path : '/',
   element : <Home/>
 },
  {
   path : 'about',
   element : <About/>
 },
  {
   path : 'country',
   element : <Country/>
 },
  {
   path : 'country/:id',
   element : <CountryDetails/>
 },
  {
  path : 'quiz',
  element : <Quiz/>
 },
 {
  path : "/quiz/flag",
  element : <FlagQuiz/>
 },
 {
  path : "/quiz/clues",
  element : <Cluequiz/>
 },
 {
  path : "/quiz/speed",
  element : <SpeedQuiz/>
 },
  {
   path : 'contact',
   element : <Contact/>
 },

]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
