import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ReactLoader from './components/loader';
import * as ROUTES from './constants/routes';
// import UserContext from './context/user';
// import useAuthListener from './hooks/use-auth-listener';

// import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/login'));
// const SignUp = lazy(() => import('./pages/sign-up'));
// const Dashboard = lazy(() => import('./pages/dashboard'));
// const Profile = lazy(() => import('./pages/profile'));
// const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  // const { user } = useAuthListener();

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}
