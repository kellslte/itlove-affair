import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Loader } from "./ui";

// Lazy load the components
const HomePage = lazy(() => import('./pages').then(module => ({ default: module.HomePage })));
const ErrorPage = lazy(() => import('./pages').then(module => ({ default: module.ErrorPage })));
const WishListPage = lazy(() => import('./pages').then(module => ({default: module.WishListPage})));
const ProgramPage = lazy(() => import('./pages').then(module => ({default: module.ProgramPage})));
const SuccessPage = lazy(() => import('./pages').then(module => ({default: module.SuccessPage})));

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait" initial = {false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/send-money" element={<ProgramPage />} />
            <Route path ="/donate/success" element={<SuccessPage/>}/>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
