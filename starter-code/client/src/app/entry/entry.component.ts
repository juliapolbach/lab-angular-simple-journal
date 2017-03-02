import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [JournalEntriesService]
})
export class EntryComponent implements OnInit {
  contactId: string;
  singleJournal : Object;

  constructor(private route: ActivatedRoute, private journal : JournalEntriesService) { }

  ngOnInit() {
  this.route.params
  .subscribe((params) => {
  this.contactId = params['id'];
});
  this.journal.getEntry(this.contactId)
    .subscribe((singleJournal) => {
      console.log(singleJournal);
      this.singleJournal = singleJournal});
    }

}
