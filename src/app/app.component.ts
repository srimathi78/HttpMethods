import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nature';
  router: any;
  Home(){
    const url = this.router.serializeUrl(
      this.router.createUrl(['/kuntala'])
    );
    window.open("_blank");
  }
}

