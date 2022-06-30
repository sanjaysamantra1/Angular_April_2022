import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = false;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {}

  fetchUsers() {
    this.isLoading = true;
    this.usersService.getAllusers().subscribe((response: User[]) => {
      this.users = response;
      this.isLoading = false;
    });
  }
}
