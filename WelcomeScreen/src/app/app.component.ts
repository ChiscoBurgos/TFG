import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company name';
}
