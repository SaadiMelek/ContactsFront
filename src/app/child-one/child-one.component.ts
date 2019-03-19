import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../model/model.student';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input()
  ctMsg : string;

  @Input('ctArray')
  myctArray : Array<string>

  @Input('studentAddMsg')
  addMsg : string;

  @Output('addStudentEvent')
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  childTitle = '---Child One---';
  message = 'Send Message'
  msg : string;

  addStudent() {
    this.addStdEvent.emit(this.student);
  }
  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

  constructor() { }

  ngOnInit() {
  }
}
