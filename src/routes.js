import PaginaPadrao from 'components/PaginaPadrao';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element={<div>home</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}