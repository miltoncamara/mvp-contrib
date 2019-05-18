import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private contrib: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contrib = this.formBuilder.group({
      type: ['', Validators.required],
      area: ['', Validators.required],
    });
  }
}
