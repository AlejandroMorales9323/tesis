import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { TodoListPage } from '../../pages/TodoListPage';
import {describe, expect, vi} from 'vitest';

//vi.mock esto hace un reemplazo de un archivo real por uno ficticio
//vi.fin es una función falsa que crea Vitest para espiar si fue llamada o no
//new Promise es una promesa que nunca termina
//screen son ojos en el test representa lo que se ve en pantalla
//getByText esto busca algo que sea exactamente igual a lo que esta entre comillas
//.toBeInTheDocument() esto verifica que esta en la pantalla
vi.mock('../../api/axiosClient', () => ({
    axiosClient: {
        get: vi.fn(() => new Promise(() => {}))
    }
}));
describe('TodoListPage', () => {
    it('Deberia renderizar esta cosa TodoListPage', async () => {
        render(
            <MantineProvider>
                <TodoListPage />
            </MantineProvider>
        )
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    })
})