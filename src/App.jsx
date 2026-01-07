import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Payment from './pages/Payment';
import RoomDetails from './pages/RoomDetails';
import ResortList from './pages/ResortList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ResortList />} />
          <Route path="resort/:resortId" element={<Home />} />
          <Route path="resort/:resortId/payment" element={<Payment />} />
          <Route path="resort/:resortId/:id" element={<RoomDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
