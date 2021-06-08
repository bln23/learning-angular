import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public name: string;
  public lastname: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){ 
    this.name = '',
    this.lastname = ''
  }

  ngOnInit(): void  {
    this._route.params.subscribe((params: Params) => {
      this.name = params.name;
      this.lastname = params.lastname;
    });
  }

  redirect(){
    this._router.navigate(['/page', 'Belen', 'Martinez']);
  }
}
