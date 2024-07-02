import { Component } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./Components/Layout/Layout"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Applications from './Components/Applications/Applications';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Ios from "./Components/Ios/Ios";
import Web from './Components/Web/Web';
import It from "./Components/IT/It";

let routers = createBrowserRouter([
    {path:'' , element : <Layout/> , children : [
      {index:true , element : <Home/>},
      {path:'about' , element : <About/>},

      {path:'Applications' , element : <Applications /> , children:[
        {index : true , element:<Web/>},
        {path :'ios' , element:<Ios/>},
        {path : 'it' , element:<It/>},
      ]},
      
      {path:'contact' , element : <Contact />},
      {path:'*' , element : <NotFound />},
    ]}
])
export default class App extends Component{
  render(){
    return<>
      <RouterProvider router={routers}></RouterProvider>
    </>
  }
}