import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ErrorPage from './Pages/Error/ErrorPage';
import About from './Pages/About/About';           
import ProtectedRoute from './Components/ProtectedRoute';
import OtherCenters from './Pages/Other/OtherCenters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/othercenters" element={<OtherCenters/>} />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;