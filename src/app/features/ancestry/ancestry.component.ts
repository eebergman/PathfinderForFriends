import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Ancestry } from 'src/app/core/models/ancestry';
import { DataTranslationHelperService } from 'src/app/core/services/data-translation-helper.service';
import { PathfinderService } from 'src/app/core/services/pathfinder.service';
import { AncestryStoreService } from 'src/app/core/services/stores/ancestry-store.service';

@Component({
  selector: 'pft-ancestry',
  templateUrl: './ancestry.component.html',
  styleUrls: ['./ancestry.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AncestryComponent implements OnInit {
  protected ancestries: Ancestry[] = [];
  protected columnsToDisplay = ['name', 'hp', 'size', 'speed',];
  protected columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  protected expandedElement: Ancestry | null = null;

  constructor(
    private pathfinderService: PathfinderService,
    private ancestryStoreService: AncestryStoreService
  ) { }

  ngOnInit(): void {
    this.loadAncestries();
    this.ancestries.forEach(element => {
      console.log(element
      );
    });
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
