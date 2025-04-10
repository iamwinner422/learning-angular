import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    formGroup: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required, Validators.minLength(4)
        ]),
        role: new FormControl('', [
            Validators.required
        ])
    })

    get name() {
        return this.formGroup.get('name');
    }
    get role() {
        return this.formGroup.get('role')
    }

    onFormSubmit() {
        console.log(this.formGroup.value)
    }
}
