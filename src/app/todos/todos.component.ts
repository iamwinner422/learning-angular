import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todos.types';
import { catchError } from 'rxjs';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
    selector: 'app-todos',
    imports: [HighlightCompletedTodoDirective, FormsModule, FilterTodosPipe],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    providers: [TodosService]
})
export class TodosComponent implements OnInit{
    todosService = inject(TodosService);
    todosItems = signal<Array<Todo>>([]);
    searchTerm = signal('');

    ngOnInit(): void {
        this.todosService.getTodosFromApi().pipe(
            catchError((error: any) => {
                console.log(error)
                throw error
            })
        ).subscribe((todos) => {
            this.todosItems.set(todos)
        })
    }
}
