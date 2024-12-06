import { Component, OnInit } from '@angular/core';
import { GreenSpaceComponent } from '../../Composants/green-space/green-space.component';
import { GreenSpaceSService } from '../../Services/green-space-s.service';
import { GreenSpace } from '../../Models/greenSpace.model';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  imports: [GreenSpaceComponent, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [GreenSpaceSService],
})
export class HomePageComponent implements OnInit {
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
      },
      error: (err) => {
        console.log("Erreur dans la récupérétion de l'espace", err);
      },
    });
  }

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
