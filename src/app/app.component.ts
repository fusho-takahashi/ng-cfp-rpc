import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { hc } from 'hono/client';
import { ApiRoute } from '../../functions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-cfp-rpc';
  client = hc<ApiRoute>('http://127.0.0.1:8788/api');

  async ngOnInit() {
    const res = await this.client.title.$get();
    const data = await res.json();
    this.title = data.title;
  }
}
