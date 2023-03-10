import ContextAPIProvider from "./components/apis/ContextAPIProvider";
import MainLayout from "./components/templates/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./components/admin/Accounts";
import { Payments, Dashboard, Clients, Login } from "./components/sharedpages"

export default function App() {
    return (
      <BrowserRouter>
            <ContextAPIProvider>
                <Routes>
                    <Route path="/dashboard" exact element={<MainLayout />}>
                        <Route index exact element={<Dashboard />} />
                        <Route path="users" exact element={<Accounts />} />
                        <Route path="payments" exact element={<Payments />} />
                        <Route path="clients" exact element={<Clients />} />
                    </Route>
                    <Route index path="/login" exact element={<Login />} />
                </Routes>
            </ContextAPIProvider>
        </BrowserRouter>
    )
}
