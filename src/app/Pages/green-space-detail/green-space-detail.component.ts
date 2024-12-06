import { Component, input, OnInit, inject } from '@angular/core';
import { GreenSpace } from '../../Models/greenSpace.model';
import { ActivatedRoute } from '@angular/router';
import { GreenSpaceSService } from '../../Services/green-space-s.service';

@Component({
  selector: 'app-green-space-detail',
  imports: [],
  templateUrl: './green-space-detail.component.html',
  styleUrl: './green-space-detail.component.scss',
  providers: [GreenSpaceSService],
})
export class GreenSpaceDetailComponent implements OnInit {
  constructor(private greenSpaceService: GreenSpaceSService) {}

  space: GreenSpace = {} as GreenSpace;
  private route = inject(ActivatedRoute);
  id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('mon params : ', params);
      this.id = params['id'];
      this.greenSpaceService.getOneGreenSpace(this.id).subscribe({
        next: (one) => {
          this.space = one;
        },
        error: (err) => {
          console.log("Erreur dans la récupération de l'espace", err);
        },
      });
    });
  }
}
