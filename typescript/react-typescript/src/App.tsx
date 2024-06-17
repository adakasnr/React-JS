import React from 'react';
import './App.css';
import Increment from './Hooks/useState/Increment';
import Index from './Hooks/useState/UseState-adv';
import Final from './Hooks/useEffect/UseEffect';
import UseEffect1 from './Hooks/useEffect/UseEffectPractice';
import UseEffect2 from './Hooks/useEffect/UseEffectPractice2';
// import ParentComponent from './Hooks/useContext/UseContext';
// import ParentComponent1 from './Hooks/useContext/ParentConponent';
// import UseReducer from './Hooks/useReducer/UseReducer';
import UseReducerEx from './Hooks/useReducer/UseReducerEx';
import UseRef from './Hooks/useRef/useRef';
import UseMemo from './Hooks/useMemo/UseMemo';
import About from './ReactRouterDom/About';
import Home from './ReactRouterDom/Home';
import Contact from './ReactRouterDom/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './ReactRouterDom/Navbar';
import Success from './ReactRouterDom/Success';
import NotFound from './ReactRouterDom/NotFound';
import Projects from './ReactRouterDom/NestedRoutes/Projects';
import FeaturedProjects from './ReactRouterDom/NestedRoutes/FeaturedProjects';
import NewProject from './ReactRouterDom/NestedRoutes/NewProjects';
import Users from './ReactRouterDom/DynamicRoutes/Users';
import UserDetails from './ReactRouterDom/DynamicRoutes/UserDetails';

function App() {
  return (
    // <main className='container'>
    //   <button className='button'>click me</button>
    //     <Increment />
    //     <Index />
    // </main>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/NestedRoutes/Projects' element={<Projects />}>
          <Route path='featured' element={<FeaturedProjects />}/>
          <Route path='new' element={<NewProject/>}/>
        </Route>
        <Route path='/DynamicRoutes/Users' element={<Users/>}/>
        <Route path='/DynamicRoutes/Users/:userID' element={<UserDetails />}/>
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </div>
  )
}

// *(start)in the path, if no route matches then it shows the last route in the results 

export default App;
