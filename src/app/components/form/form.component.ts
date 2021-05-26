import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;

  constructor() { 
    this.user = {
      name: '',
      lastname: '',
      bio: '',
      gender: ''
    }
  }

  ngOnInit(): void {
  }

}
