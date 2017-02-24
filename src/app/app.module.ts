import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { characters } from '../pages/characters/CharactersPage';
import { characterDetails } from '../pages/character-details/CharacterDetailsPage';
import { generator } from '../pages/generator/GeneratorPage';

@NgModule({
  declarations: [
    MyApp,
    characters,
    characterDetails,
    generator
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    characters,
    characterDetails,
    generator
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
