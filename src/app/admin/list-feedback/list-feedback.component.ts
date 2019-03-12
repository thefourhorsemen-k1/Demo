import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../shared/feedback.service';
import {Feedback} from '../../shared/feedback.model';
import {EmailFormComponent} from '../email-form/email-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  isPopupOpened = true;

  constructor(private dialog: MatDialog,
              private feedbackservice: FeedbackService) { }


  ngOnInit() {
    this.feedbackservice.getList();
  }

  editFeedback(row) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EmailFormComponent, {
      maxWidth: '60%',
      autoFocus: true
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteFeedback(id: number) {
    this.feedbackservice.deleteFeedback(id).subscribe(res => this.feedbackservice.getList());
  }
}
