import {axiosClient} from "../api/axiosClient.ts";
import {TodoForm} from "../components/todo/TodoForm.tsx";


// dentro de la funcion tenemos un post que crea algo nuevo en la url /tod0
// .then se ejecuta cuando la petición fue exitosa. No "busca"
// sino que recibe los datos que llegaron y hace algo con ellos.
//.catch se ejecuta cuando la petición falló. Por ejemplo si no hay internet,
// el servidor está caído, o la URL es incorrecta.
export function TodoCreatePage() {
const handleSubmit = (title: string) => {
    axiosClient.post('/todos', {
        title: title,
        completed: false,
        userId: 1,
    })
        .then((respons) =>{
            console.log('Tarea concretada...', respons.data)
        })
        .catch(() =>{
            console.log('Error al concretar tareas')
        })
};
    return(
        <>
            <TodoForm onSubmit={handleSubmit} />
        </>
    );
}