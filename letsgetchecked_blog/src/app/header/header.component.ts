import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorMessageService } from '../services/error-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Let's Get Checked - Blog";
  errorMessages: Observable<string[]> | undefined;

  constructor(private errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
    this.errorMessages = this.errorMessageService.getMessages();
  }

  removeMessage(index: number): void {
    this.errorMessageService.removeMessage(index);
  }

}
