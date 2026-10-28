import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { AppContext, useAppState } from './useAppState';

import Navigation from './components/Navigation';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const { state, actions } = useAppState();

  return (
    <AppContext.Provider value={{ state, actions }}>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio-developer" element={<Home />} />
              <Route path="/portfolio-developer/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio-developer/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
