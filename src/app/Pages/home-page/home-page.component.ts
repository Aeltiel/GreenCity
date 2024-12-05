import { Component, OnInit } from '@angular/core';
import { GreenSpaceComponent } from '../../Composants/green-space/green-space.component';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { GreenSpace } from '../../Models/greenSpace.model';

@Component({
  selector: 'app-home-page',
  imports: [GreenSpaceComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [GreenSpaceSService],
})
export class HomePageComponent implements OnInit {
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
  }

  greenSpaces: GreenSpace[] = [];

  ngOnInit(): void {
    this.greenSpaceService.getGreenSpaces().subscribe({
      next: (space) => {
        console.log(space);
        this.greenSpaces = space;
      },
      error: (err) => {
        console.log('Erreur dans la récupération des espaces', err);
      },
    });
  }

  constructor(private greenSpaceService: GreenSpaceSService) {}
}
