import { Routes, Route } from 'react-router-dom';
import { Home } from '../Views/Home';
import { NewUser } from '../Views/NewUser';
import { EditUser } from '../Views/EditUser';



export const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
};