import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  allComments: any;
  isLoading: boolean = false;

  constructor(private httpObj: HttpClient) {}

  ngOnInit(): void {}

  fetchComments() {
    this.isLoading = true;

    this.httpObj.get('https://jsonplaceholder.typicode.com/comments').subscribe(
      (response) => {
        this.isLoading = false;
        this.allComments = response;
      },
      (err) => {
        console.error('something went wrong!!!');
      }
    );
  }
}
