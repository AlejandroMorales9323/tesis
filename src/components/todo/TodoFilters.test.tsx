import { TodoFilters } from './TodoFilters';
import {MantineProvider} from "@mantine/core";
import {render, screen} from "@testing-library/react";
import {describe, expect} from "vitest";
import userEvent from "@testing-library/user-event";
//que es describe: es como una carpeta que agrupa tests relacionados en este caso t0d0 form
// que es it: es un test individual esto describe exactamente que está probando
//que es un async: esta funcion hace cosas que toman tiempo esto te da tiempo de que tod0 reaccione de a poco
//vi.fin es una función falsa que crea Vitest para espiar si fue llamada o no
describe("TodoFilters", () => {
    it('Se activo el filtro', async () => {
        //prepara el componente
        const onFilterChange = vi.fn()
        render(
            <MantineProvider>
                <TodoFilters filter="all" onFilterChange={onFilterChange}/>
            </MantineProvider>
        )
        const button = screen.getByRole('button', { name: 'Active' });
        await userEvent.click(button);
        // esto no solo hace preguntas si fue llamado tambien pregunta si fue llamado con active o no
        expect(onFilterChange).toHaveBeenCalledWith('active');
    })
})