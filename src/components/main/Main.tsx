import { FC } from 'react'
import Sandwich from './Sandwich'
import Library from './Library'
import Counter from './Counter'
import { Navigate, Route, Routes } from 'react-router-dom'


const Main: FC = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Navigate to="/counter" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
};

export default Main