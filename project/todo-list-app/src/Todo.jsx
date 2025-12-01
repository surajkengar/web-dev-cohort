function Todo({ id, title, completed, handletoggle, removeTodo }) {
  return (
    <div className="Todo">

      <div className="todo_title">
        <input 
          type="checkbox"  
          checked={completed}
          onChange={() => handletoggle(id)}
        />

        <p className={completed ? "completed" : ""}>
          {title}
        </p>
      </div>

      <span className="cross_btn" onClick={() => removeTodo(id)}>
        ❌
      </span>

    </div>
  );
}

export default Todo;
