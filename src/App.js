import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from './components/Detail';
import UserList from './components/UserList';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar/>
        <Route path="/" element={<UserList/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
