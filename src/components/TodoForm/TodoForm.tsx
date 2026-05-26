import { useState } from 'react';

type TodoFormProps = {
    onAdd: (text: string) => void;
}

export function TodoForm(props: TodoFormProps) {
    const { onAdd } = props;
    const [text, setText] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmedText = text.trim();
        
        if (trimmedText) {
            onAdd(trimmedText);
            setText(''); 
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите новую задачу..."
            />
            <button type="submit">Добавить задачу</button>
        </form>
    );
}