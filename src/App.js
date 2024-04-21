import Home from './Pages/Home';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import RecipesDetails from "./Pages/RecipesDetails" 
import { Route, Routes, Outlet } from "react-router-dom"

function Layout(){
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <div className='bg-black'>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipesDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
