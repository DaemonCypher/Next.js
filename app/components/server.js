
export async function ServerComponent(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    return (
        <div>
            <h1>Hi There</h1>
            {data.length === 0 ? <div>loading...</div> : data.map((todo) => ( <p key={todo.id}>{todo.title}</p>))}
        </div>
    )
}