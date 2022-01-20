import { Component, OnInit } from '@angular/core';
import {Agreement, PoliciesService, Policy} from '../../services/policies.service';
import {SessionTokenHolderService} from '../../services/session-token-holder.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    message: any;
    policies: Agreement;
    agreement: {};
    policy: Policy;
    selectedPolicy: Policy;

    constructor(private policiesService: PoliciesService, private sessionTokenHolderService: SessionTokenHolderService) {
        this.agreement = {};
        this.policy = {
            criticalIllnessCoverBenefitAmount: 0,
            disabilityCoverBenefitAmount: 0,
            hasOutOfHospitalCover: false,
            hospitalCoverOption: '',
            lifeCoverBenefitAmount: 0,
            monthlyPremiumAmount: 0,
            optionName: '',
            policyNumber: '',
            type: ''
        };
        // this.policies.agreements = [];
    }

    public ngOnInit(): void {
        this.policiesService.getAllPolicies().subscribe(response => {
            if (response) {
                this.policies = response;
                console.log(JSON.stringify(this.policies));
            } else {
                this.message = response;
            }
        }, error => {
            this.message = error.error.message;
            console.log(JSON.stringify(error));
        });
    }

    onPolicyNumberChange(value) {
        this.selectedPolicy = value;
        console.log(JSON.stringify(this.selectedPolicy));
    }
}
