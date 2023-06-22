package dev.othmanfr.api.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Todo {
    private Integer id;
    private String description;
    private LocalDate createdAt;
    @Builder.Default
    private boolean isDone = false;
}
