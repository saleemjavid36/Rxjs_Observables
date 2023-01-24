import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivated=false;
  private activateSubsciption:Subscription | any

  constructor(private userService:UserService) {}
  
  ngOnInit() {
    this.activateSubsciption = this.userService.activeEmmitter.subscribe(didActivate =>{
      this.userActivated= didActivate
    })
  }
  

  ngOnDestroy(): void {
    this.activateSubsciption.unsubscribe()
  }
}
