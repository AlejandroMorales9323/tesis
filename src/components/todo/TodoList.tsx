import type { Todo } from '../../types/todo.ts';
import {TodoItem} from "./TodoItem.tsx";

type TodoListProps = {
    todos: Todo[];  // un arreglo de T0do vacio para que reciba el tipado pero por ahora esta vacia t0d0s es un nombre de variable que se usa
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    //componente con datos recibidos
    return (
        <div> {/* esto es una caja distinta*/} {/* // esto recorre el tipado de todos dentro del arreglo cuando tiene contenidopor eso es todos.map mira arriba todos: tod[]*/}
            {todos.map((todo) => (

                <TodoItem
                    // todos avisan al componente padre cuando se realizan distintas acciones
                    key={todo.id} // esto identifica
                    todo={todo} // esto no avisa a ningun componente esto solo pasa datos muestra la tarea que se desarrolla
                    onToggle={onToggle} //esto hace un llamado al padre cuando haga clic en el checbox
                    onDelete={onDelete} // esto avisa al padre que se elimino algo
                />
            ))}
        </div>
    );
}