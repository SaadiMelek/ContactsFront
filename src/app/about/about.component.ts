import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/model.student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos = {name:'melek', email: 'saadi.melek@hotmail.com'};

  parentTitle = 'Parent Component (About component)';

  //Property for child component one
  //cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Narendra', 'Modi');

  //Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  constructor() { }

  ngOnInit() {
    console.log('Intialisation AboutComponent !!!');
  }

  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname ;
  }
  printSum(res) {
    this.sum = res;
  }
  printMsg(msg) {
    this.msg = msg;
  }
}
