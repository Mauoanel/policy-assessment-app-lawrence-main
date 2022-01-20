import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SessionTokenHolderService} from '../../services/session-token-holder.service';
import {Validator} from '../../directives/validator';

class UserCredentials {
    username: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public userCred: UserCredentials;
    message: string;

    constructor(private router: Router,
                private sessionTokenHolderService: SessionTokenHolderService,
                private authService: AuthService) {

    }

    public ngOnInit(): void {
        this.userCred = {password: '', username: ''};
    }

    public login(form: NgForm): void {

        console.log(form.value);

        this.userCred = form.value;

        // const usernameHasVal = Validator.hasValue(this.userCred.username);
        // const passwordHasVal = Validator.hasValue(this.userCred.password);

        // if (usernameHasVal && passwordHasVal) {
        const isEqualIgnoreCase = Validator.isEqualIgnoreCase(this.userCred.username, this.userCred.password);

        if (isEqualIgnoreCase === true) {
            // show message to customer
            this.message = 'Username and Password must be unique';
        } else {
            this.authService.login(form.value).subscribe(response => {
                if (response) {
                    this.sessionTokenHolderService.token = response;
                    this.router.navigate(['/dashboard']);
                } else {
                    this.message = response.error;
                }
            }, error => {
                this.message = error.error.message;
                console.log(JSON.stringify(error));
                this.userCred = {password: '', username: ''};
            });
        }
    }
}
