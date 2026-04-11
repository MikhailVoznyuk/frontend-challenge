import { createBrowserRouter, Navigate, Outlet} from "react-router";
import {Header} from "@/widgets/header";
import { AllCatsPage } from "@/pages/all-cats";
import { FavoriteCatsPage } from "@/pages/favorite-cats";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export const router = createBrowserRouter([{
    path: '/',
    Component: RootLayout,
    children: [
        { index: true, element: <Navigate to='/all' replace /> },
        {path: 'all', Component: AllCatsPage },
        {path: 'favorites', Component: FavoriteCatsPage}
    ]
}])


