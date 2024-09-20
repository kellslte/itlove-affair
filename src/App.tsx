import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Loader } from './ui';

// Lazy load the components
const HomePage = lazy(() => import('./pages').then(module => ({ default: module.HomePage })));
const ErrorPage = lazy(() => import('./pages').then(module => ({ default: module.ErrorPage })));
const WishListPage = lazy(() => import('./pages').then(module => ({default: module.WishListPage})))

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/wishlist" element={<WishListPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;