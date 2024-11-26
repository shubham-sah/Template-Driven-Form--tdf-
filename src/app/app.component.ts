import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';

  userForm: any;

  topics = ['Angular', 'React', 'Vue'];

  onSubmit(userForm: any) {
    this.userForm = userForm;
    console.log(this.userForm);

    for (const fields in this.userForm) {
      if (this.userForm[fields] == null || this.userForm[fields] == '') {
        alert(`empty input field: ${fields}`);
      }
    }
  }
}
