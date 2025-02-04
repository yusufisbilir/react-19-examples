import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/theme';
import { routes } from './utils/routes';

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes>
        <Route path='/' element={<Home />} />
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
