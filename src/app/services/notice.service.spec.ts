/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoticeService } from './notice.service';

describe('NoticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeService]
    });
  });

  it('should ...', inject([NoticeService], (service: NoticeService) => {
    expect(service).toBeTruthy();
  }));
});
