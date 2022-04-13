import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Router, Route } from 'solid-app-router';

const Builder = lazy(() => import('./pages/builder.jsx'));
const Count = lazy(() => import('./pages/count.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' element={Builder} />
                <Route path='/count' element={Count} />
            </Routes>
        </Router>
    ),
    document.getElementById('root'),
);
