import { Component } from '@angular/core';
import { GreenSpaceComponent } from '../../Composants/green-space/green-space.component';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { GreenSpace } from '../../Models/greenSpace.model';

@Component({
  selector: 'app-green-spaces-pages',
  imports: [GreenSpaceComponent],
  templateUrl: './green-spaces-pages.component.html',
  styleUrl: './green-spaces-pages.component.scss'
})
export class GreenSpacesPagesComponent {
  greenSpaces: GreenSpace[] = [];

  ngOnInit(): void {
    this.greenSpaceService.getGreenSpaces().subscribe({
      next: (space) => {
        this.greenSpaces = space;
      },
      error: (err) => {
        console.log('Erreur dans la récupération des espaces', err);
      },
    });
  }

  constructor(private greenSpaceService: GreenSpaceSService) {}
}
