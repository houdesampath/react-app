import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Proposal from './pages/Proposal';
import './static/styles/app.css';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/:id" element={<Proposal />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
