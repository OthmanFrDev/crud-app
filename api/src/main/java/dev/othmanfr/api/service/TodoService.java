package dev.othmanfr.api.service;

import dev.othmanfr.api.model.Todo;

public interface TodoService {
    public Todo saveTodo(Todo todo);
    public Todo updateTodo(int id, Todo todo);
    public int deleteTodo(int id);
}
