import { Component, OnDestroy, OnInit } from '@angular/core';

import { SubSink } from 'subsink';

import { LoaderService } from './loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.scss' ]
})
export class LoaderComponent implements OnInit, OnDestroy {

  showLoader: boolean | undefined;

  private subs: SubSink = new SubSink();

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.loaderService.getLoaderState().subscribe(
        loaderState => this.showLoader = loaderState
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
