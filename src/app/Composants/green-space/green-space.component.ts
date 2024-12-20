import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GreenSpace } from '../../Models/greenSpace.model';

@Component({
  selector: 'app-green-space',
  imports: [RouterLink],
  templateUrl: './green-space.component.html',
  styleUrl: './green-space.component.scss',
})
export class GreenSpaceComponent {
  space = input<GreenSpace>({} as GreenSpace); //récupère les données.
}
