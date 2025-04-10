import { NgClass, NgIf, NgStyle, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { May } from './may';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgClass, NgStyle, FormsModule, NgIf, NgFor, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [May]
})
export class AppComponent implements OnInit {
    constructor(private may: May){}

    favoriteColorControl = new FormControl('');
    isSpecial = true;
    currentStyles: Record<string, string> = {};
    userName = "";

    listOfItems = [
        'Banana', 'Phone', 'Apple', 'XEA12', 'Pouloulou'
    ]


    ngOnInit (){
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
