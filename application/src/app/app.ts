import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderBar } from "./module/slider-bar/slider-bar";
import { UserPanel } from "./USER/user-panel/user-panel";
import { AddProjectRequirement } from "./USER/add-project-requirement/add-project-requirement";

@Component({
  selector: 'app-root',
  imports: [AddProjectRequirement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('application');
}
