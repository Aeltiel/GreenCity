import { Component, inject } from '@angular/core';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { GreenSpace } from '../../Models/greenSpace.model';
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
    image : new FormControl('')
  });

  onFileSelected(event :Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.get('image')!.setValue(file);
  }

  onSubmit() {
    const data = new FormData();
    data.append('nom', this.form.value.nom);
    data.append('latitude', this.form.value.latitude);
    data.append('longitude', this.form.value.longitude);
    data.append('superficie', this.form.value.superficie);
    data.append('responsable', this.form.value.responsable);
    data.append('image', this.form.get('image')!.value);
    
    console.log(data);
    this.greenSpaceService.postGreenSpace(data).subscribe({
      next: (newSpace : GreenSpace) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log("Erreur dans l'enregirstrement de l'espace", err);
      },
    });
  }
}
