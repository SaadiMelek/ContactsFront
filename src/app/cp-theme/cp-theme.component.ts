import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cp-theme',
  templateUrl: './cp-theme.component.html',
  styleUrls: ['./cp-theme.component.css']
})
export class CpThemeComponent implements OnInit, AfterViewInit {

  @ViewChild('name')
  private elName : ElementRef;
  @ViewChild('city')
  private elCity : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.elName.nativeElement.value = "AAAAAAAAAAAAAAA";
      this.elName.nativeElement.style.backgroundColor = 'cyan';
      this.elName.nativeElement.style.color = 'red';
      this.elCity.nativeElement.style.backgroundColor = 'cyan';
      this.elCity.nativeElement.style.color = 'red';
    }, 3000);
  }

}
