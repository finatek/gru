import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showLoader(): void {
    this.loaderState.next(true);
  }

  hideLoader(): void {
    this.loaderState.next(false);
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderState.asObservable();
  }

}
