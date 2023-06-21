package dev.othmanfr.api.service;

import java.util.List;

import dev.othmanfr.api.model.Todo;

public interface TodoService {

    public List<Todo> getTodos();
    public Todo getTodo(int id);
    public Todo saveTodo(Todo todo);
    public Todo updateTodo(int id, Todo todo);
    public boolean deleteTodo(int id);
}
