import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  f1() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  f2() {
    window.alert('helloooo');
  }
}
