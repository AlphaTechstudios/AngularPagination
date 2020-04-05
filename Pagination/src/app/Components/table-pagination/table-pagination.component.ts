import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user-model';
import { FakeModelsServiceService } from 'src/app/Services/fake-models-service.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {
  public page = 1;
  public pageSize = 10
  public usersList: Array<UserModel> = [];
  constructor(private fakeService: FakeModelsServiceService) { }

  ngOnInit(): void {
    this.usersList = this.fakeService.getUsers();
  }
}
