import React from "react";
import Header from './partials/header';
import Search from './partials/search';
import Frameworks from './partials/frameworks';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Footer from './partials/footer';
import Framework from './partials/framework';
import FrameworkOverview from './partials/framework-overview';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<Frameworks />} />
          <Route path="/framework-overview" element={<FrameworkOverview />} />
          <Route path="/:framework/:component?" element={<Framework />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
