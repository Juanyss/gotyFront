import { Component, OnInit } from '@angular/core';
import { JuegosInterface } from 'src/app/interfaces/juegos.interface';
import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any[] = [];

  constructor(private _gotyService:GotyService) {
    
  }

  ngOnInit(): void {
    this._gotyService.getGoty().subscribe((goty:JuegosInterface[]) => {
      goty.forEach(game => {
        this.games.push({name:game.name,value:game.votes})
      });
    })
  }

}
