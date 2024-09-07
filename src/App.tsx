import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// Lazy load the components
const HomePage = lazy(() => import('./pages').then(module => ({ default: module.HomePage })));
const ErrorPage = lazy(() => import('./pages').then(module => ({ default: module.ErrorPage })));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;