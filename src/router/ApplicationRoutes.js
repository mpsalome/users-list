import { Routes, Route } from 'react-router-dom';
import { Home } from '../Views/Home';
import { NewUser } from '../Views/NewUser';


export const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewUser />} />
      </Routes>
    </>
  );
};