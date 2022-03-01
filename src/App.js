import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import { Blog } from "./pages/Blog";
import Error from "./pages/Error";
import { Homepage } from "./pages/Homepage";
import SinglePost from './pages/SinglePost';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blog/:slug" element={<SinglePost />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </Router>
  );
}

export default App;
