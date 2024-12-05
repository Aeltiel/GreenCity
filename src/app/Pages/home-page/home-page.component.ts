import { Component } from '@angular/core';
import { GreenSpaceComponent } from '../../Composants/green-space/green-space.component';
import GreenCityDb from '../../../GreenCityDB.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [GreenSpaceComponent, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
  }
}
