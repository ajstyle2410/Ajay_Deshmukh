import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderBar } from "./module/slider-bar/slider-bar";
import { UserPanel } from "./USER/user-panel/user-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderBar,UserPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('application');
}
