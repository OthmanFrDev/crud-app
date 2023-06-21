package dev.othmanfr.api.controller;


import dev.othmanfr.api.model.Todo;
import dev.othmanfr.api.service.TodoService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/todos")
@CrossOrigin
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }
    @GetMapping
    public ResponseEntity<List<Todo>> getTodos(){
        return ResponseEntity.ok(this.todoService.getTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable int id){
        return ResponseEntity.ok(this.todoService.getTodo(id));
    }


    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody Todo todo){
        return new ResponseEntity<>(this.todoService.saveTodo(todo),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id,@RequestBody Todo todo){
        return new ResponseEntity<Todo>(this.todoService.updateTodo(id, todo), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable int id){
        this.todoService.deleteTodo(id);
        return new ResponseEntity<>("Todo deleted successfully", HttpStatus.ACCEPTED);
    }
}
