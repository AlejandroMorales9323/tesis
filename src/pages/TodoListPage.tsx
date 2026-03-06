import {useState, useEffect, useRef} from 'react';
import type { Todo } from '../types/todo.ts';
import { TodoList } from "../components/todo/TodoList.tsx";
import {TextInput} from "@mantine/core";
import {TodoFilters} from "../components/todo/TodoFilters.tsx";
import {axiosClient} from "../api/axiosClient.ts";

//const MOCK_TODOS: Tod0[] = [
  //  { id: 1, title: "Comprar medicamentos", completed: false },
    //{ id: 2, title: "Revisar inventario", completed: true },
    //{ id: 3, title: "Llamar al proveedor", completed: false },
//];

export function TodoListPage() {
    const [todo, setTodo] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
    const [search, setSearch] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");


    //useEffect(() => {
    // simula que los datos tardan 1.5 segundos en llegar
    //  setTimeout(() => {
    //   setTodo(MOCK_TODOS);  // llegan los datos
    // setLoading(false);     // ya no carga
    //}, 1500);
    //}, []);
    //ahora tenemos datos dinamicos desde la url /todos?_limit=20
    // .then se ejecuta cuando la petición fue exitosa. No "busca"
    // sino que recibe los datos que llegaron y hace algo con ellos.
    //.catch se ejecuta cuando la petición falló. Por ejemplo si no hay internet,
    // el servidor está caído, o la URL es incorrecta.
    useEffect(() =>{
        axiosClient.get('/todos?_limit=20')
            .then((responde) =>{
                setTodo(responde.data);
                setLoading(false);
                })
            .catch(()=>{
                setError('Error intentelo nuevamente');
                setLoading(false);
                }
            )
        },[]);

    useEffect(() => {
        // cuando el usuario escribe crea un timer de 300 milisegundos
        const timer = setTimeout(() => {
            //esto despues de pasar el tiempo actualiza la busqueda retrasada
            setDebouncedSearch(search);
            }, 300);
        //limpia el efecto y cancela el timer
        return () => clearTimeout(timer);
    }, [search]); // gatilla el useefect si se gatilla el search
    // esta es una funcion recorre cada tarea y en base a los if decide que incluir y que no
    const filteredTodo = todo.filter((t)=>{
        if (filter === "all")
            return true;
        if (filter === "active")
            return !t.completed;
        if (filter === "completed")
            return t.completed;
    })
        // esta linea se pone el titulo, convierte de mayuscula a minuscula,
        // toma lo que el cliente escribio en minuscula y
        // luego consulta si el titulo coincide con la busqueda
        // y da un true o false
        .filter((t)=>t.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
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
                {/*este es el input donde busca las tareas */}
                <TextInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar tarea"
                />
                {/*esto conecta el archivo tod0 filtros y tod0 list4 como una tele y un control remoto
                filter este de aqui es de tod0 filters= {filters} este de aqui es de listpage
                onfilterchange es el prop de tod0filters y setfilter es el estado de listpage*/}
                <TodoFilters
                    filter={filter}
                    onFilterChange={setFilter}
                />
                {/* Muestra cargando si loading es true */}
                {loading && <p>Cargando...</p>}

                {/* Muestra error si existe */}
                {error && <p>Error: {error}</p>}

                {/* Muestra la lista si no está cargando ni hay error */}
                {!loading && !error && (
                    <TodoList
                        todos={filteredTodo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </>
    );
}