import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = signal('');
  constructor(private readonly httpClient: HttpClient) {

   }
   ngOnInit(): void {
      this.httpClient.get('http://localhost:3000/urko').subscribe( ({name}: any) => {
          this.title.set(name as string);
          console.log(name);
      } );
   }
}
