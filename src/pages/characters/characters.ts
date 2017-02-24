import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../data/data-service';
import { Ability } from '../../data/models/Ability-model';
import { Character } from '../../data/models/Character-model';
import { ClassModel } from '../../data/models/Class-model';

/*
  Generated class for the Characters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class CharactersPage {

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  characters: Array<Character> = [];
  abilities: Array<Ability>;
  classes: Array<ClassModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataHelper: DataService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.characters = this.dataHelper.getCharacters();

    if (this.characters.length == 0) {
      this.characters = [
        new Character(),
        new Character(),
        new Character()
      ];
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharactersPage');
  }

}
