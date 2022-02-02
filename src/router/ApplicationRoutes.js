import { Routes, Route } from 'react-router-dom';
import { Home } from '../Views/Home';


export const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
