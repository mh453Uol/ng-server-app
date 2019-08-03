import { ServerService } from './services/server.service';
import { ListItem } from './model/listItem';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('server') serverInput: ElementRef<HTMLInputElement>;

  items: ListItem[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {}

  onAddItem() {
    const value = this.serverInput.nativeElement.value;
    this.items.push(new ListItem(value));
    this.serverInput.nativeElement.value = '';
  }

  onSave() {
    this.serverService.addServers(this.items).subscribe(
      response => {
        console.log(response);
      });
  }
  onGetServers() {
    this.serverService.getServers().subscribe(
      (response) => {
        this.items = response;
        console.log(response);
      }
    )
  }
  trackByFn(index, item) {
    return item.id;
  }
}
