import type { Todo } from '../../types/todo.ts';
{/*esto es un prop que recibe datos  T0do : t0do recibe objetos con id, titUlo, entre otras cosas*/}
type TodoItemProps = {
    todo: Todo
    onToggle: (id: number) => void // ESTO RECIBE UNA FUNCIÓN CON NUMEROSPERO NO DEVUELVE NADA
    onDelete: (id: number) => void // recibe una función de la misma manera
}
export function TodoItem ({todo, onToggle, onDelete} : TodoItemProps) {
    // esto crea el componente y saca los datos del prop
    return(
        <div> {/*esto es una caja*/}
            <p>Mi lista</p>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {/*// Esto es una casilla de verificación */}
            {/* // te pregunta si marcaste  Sí o No viene del dato*/}
            {/* / Al hacer clic avisa al padre*/}
            <button onClick={() => onDelete(todo.id)}>
                Eliminar
            </button>
        </div>
    )
}

