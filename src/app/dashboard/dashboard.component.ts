import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string | undefined;
  Username: string | undefined;
  NoOfTeamMembers: number | undefined;
  TotalCostOfAllProjects: number | undefined;
  PendingTasks: number | undefined;
  UpComingProjects: number | undefined;
  ProjectCost: number | undefined;

  CurrentExpenditure: number | undefined;
  AvailableFunds: number | undefined;

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }

}
