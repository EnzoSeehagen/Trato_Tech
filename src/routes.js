import PaginaPadrao from 'components/PaginaPadrao';
import Categoria from 'Pages/Categoria';
import Home from 'Pages/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/categoria/:nomeCategoria' element={<Categoria/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}