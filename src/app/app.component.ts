import { Component, OnInit } from '@angular/core';

import { PathfinderService } from './core/services/pathfinder.service';

@Component({
  selector: 'pft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private pathfinderService: PathfinderService) { }

  ngOnInit(): void {
    this.pathfinderService.getAncestries();
  }

  title = 'PathfinderForFriends';

}
