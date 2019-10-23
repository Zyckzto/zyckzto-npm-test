import { async, TestBed } from '@angular/core/testing';
import { TestButtonModule } from './test-button.module';

describe('TestButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestButtonModule).toBeDefined();
  });
});
