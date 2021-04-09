import { Component, OnInit  } from '@angular/core';
import { GotyService } from '../../services/goty.service';
import { JuegosInterface } from '../../interfaces/juegos.interface';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games:JuegosInterface[] = [];
  results:any[] = [];  

  constructor(private _gotyService:GotyService) { }

  ngOnInit(): void {
    this._gotyService.getGoty().subscribe((goty:JuegosInterface[]) => {
      this.games = goty
    })        
  }

  voteGame(id:number){
    this._gotyService.voteGame(id).subscribe((games:JuegosInterface[]) => {
      this.results = []
      games.forEach(game => {
        this.results.push({name:game.name,value:game.votes})
      });    
    });
    
  }

}
