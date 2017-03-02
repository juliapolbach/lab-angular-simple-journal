import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalEntriesService]
})
export class EntryListComponent implements OnInit {
   entry: any;
  constructor(private entries: JournalEntriesService) { }

  ngOnInit() {
    this.entries.getRandom().
      subscribe((entries)=> {
        this.entry = entries
      })
  }
}
