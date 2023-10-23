import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import PrivateRoute from 'Pages/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('Pages/HomePage/HomePage.jsx'));
const ContentPage = lazy(() => import('Pages/ContentPage/ContentPage.jsx'));

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 'small',
        // color: '#010101',

        // display: 'flex',
        // flexDirection: 'column',
        // gap: '10px',
        // padding: '1rem',
      }}
    >
      {/* <Header /> */}
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/content"
              element={
                <PrivateRoute redirectTo="/">
                  <ContentPage />
                </PrivateRoute>
              }
            />
            <Route />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
