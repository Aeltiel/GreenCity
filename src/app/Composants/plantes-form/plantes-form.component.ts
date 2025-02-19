import { Component, inject, OnInit } from '@angular/core';
import { PlanteServiceService } from '../../Services/plante-service.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Plante } from '../../Models/plantes.model';

@Component({
  selector: 'app-plantes-form',
  imports: [ReactiveFormsModule],
  templateUrl: './plantes-form.component.html',
  styleUrl: './plantes-form.component.scss',
  providers: [PlanteServiceService],
})
export class PlantesFormComponent implements OnInit {
  constructor(private PlanteService: PlanteServiceService) {}
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  espaceVert: string = '';

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    nomScientifique: new FormControl(''),
    typeSol: new FormControl(''),
    exposition: new FormControl(''),
    arrosage: new FormControl(''),
    saisonPlantation: new FormControl(''),
    recolte: new FormControl(''),
    espaceVert: new FormControl(''),
    image : new FormControl('')
  });
  onFileSelected(event :Event) {
      const file = (event.target as HTMLInputElement).files![0];
      this.form.get('image')!.setValue(file);
    }
  
    onSubmit() {
      const data = new FormData();

      data.append('nom', this.form.value.nom);
      data.append('nomScientifique', this.form.value.nomScientifique);
      data.append('typeSol', this.form.value.typeSol);
      data.append('exposition', this.form.value.exposition);
      data.append('arrosage', this.form.value.arrosage);
      data.append('saisonPlantation', this.form.value.saisonPlantation);
      data.append('recolte', this.form.value.recolte);
      data.append('espaceVert', this.espaceVert);
      data.append('image', this.form.get('image')!.value);

      console.log(data);
      this.PlanteService.postPlante(this.espaceVert, data).subscribe({
        next: (newplante : Plante) => {
          location.reload();
        },
        error: (err) => {
          console.log("Erreur dans l'enregirstrement de la plante", err);
        },
      });
    }

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        console.log('mon params : ', params);
        this.espaceVert = params['id'];
    }) 
    }
}
