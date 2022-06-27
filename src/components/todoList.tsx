import React, {useEffect} from 'react';
import {useAction} from "../hooks/useAction";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const {todos, limit, page, loading, errors} = UseTypedSelector((state) => state.todo);
  const {fetchTodos, setTodoPage} = useAction()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
    // eslint-disable-next-line
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>{errors}</div>;
  }

  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {pages.map(p => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page
                ? '2px solid green'
                : '1px solid grey',
              padding: 10,
              margin: 10
            }}
            key={p}>
            {p}
          </div>
        ))}
      </div>
    </div>

  );
};

export default TodoList;