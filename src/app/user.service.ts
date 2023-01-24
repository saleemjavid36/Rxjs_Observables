import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // activeEmmitter = new EventEmitter <boolean>()
  activeEmmitter = new Subject <boolean>()
  constructor() { }
}
