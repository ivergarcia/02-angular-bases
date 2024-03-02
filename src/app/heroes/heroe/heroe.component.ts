import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = "ironman";
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} ${this.age}`;
  }

  changeName(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 45;
  }
}
