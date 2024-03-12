import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(10)">Aumentar</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-10)">Decrementar</button>
  `,
})
export class counterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
     this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
