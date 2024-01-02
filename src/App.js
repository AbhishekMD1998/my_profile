import './App.css';
import './style.css';
import AddTODO from './components/AddTODO';
import { Provider } from 'react-redux';
import {store} from './store/Store'
import Container from '@mui/material/Container';
import Disply from './components/Disply';
import { Info } from './components/Info';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { About } from './components/About';



const router = createBrowserRouter([
{
  path: '/',
  element: <Home/>,
  children: [
    {index: true,
    element: <Profile/>
    },
    {
      path: 'info',
      element: <Info/>
    },
    {
      path : 'navbar',
      element: <Navbar/>
    },
    {
      path: 'addTodo',
      element: <AddTODO/>
    },
    {
      path: 'display',
      element: <Disply/>
    },
    {
      path: 'about',
      element: <About/>
    }
  ]
}

]);

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
