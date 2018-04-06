import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActusService} from '../../services/actus.service';
import {Router} from '@angular/router';
import {Actus} from '../../models/actus.model';

@Component({
  selector: 'app-actus-form',
  templateUrl: './actus-form.component.html',
  styleUrls: ['./actus-form.component.scss']
})
export class ActusFormComponent implements OnInit {

  actusForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private actusService: ActusService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.actusForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
    });
  }

  onSaveNewActus() {
    const title = this.actusForm.get('title').value;
    const content = this.actusForm.get('content').value;
    const newActus = new Actus(title, content);
    this.actusService.createNewActus(newActus);
    this.router.navigate(['/auth', 'Admin-actus']);
  }

}
