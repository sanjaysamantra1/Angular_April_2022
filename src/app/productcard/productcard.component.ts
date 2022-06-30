import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
  inputs:['prod']
})
export class ProductcardComponent implements OnInit {
  prod:any;

  constructor() { }

  ngOnInit(): void {
  }

}
