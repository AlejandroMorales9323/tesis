import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TodoForm} from './TodoForm';
import {describe, expect} from "vitest";
import {MantineProvider} from "@mantine/core";
//que es describe: es como una carpeta que agrupa tests relacionados en este caso t0d0 form
// que es it: es un test individual esto describe exactamente que está probando
//que es un async: esta funcion hace cosas que toman tiempo esto te da tiempo de que tod0 reaccione de a poco
//vi.fin es una función falsa que crea Vitest para espiar si fue llamada o no
describe('TodoForm', () => {
   it('No llama onSubmit si el titulo esta vacio', async () => {

       //prepara el componente
       const onSubmit = vi.fn()
       render(
           <MantineProvider>
               <TodoForm onSubmit={onSubmit}/>
           </MantineProvider>
       )

       //busca el boton y clikea
       const button  = screen.getByRole('button', { name: 'Agregar' });
       await userEvent.click(button);

       //esta funcion es para preguntar si fue llamada o no
       expect(onSubmit).not.toHaveBeenCalled()
   })
})