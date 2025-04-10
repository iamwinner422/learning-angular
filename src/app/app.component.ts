import { NgClass, NgIf, NgStyle, NgFor, AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { May } from './may';
import { TodosComponent } from "./todos/todos.component";
import { FormComponent } from "./form/form.component";
import { CounterService } from './services/counter.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgClass, NgStyle, FormsModule, NgIf, NgFor, ReactiveFormsModule, TodosComponent, FormComponent, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [May]
})
export class AppComponent implements OnInit {
    readonly countService = inject(CounterService);
    count!: number
    constructor(private may: May) { }
    //may = inject(May)
    favoriteColorControl = new FormControl('');
    isSpecial = true;
    currentStyles: Record<string, string> = {};
    userName = "";

    listOfItems = [
        'Banana', 'Phone', 'Apple', 'XEA12', 'Pouloulou'
    ]



    ngOnInit() {
        //this.sub.subscribe((data) => console.log(`Sub3 ${data}`));
        //this.sub.next("Salut !");
        this.countService.count$.subscribe((value) => (this.count = value));
        this.setCurrentStyles();
        this.may.logMe();
    }

    setUppercaseName(name: string) {
        this.userName = name.toUpperCase();
    }
    setCurrentStyles() {
        this.currentStyles = {
            'font-size': this.isSpecial ? '24px' : '12px',
        }
    }
}
