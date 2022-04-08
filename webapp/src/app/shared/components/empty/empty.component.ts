import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: [ './empty.component.scss' ]
})
export class EmptyComponent {

  @Input()
  emptyMessage: string = 'No data!';

  @Input()
  animate: boolean = true;

}
