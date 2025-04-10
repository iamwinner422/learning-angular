import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
    isCompleted = input(false);
    element = inject(ElementRef)
    //constructor() { }
    stylesEffect = effect(() => {
        if (this.isCompleted()) {
            this.element.nativeElement.style.textDecoration =  'line-trought';
        }else{
            this.element.nativeElement.style.textDecoration =  'none';
        }
    })
}
