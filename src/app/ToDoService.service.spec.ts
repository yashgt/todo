/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoService } from './ToDoService.service';

describe('Service: ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });

  it('should ...', inject([ToDoService], (service: ToDoService) => {
    expect(service).toBeTruthy();
  }));
});
