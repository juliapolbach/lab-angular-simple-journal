var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';
var EntryComponent = (function () {
    function EntryComponent(route, journal) {
        this.route = route;
        this.journal = journal;
    }
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.contactId = params['id'];
        });
        this.journal.getEntry(this.contactId)
            .subscribe(function (singleJournal) {
            console.log(singleJournal);
            _this.singleJournal = singleJournal;
        });
    };
    return EntryComponent;
}());
EntryComponent = __decorate([
    Component({
        selector: 'app-entry',
        templateUrl: './entry.component.html',
        styleUrls: ['./entry.component.css'],
        providers: [JournalEntriesService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, JournalEntriesService])
], EntryComponent);
export { EntryComponent };
//# sourceMappingURL=../../../../src/app/entry/entry.component.js.map