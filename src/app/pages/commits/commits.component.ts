import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Commit } from 'src/app/core/models/commit.model';
import { CommitsService } from 'src/app/core/services/commits.service';


@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'message', 'email', 'author',];
  toggleControl = new FormControl<'fe' | 'be'>('fe', { nonNullable: true });
  commits: Commit[] = [];
  loading = true;

  constructor(
    private commitsService: CommitsService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges
      .subscribe(val => {
        this.loadData(val);
    })

    this.loadData('fe');
  }

  loadData(repo: 'fe' | 'be') {
    this.loading = true;
    this.commitsService.getCommits(repo)
      .subscribe(res => {
        this.loading = false;
        this.commits = res
      }, () => {
        this.snackBar.open('An error has ocurred, please refresh the page')
      });
  }

}
