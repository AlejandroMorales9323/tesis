import {useParams} from "react-router-dom";
import {axiosClient} from "../api/axiosClient.ts";
import {useEffect, useState} from "react";
import type { Todo } from '../types/todo.ts';
import {Box} from "@mantine/core";

export function TodoDetailPage() {
const {id} = useParams();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [todo, setTodo] = useState<Todo | null>(null);
//aqui tenemos get pide datos desde la url /todos/${id} un id desde una data previamente configurada
    //tenemos en el Box ternarios que comparan distintos parametros ademas de titulos y si no esta completada dira que esta pendiente

useEffect(()=>{
    axiosClient.get(`/todos/${id}`)
        .then((buscar)=>{
            setTodo(buscar.data)
            setLoading(false);
            })
        .catch(()=>{
            setError('Error al cargar tarea');
            setLoading(false);
            }

        )
},[])
    return(
        <>
            <Box>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {todo && (
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.completed ? 'Completada' : 'Pendiente'}</p>
                    </div>
                )}
            </Box>
        </>
    )
}