import { useState, useEffect } from 'react';
import type { Todo } from '../../types/todo.ts';
import { TodoList } from "../components/todo/TodoList.tsx";

const MOCK_TODOS: Todo[] = [
    { id: 1, title: "Comprar medicamentos", completed: false },
    { id: 2, title: "Revisar inventario", completed: true },
    { id: 3, title: "Llamar al proveedor", completed: false },
];

export function TodoListPage() {
    const [todo, setTodo] = useState<Todo[]>(MOCK_TODOS);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Funciones que pasarás a TodoList
    const handleToggle = (id: number) => {
        console.log("Toggle:", id);
    };

    const handleDelete = (id: number) => {
        console.log("Delete:", id);
    };

    return (
        <>
            <div>
                <h1>Lista de Tareas</h1>

                {/* Muestra cargando si loading es true */}
                {loading && <p>Cargando...</p>}

                {/* Muestra error si existe */}
                {error && <p>Error: {error}</p>}

                {/* Muestra la lista si no está cargando ni hay error */}
                {!loading && !error && (
                    <TodoList
                        todos={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </>
    );
}