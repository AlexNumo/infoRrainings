import {
  Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Toaster from './Components/Toasts/Toasts';

const MainPage = lazy(() => import('Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/));

function App() {
  return (
    <>
      <Suspense fallback={<h1>"Downloading..."</h1>}>
        <Routes>
          <Route exact path="/" element={<MainPage />} >
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
