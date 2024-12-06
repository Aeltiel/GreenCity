import { Component, OnInit, inject } from '@angular/core';
import { GreenSpace } from '../../Models/greenSpace.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-green-space-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './green-space-detail.component.html',
  styleUrl: './green-space-detail.component.scss',
  providers: [GreenSpaceSService],
})
export class GreenSpaceDetailComponent implements OnInit {
  constructor(private greenSpaceService: GreenSpaceSService) {
    this.form = new FormGroup({
      nom: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      superficie: new FormControl(''),
      plantes: new FormControl(''),
      responsable: new FormControl(''),
    });
  }

  space: GreenSpace = {} as GreenSpace;
  private route = inject(ActivatedRoute);
  id: string = '';
  private router = inject(Router);

  form: FormGroup;

  onSubmit() {
    const data = this.form.value;
    console.log(data);
    this.greenSpaceService.patchGreenSpace(data, this.id).subscribe({
      next: (newSpace) => {
        newSpace = data;
      },
      error: (err) => {
        console.log("Erreur dans la modification de l'espace", err);
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('mon params : ', params);
      this.id = params['id'];
      this.greenSpaceService.getOneGreenSpace(this.id).subscribe({
        next: (one) => {
          this.space = one;
          console.log(this.space);
          this.form.setValue({
            nom: this.space.nom || '',
            latitude: this.space.latitude || '',
            longitude: this.space.longitude || '',
            superficie: this.space.superficie || '',
            plantes: this.space.plantes || '',
            responsable: this.space.responsable || '',
          });
        },
        error: (err) => {
          console.log("Erreur dans la récupération de l'espace", err);
        },
      });
    });
  }
  deleteSpace(id: string) {
    this.greenSpaceService.deleteGreenSpace(id).subscribe({
      next: () => {
        console.log('Espace vert supprimé avec succès');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'espace Vert", err);
      },
    });
  }
}
