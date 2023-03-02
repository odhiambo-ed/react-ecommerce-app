import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

import AuthRoute from './routes/AuthRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';
import './responsive.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          )}
      />
      <Route
        path="/login"
        element={(
          <AuthRoute>
            <Login />
          </AuthRoute>
          )}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
