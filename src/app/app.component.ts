import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  itemName = 'Add an Item';
  done = [];
  todo = [];
  constructor () {}

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
  addToList() {
     this.todo.push(this.itemName);
  }
  removeTask(e) {
    this.todo.splice(e, 1);

  }
  sendBack(i) {
    this.todo.push(this.done[i]);
    this.done.splice(i, 1);
  }
}
