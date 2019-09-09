import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Titre1',
      content: 'Contenue pour le premier post.',
      loveits: 4,
      date_: new Date()
    },
    {
      title: 'Titre2',
      content: 'Contenue pour le deuxième post.',
      loveits: -1,
      date_: new Date()
    },
    {
      title: 'Titre3',
      content: 'Contenue pour le troisième post.',
      loveits: 0,
      date_: new Date()
    }
  ];
}
