import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ancestry } from 'src/app/core/models/ancestry';
import { DataTranslationHelperService } from 'src/app/core/services/data-translation-helper.service';

import { PathfinderService } from 'src/app/core/services/pathfinder.service';
import { AncestryStoreService } from 'src/app/core/services/stores/ancestry-store.service';

@Component({
  selector: 'pft-ancestry',
  templateUrl: './ancestry.component.html',
  styleUrls: ['./ancestry.component.scss']
})
export class AncestryComponent implements OnInit {
  protected ancestries: Ancestry[] = [];

  constructor(
    private pathfinderService: PathfinderService,
    private ancestryStoreService: AncestryStoreService
  ) { }

  ngOnInit(): void {
    this.loadAncestries();

  }

  private loadAncestries(): void {
    this.pathfinderService.getAncestries()
      .subscribe(response => {
        const adaptedAncestries = DataTranslationHelperService.ancestryAdapter(response.results);
        this.ancestryStoreService.ancestries = adaptedAncestries;
      });

    this.ancestryStoreService.ancestries.subscribe((x: Ancestry[]) => {
      this.ancestries = x;
    });
  }
}
