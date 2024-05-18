import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Componant/Home/Home';
import Layout from './Componant/Layout/Layout';

function App() {
  let routers= createBrowserRouter([ 
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>}
    ]}
  ])
  return <>
  <RouterProvider router={routers}/>
  </>
}

export default App;
