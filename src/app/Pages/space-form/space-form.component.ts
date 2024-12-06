import { Component, inject } from '@angular/core';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-form',
  imports: [ReactiveFormsModule],
  templateUrl: './space-form.component.html',
  styleUrl: './space-form.component.scss',
  providers: [GreenSpaceSService],
})
export class SpaceFormComponent {
  constructor(private greenSpaceService: GreenSpaceSService) {}

  private router = inject(Router);

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    superficie: new FormControl(''),
    plantes: new FormControl(''),
    responsable: new FormControl(''),
  });

  onSubmit() {
    const data = this.form.value;
    console.log(data);
    this.greenSpaceService.postGreenSpace(data).subscribe({
      next: (newSpace) => {
        newSpace = data;
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log("Erreur dans la récupérétion de l'espace", err);
      },
    });
  }
}
