import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'Pages/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}