{/*Esto es un tipado donde cada cosa tiene su id, titulo, completed es un verdadero o un falso y userId? significa que esto es opcional */}
export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}