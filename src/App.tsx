import {Routes, Route} from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="min-h-screen">
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
