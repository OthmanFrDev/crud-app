package dev.othmanfr.api.controller;


import dev.othmanfr.api.model.Todo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/todos")
public class TodoController {

    @GetMapping
    public ResponseEntity<Todo> getTodos(){
        return ResponseEntity.ok(new Todo());
    }
}
