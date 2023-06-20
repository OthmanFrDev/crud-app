package dev.othmanfr.api.service.impl;

import dev.othmanfr.api.model.Todo;
import dev.othmanfr.api.service.TodoService;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {
    @Override
    public Todo saveTodo(Todo todo) {
        return null;
    }

    @Override
    public Todo updateTodo(int id, Todo todo) {
        return null;
    }

    @Override
    public int deleteTodo(int id) {
        return 0;
    }
}
