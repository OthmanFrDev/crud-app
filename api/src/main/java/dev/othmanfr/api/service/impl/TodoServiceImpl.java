package dev.othmanfr.api.service.impl;

import java.time.LocalDate;
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
                .description(String.format("Description for todo %s",
                        i))
                .createdAt(LocalDate.now()).build())
                .collect(Collectors.toList()));
    }

    @Override
    public Todo saveTodo(Todo todo) {
        int max = todos.stream().map(Todo::getId).max(Integer::compareTo).orElse(1);
        todo.setId(max);
        this.todos.add(todo);
        return todo;
    }

    @Override
    public Todo updateTodo(int id, Todo todo) {
        int indexOfOldTodo = this.todos.stream().filter(t -> t.getId() == id).map(t -> this.todos.indexOf(t)).findAny()
                .orElse(0);
        this.todos.set(indexOfOldTodo, todo);
        return this.getTodo(indexOfOldTodo);
    }

    @Override
    public boolean deleteTodo(int id) {
        return this.todos.remove(this.todos.stream().filter(t -> t.getId() == id).findFirst().get());
    }

    @Override
    public List<Todo> getTodos() {
        return this.todos;
    }

    @Override
    public Todo getTodo(int id) {
        return this.todos.stream().filter(t -> t.getId() == id).findFirst().get();
    }
}
