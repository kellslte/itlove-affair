import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Loader } from './ui';

// Lazy load the components
const HomePage = lazy(() => import('./pages').then(module => ({ default: module.HomePage })));
const ErrorPage = lazy(() => import('./pages').then(module => ({ default: module.ErrorPage })));
const WishListPage = lazy(() => import('./pages').then(module => ({default: module.WishListPage})));
const ProgramPage = lazy(() => import('./pages').then(module => ({default: module.ProgramPage})));
const SuccessPage = lazy(() => import('./pages').then(module => ({default: module.SuccessPage})));

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path ="/program" element={<ProgramPage/>}/>
          <Route path ="/send-money" element={<ProgramPage/>}/>
          <Route path ="/donate/success" element={<SuccessPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;