import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AboutUs from './pages/AboutUs.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;