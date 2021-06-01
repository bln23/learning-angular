import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  public field: string;

  constructor() { 
    this.user = {
      name: '',
      lastname: '',
      biografy: '',
      gender: ''
    }
    this.field = '';
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado");
    console.log(this.user);
  }

  hasClickGiven(){
    alert('has dado click');
  }

  haveLeft(){
    alert('Has salido');
  }

  havePush(){
    alert("has pulsado enter");
  }
}
