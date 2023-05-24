import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddPostComponent {
  post = {
    image: '',
    title: '',
    text: ''
  };


  constructor(private dataService: DataService, public router: Router) {
  }


  addPost() {
    this.dataService.addPost(this.post).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }
}