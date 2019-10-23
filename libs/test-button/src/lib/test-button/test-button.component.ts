import { Component, Input } from '@angular/core';

@Component({
  selector: 'zx-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.scss']
})
export class TestButtonComponent {

  @Input() text: string;

  click() {
    console.log('MANTECAS!!');
    alert('Eres un mantecas!!');
  }
}
