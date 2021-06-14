import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';//英雄类
import { HeroService } from '../hero.service';//英雄的增删改查等方法

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];//heroes是数组名
  h:Hero={
    id:0,
    name:'',
    flag:false
  }
  flag:boolean=false;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
     name = name.trim();
     if (!name) { return; }
     let flag=this.flag;
     this.heroService.addHero({ name,flag } as Hero)
       .subscribe(hero => {
         this.heroes.push(hero);
       });
       alert("添加成功！");
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  getRadio(): void{
    this.flag=true;
  }
  getRadio1(): void{
    this.flag=false;
  }

}