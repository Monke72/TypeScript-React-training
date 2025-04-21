import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItem {
  todo: ITodo;
}

const TodoItem: FC<TodoItem> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export default TodoItem;
