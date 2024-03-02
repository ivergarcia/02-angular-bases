import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman', 'Thor'];
  public heroeRemove: string | undefined = '';

  removeHeroe(): void {
    this.heroeRemove = this.heroes.pop();
  }
}
