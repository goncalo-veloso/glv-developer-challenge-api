import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private errorMessages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  public addMessage(message: string) {
    let currentMessages = this.errorMessages$.getValue();
    currentMessages.push(message);
    this.errorMessages$.next(currentMessages);
  }

  public removeMessage(index: number) {
    let currentMessages = this.errorMessages$.getValue();
    currentMessages.splice(index, 1);
    this.errorMessages$.next(currentMessages);
  }

  public getMessages(): Observable<string[]> {
    return this.errorMessages$.asObservable();
  }
}