import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ContactPage from './pages/Contact';
import Chatbot from './components/chatbot/Chatbot';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="contacts" element={<ContactPage />} />
          </Route>
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
