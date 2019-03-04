import { Component, OnInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterContentInit {

  @ContentChild('panel') panel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.panel.nativeElement.textContent);
  }

}
