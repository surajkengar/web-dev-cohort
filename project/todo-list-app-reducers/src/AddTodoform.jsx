import { useState } from 'react';
import { useContext } from 'react';
import { mycontext } from './App';

function Addtodo() {
    const { dispatch } = useContext(mycontext);
    const [name, setname] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const NewTodo = {
            id: crypto.randomUUID(),
            name: name,
            status: false
        };

        dispatch({ type: "Add", payload: { NewTodo } });

        setname(""); // clear input after adding
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}

export default Addtodo;
