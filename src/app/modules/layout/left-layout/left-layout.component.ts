import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { BART_CATEGORY_CONSTANTS, BART_CONSTANTS, ELEMENT_DATA_CONSTANTS } from 'src/app/shared/constants';
import { ExampleFlatNode } from 'src/app/shared/interfaces';
import { BartModel, PeriodicElement } from 'src/app/shared/models';

@Component({
  selector: 'app-left-layout',
  templateUrl: './left-layout.component.html',
  styleUrls: ['./left-layout.component.scss']
})
export class LeftLayoutComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  BART_CATEGORY_CONSTANTS = BART_CATEGORY_CONSTANTS;
  ELEMENT_DATA_CONSTANTS = ELEMENT_DATA_CONSTANTS;
  BART_CONSTANTS = BART_CONSTANTS;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA_CONSTANTS);

  private _transformer = (node: BartModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSourceTree = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSourceTree.data = BART_CONSTANTS;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    this.treeControl.expandAll();
  }
}

