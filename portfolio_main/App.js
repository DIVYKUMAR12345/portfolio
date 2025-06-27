// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./component/Home.jsx";
import Gallery from "./component/Gallery.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
