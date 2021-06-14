import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  topheroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        for(let i=0;i<heroes.length;i++){
          if(!heroes[i].flag){
            this.heroes.push(heroes[i])
          }
        }
      });
  }

  getTopHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        for(let i=0;i<heroes.length;i++){
          if(heroes[i].flag){
            this.topheroes.push(heroes[i])
          }
        }
      });
  }
}