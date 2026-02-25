import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {Outlet} from 'react-router-dom'


export function Layout() {
    const [opened, { toggle }] = useDisclosure(); // opened tira una pregunta que se responde en booleano para abrir el menú // toggle funciona para abrir o cerrar

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            {/* esto es el header de mi pagina aqui esta el menú de amborgesa, sus dimenciones y su funcion de abrir o cerrar */}
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text fw={700} size="lg"> Project-T</Text>
                </Group>
            </AppShell.Header>
            {/*aqui esta mi contenido de la pagina  y el appshell funciona y gatilla el menu para que sea visible*/}
            <AppShell.Navbar p="md">
                <Text c="dimmed" size="sm">Menú</Text> {/*c="dimmed" es el tipo de texto*/}
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/> {/*esta cosa guarda el contenido de todolist tododetail y todocreate*/}
            </AppShell.Main>
        </AppShell>
    );
}