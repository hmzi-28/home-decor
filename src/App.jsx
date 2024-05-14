
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Pages from './Pages/Home';
import Contact from './Pages/Contact';





function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Pages/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App;
