import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

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
  protected columnsToDisplay = ['name', 'hp', 'size', 'speed'];
  protected columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  protected expandedElement: Ancestry | null = null;
  protected dataSource = new MatTableDataSource(this.ancestries);
  protected archivesSearchLink = 'https://2e.aonprd.com/Search.aspx?q=';
  protected linkEnding = '&display=list';


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
      this.dataSource = new MatTableDataSource(x);
      console.log(x);

    });
  }

  protected formatHeaderText(header: string): string {
    return header.charAt(0).toUpperCase() + header.slice(1).toLowerCase();
  }
}
