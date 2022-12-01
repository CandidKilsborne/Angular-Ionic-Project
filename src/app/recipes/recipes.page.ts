import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [{
    id: 'r1',
    title: 'Cool Ranch',
    imageUrl: 'https://via.placeholder.com/150',
    ingredients: ['I1', 'I2', 'I3']
  }];

  constructor() { }

  ngOnInit() {
  }

}
