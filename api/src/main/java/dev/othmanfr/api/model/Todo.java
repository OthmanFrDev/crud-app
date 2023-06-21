package dev.othmanfr.api.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Todo {
    private int id;
    private String description;
    private LocalDateTime createdAt;
    @Builder.Default
    private boolean isDone = false;
}
