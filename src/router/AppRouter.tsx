import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "../components/layout/Layout.tsx";
import {TodoListPage} from '../pages/TodoListPage.tsx';
import {TodoCreatePage} from '../pages/TodoCreatePage.tsx';
import {TodoDetailPage} from '../pages/TodoDetailPage.tsx';
import {NotFoundPage} from '../pages/NotFoundPage.tsx';

const router = createBrowserRouter([
    {
        path: "/", // esto es la recepción
        element: <Layout />, // layout es el edificio completo
        children: [ // children son las habitaciones del edicifio o las puertas
            {index: true,element: <TodoListPage/>},
            {path: "new", element: <TodoCreatePage/>},
            {path: "todo/:id", element: <TodoDetailPage/>},
            {path: "*", element: <NotFoundPage/>}

        ]
    }
])
export function AppRouter() {
    return <RouterProvider router={router}/>;
}