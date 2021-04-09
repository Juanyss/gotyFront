import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GotyService } from '../../services/goty.service';
import { JuegosInterface } from '../../interfaces/juegos.interface';
import { interval, pipe } from 'rxjs';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnChanges,OnDestroy{

  @Input() results: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights'

  interval;

  constructor( private _gotyService:GotyService) {
    // this.interval = setInterval(() => {
    //   this._gotyService.getGoty().subscribe((goty:JuegosInterface[]) => {
    //     this.results = [];
    //     goty.forEach(game => {
          
    //       this.results.push({name:game.name,value:game.votes})
    //     });
    //   })
    // }, 1500)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this._gotyService.getGoty().subscribe((goty:JuegosInterface[]) => {
          this.results = [];
          goty.forEach(game => {
            
            this.results.push({name:game.name,value:game.votes})
          });
        })
  }
  ngOnDestroy(): void {
    this.interval;
  }
  

  onSelect(event) {
    console.log(event);
  }

  
}
