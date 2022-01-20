import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionTokenHolderService} from './session-token-holder.service';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private http: HttpClient, private sessionTokenHolderService: SessionTokenHolderService) { }

  getAllPolicies(): Observable<Agreement> {
    return this.http.get<Agreement>('/getall', { headers : new HttpHeaders({
        Authorization: this.sessionTokenHolderService.token.token
      }) });
  }
}
export interface Policy {
  type: string;
  policyNumber: string;
  monthlyPremiumAmount: number;
  optionName: string;
  hospitalCoverOption: string;
  hasOutOfHospitalCover: boolean;
  lifeCoverBenefitAmount?: number;
  criticalIllnessCoverBenefitAmount?: number;
  disabilityCoverBenefitAmount?: number;
}
export interface Agreement {
  agreements: Policy[];
}
