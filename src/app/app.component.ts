import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  recipes: any = [];
  serverURL: any = env.SERVER_URL;
  selectedItem: any = {};
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.get('/recipes').subscribe(async (res) => {
      this.recipes = await res;
      this.selectRecipe(this.recipes[0]);
      this.isLoading = false;
    });
  }

  selectRecipe(row) {
    this.selectedItem = row;
  }
}
