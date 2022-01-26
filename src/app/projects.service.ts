import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    // var currentUser = { token: "" };
    // var headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");
    // if (sessionStorage['currentUser'] != "") {
    //   currentUser = JSON.parse(sessionStorage['currentUser']);
    //   headers = headers.set("Authorization", "Bearer "+currentUser.token);
    // }
    return this.httpClient.get<Project[]>("http://localhost:9090/api/Projects", {responseType: "json"})
    .pipe(map(
      (data: Project[]) => {
        for (let i=0; i<data.length; i++){
          data[i].teamSize = data[i].teamSize*10;
        }
        return data;
      }
    ));
  }

  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>("http://localhost:9090/api/Projects", newProject, {responseType: "json"});
  }

  updateProject(existingProject: Project): Observable<Project>{
    return this.httpClient.put<Project>("http://localhost:9090/api/Projects", existingProject, {responseType: "json"});
  }

  deleteProject(ProjectID: number): Observable<string>{
    return this.httpClient.delete<string>("http://localhost:9090/api/Projects?ProjectID=" + ProjectID);
  }

  searchProjects(searchBy: string, searchText:string): Observable<Project[]>{
    return this.httpClient.get<Project[]>("http://localhost:9090/api/Projects/search/" + searchBy + "/" + searchText, {responseType: "json"});
  }
}
