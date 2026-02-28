import { useState } from 'react';
import { Group, Button, TextInput } from '@mantine/core';

type TodoFormProps = {
    onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [title, setTitle] = useState<string>('');
    return (
        <>
            <Group>
                <TextInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}>

                </TextInput>
                <Button onClick={() => onSubmit(title)}>
                    Agregar
                </Button>
            </Group>
        </>
    )
}