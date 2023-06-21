package dev.othmanfr.api.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.stereotype.Service;

import dev.othmanfr.api.model.Todo;
import dev.othmanfr.api.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

    private List<Todo> todos = new ArrayList<>();

    public TodoServiceImpl() {
        this.todos.addAll(IntStream.range(1, 10).mapToObj(i -> Todo.builder().id(i)
                .description(String.format("Description for todo %s", i)).createdAt(LocalDateTime.now()).build())
                .collect(Collectors.toList()));
    }

    @Override
    public Todo saveTodo(Todo todo) {
        this.todos.add(todo);
        return todo;
    }

    @Override
    public Todo updateTodo(int id, Todo todo) {
        int indexOfOldTodo=this.todos.stream().filter(t->t.getId()==id).map(t->this.todos.indexOf(t)).findFirst().get();
        return this.todos.set(indexOfOldTodo, todo);
    }

    @Override
    public boolean deleteTodo(int id) {
        return this.todos.remove(this.todos.stream().filter(t->t.getId()==id).findFirst().get());
    }

    @Override
    public List<Todo> getTodos() {
        return this.todos;
    }

    @Override
    public Todo getTodo(int id) {
        return this.todos.stream().filter(t->t.getId()==id).findFirst().get();
    }
}
