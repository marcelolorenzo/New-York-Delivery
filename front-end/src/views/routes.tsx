import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./Home";
import { NewOrderView } from "./NewOrder";
import { NotFoundView } from "./NotFound";
import { RegisterView } from "./Register";

export function Routes () {
    return (
         <RDRoutes>
             <Route path='/' element={<HomeView />} />
             <Route path='/cadastro' element={<RegisterView />} />
             <Route path='/novo-pedido' element={<NewOrderView />} />
             <Route path='*' element={<NotFoundView />} />
         </RDRoutes>
    )
}

