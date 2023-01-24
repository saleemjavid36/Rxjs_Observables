import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number | any;

  constructor(private route: ActivatedRoute,private userService:UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActive(){
     // this.userService.activeEmmitter.emit(true)
    this.userService.activeEmmitter.next(true)
  }

}
