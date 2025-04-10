import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    //readonly count = new Subject<number>();
    private readonly count = new BehaviorSubject<number>(0);
    readonly count$ = this.count.asObservable();

    constructor() {
       // this.count.next(0); //Setting the initial value only when using Subject
    }

    increment() {
        this.count.next(this.count.value + 1);
    }
}
