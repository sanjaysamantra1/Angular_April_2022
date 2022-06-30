import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [],
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  name: string = 'sachin tendulkar';
  sachin_img: string =
    'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';
  flag: boolean = false;
  red: string = 'blue';

  obj1 = {
    a: 10,
  };

  f1() {
    alert('i am f1');
  }
  add(a: string, b: string) {
    alert(+a + +b);
  }
}
