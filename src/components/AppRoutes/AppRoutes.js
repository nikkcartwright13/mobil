import { Route, Routes } from "react-router-dom";
import Main from '../Pages/MainDash/Main';
import Pageone from '../Pages/Pageone/Pageone'
import Pagetwo from '../Pages/Pagetwo/Pagetwo'
import Pagethree from '../Pages/Pagethree/Pagethree'
import Pagefour from '../Pages/Pagefour/Pagefour'
import Pagefive from '../Pages/Pagefive/Pagefive'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/pageone" element={<Pagefive />}></Route>
            <Route path="/pagetwo" element={<Pagetwo />}></Route>
            <Route path="/pagethree" element={<Pagefour />}></Route>
            <Route path="/pagefive" element={<Pagethree />}></Route>
            <Route path="/pagefour" element={<Main />}></Route>
            <Route path="/" element={<Pageone />}> </Route>
        </Routes>
    );
}
export default AppRoutes;