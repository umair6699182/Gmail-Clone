import { routes } from './routes/routes';
import {createBrowserRouter , createRoutesFromElements , Navigate, Route , RouterProvider} from 'react-router-dom'

import { lazy, Suspense } from 'react';
import SuspenseLoader from './components/common/SuspenseLoader';
import './App.css';
const ErrorComponents = lazy(()=> import("./components/common/ErrorComponents"))



const router = createBrowserRouter(
      createRoutesFromElements(
          <Route>
                <Route path={routes.main.path} element={< Navigate to={`${routes.emails.path}/inbox`} /> } />
                <Route path={routes.main.path} element={< routes.main.element />} >
                    <Route path={`${routes.emails.path}/:type`} element={< routes.emails.element /> } errorElement={<ErrorComponents />} />
                    <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponents />} />
                </Route>
                <Route path={routes.invalid.path} element={<Navigate to={`${routes.main.path}/inbox`} />} />
          </Route>
      )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
          <RouterProvider router={router} />
    </Suspense>
    
  );
}

export default App;
