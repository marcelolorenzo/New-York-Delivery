import { Route, Routes as RDRoutes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { PublicOnlyRoute } from "../components/PublicOnlyRoute";
import { HomeView } from "./Home";
import { LoginView } from "./Login";
import { NewOrderView } from "./NewOrder";
import { NotFoundView } from "./NotFound";
import { RegisterView } from "./Register";

export function Routes() {
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
            />
            <Route
                path='/login'
                element={
                    <PublicOnlyRoute>
                        <LoginView />
                    </PublicOnlyRoute>
                }
            />
            <Route
                path='/novo-pedido'
                element={
                    <PrivateRoute>
                        <NewOrderView />
                    </PrivateRoute>
                }
            />
            <Route path='*' element={<NotFoundView />
            }
            />
        </RDRoutes>
    )
}

