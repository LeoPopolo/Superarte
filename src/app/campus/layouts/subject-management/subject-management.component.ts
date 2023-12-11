import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.scss']
})
export class SubjectManagementComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(
    private subjectServices: SubjectService
  ) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectServices.getSubjects().subscribe(data => {
      this.subjects = data.data;
      console.log(this.subjects);

    });
  }

}
