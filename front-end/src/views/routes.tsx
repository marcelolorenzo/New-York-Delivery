import { Route, Routes as RDRoutes } from "react-router-dom";
import { PublicOnlyRoute } from "../components/PublicOnlyRoute";
import { HomeView } from "./Home";
import { NewOrderView } from "./NewOrder";
import { NotFoundView } from "./NotFound";
import { RegisterView } from "./Register";

export function Routes () {
    return (
         <RDRoutes>
             <Route path='/' element={<HomeView />} />
             <Route
              path='/cadastro'
               element={
               <PublicOnlyRoute>
                   <RegisterView />
               </PublicOnlyRoute>
               }
             <Route path='/novo-pedido' element={<NewOrderView />} />
             <Route path='*' element={<NotFoundView />} />
         </RDRoutes>
    )
}

