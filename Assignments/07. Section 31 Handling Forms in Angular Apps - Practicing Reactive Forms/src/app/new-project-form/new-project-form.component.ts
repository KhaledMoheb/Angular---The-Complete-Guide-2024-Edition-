import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const projectNameAsyncValidator = (control: any): Observable<any> => {
  const forbiddenName = 'Test';
  return of(control.value === forbiddenName ? { forbiddenName: true } : null).pipe(
    debounceTime(300)
  );
};

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  projectForm:FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required], [projectNameAsyncValidator]],
      mail: ['', [Validators.required, Validators.email]],
      projectStatus: ['Stable', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
    }
  }
}
