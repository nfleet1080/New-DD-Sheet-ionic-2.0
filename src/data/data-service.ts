import { SQLite } from 'ionic-native';
import { Injectable } from 'angular2/core';
import { Ability } from './models/Ability-model';
import { AdventuringGear } from './models/Adventuring-gear-model'
import { Alignment } from './models/Alignment-model';
import { Armor } from './models/Armor-model';
import { Background } from './models/Background-model';
import { Die } from './models/Die-model';
import { ClassModel } from './models/Class-model';
import { EquipmentPack } from './models/Equipment-pack-model';
import { EquipmentType } from './models/Equipment-type-model';
import { ItemCategory } from './models/Item-category-model';
import { Language } from './models/Language-model';
import { Skill } from './models/Skill-model'
import { Tool } from './models/Tool-model';
import { Weapon } from './models/Weapon-model';
import { Race } from './models/Race-model';
import { Character } from './models/Character-model';

@Injectable()
export class DataService {
    public abilities: Array<Ability> = [];
    adventuringGear: Array<AdventuringGear> = [];
    alignments: Array<Alignment> = [];
    armor: Array<Armor> = [];
    backgrounds: Array<Background> = [];
    classes: Array<ClassModel> = [];
    equipmentPacks: Array<EquipmentPack> = [];
    equipmentType: Array<EquipmentType> = [];
    itemCategory: Array<ItemCategory> = [];
    languages: Array<Language> = [];
    races: Array<Race> = [];
    skills: Array<Skill> = [];
    tools: Array<Tool> = [];
    weapons: Array<Weapon> = [];
    characters: Array<Character> = [];

    constructor() {
        //console.info("Data Service Initialized");

        // check for existence of data
        // Create a new instance of SQLite
        let db = new SQLite();
        db.openDatabase({
            name: 'char_gen.db',
            location: 'default' // the location field is required
        }).then(() => {
            // check if tables exist
            // if tables do not exist, create them and populate
            db.executeSql('SELECT * FROM tbl_classes', {}).then((rows) => {
                console.table(rows);
            }, (err) => {
                console.error('Unable to execute sql: ', err);
            });
            
        }, (err) => {
            console.error('Unable to open database: ', err);
        });
        // if db does not exist, create and populate
        // if db exists but no data, populate
        // if db and data exist, verify global data exists

    }


    /**
     * pulls the data from json files into local objects
     */
    loadJSONData() {
        
    }
    getCharacters() {
        // if no data in local variable, fetch them from db
        if (this.characters.length == 0) {
            
        } 
        return this.characters;
    }
    getAbilities() {
        // if no data in local variable, fetch them from db
        if (this.abilities.length == 0) {
            
        } 
        return this.abilities;
    }
    getRaces() {
        // if no data in local variable, fetch them from db
        if (this.races.length == 0) {
            
        } 
        return this.races;
    }
    getLanguages() {
        // if no data in local variable, fetch them from db
        if (this.languages.length == 0) {
            
        } 
        return this.languages;
    }
    getClasses() {
        // if no data in local variable, fetch them from db
        if (this.classes.length == 0) {
            
        } 
        return this.classes;
    }
    getBackgrounds() {
        // if no data in local variable, fetch them from db
        if (this.backgrounds.length == 0) {
            
        } 
        return this.backgrounds;
    }
    filterByID(obj: Array<any>, id: number) {
        return obj.filter(item => item.id === id)[0];
    }
}
