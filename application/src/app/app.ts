import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderBar } from "./module/slider-bar/slider-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('application');
}
