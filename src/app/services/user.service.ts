import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private WebReqService : WebRequestService) { }
  login(email: string, password: string) {
    return this.WebReqService.login(email, password).pipe(
      shareReplay(),
      tap((res: ApiResponse) => {
        console.log("LOGGED IN!");
      })
    )
  }




}
