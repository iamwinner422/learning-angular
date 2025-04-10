import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.types';

@Injectable()
export class TodosService {
    http = inject(HttpClient);
    constructor() { }

    getTodosFromApi() {
        const uri = `https://jsonplaceholder.typicode.com/todos`;
        return this.http.get<Array<Todo>>(uri)
    }
}
