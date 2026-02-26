import { useState } from 'react';
import { Group, Button, TextInput } from '@mantine/core';

type TodoFormProps = {
    onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handleSubmit = () => {
        if (title === "") {
            setError('necesita un titulo');
        } else {
            //onSubmit && onSubmit(title);
            onSubmit(title);
            setTitle('');
            setError('');
        }
    }
    return (
        <>
            <Group>
                <TextInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>

                </TextInput>
                {error && <p>{error}</p>}
                <Button onClick={handleSubmit}>
                    Agregar
                </Button>
            </Group>
        </>
    )
}