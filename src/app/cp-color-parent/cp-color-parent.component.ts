import {Component, OnInit, ViewChild} from '@angular/core';
import {CpColorDirective} from '../cp-color.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cp-color-parent.component.html',
  styleUrls: ['./cp-color-parent.component.css']
})
export class CpColorParentComponent implements OnInit {

  @ViewChild(CpColorDirective)
  private cpColorDirective: CpColorDirective;

  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
