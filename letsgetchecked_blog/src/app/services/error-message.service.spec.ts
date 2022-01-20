import { TestBed } from '@angular/core/testing';

import { ErrorMessageService } from './error-message.service';

describe('ErrorMessageService', () => {
  let service: ErrorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push a message to the array when the addMessage method is called', (done: DoneFn) => {
    service.addMessage('New message');
    service.getMessages().subscribe((messages: string[]) => {
      expect(messages[0]).toBe('New message');
      done();
    });
  });
});
