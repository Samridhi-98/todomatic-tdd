import "./TodoList.css";
function TodoList(props) {
    const displayList = () => {
        let items = props.item.map((item, index) => {
            return <p
                className="list-item"
                data-testid="list-item"
                key={index}>
                {item}
                <span className="delete-button" data-testid="delete-button" onClick={() => props.delete(index)}>
                    🗑️
                </span>
            </p>
        })
        return items;
    };
    return (
        <div className="todo-body" data-testid="todo-body">
            {displayList()}
        </div>
    )
}

export default TodoList;