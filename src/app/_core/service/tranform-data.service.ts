import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranformDataService {
private data = new BehaviorSubject(null);
public asData = this.data.asObservable();

  constructor() { }
}
