import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-green-space',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './green-space.component.html',
  styleUrl: './green-space.component.scss',
})
export class GreenSpaceComponent {}
