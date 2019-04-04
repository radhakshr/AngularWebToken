import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user = [
    {name:"kishore",email:"kk@gm.com"},
    {name:"prathyusha",email:"pk@gm.com"}
  ];
}
