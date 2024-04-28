import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../api/services/passenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-passenger',
  templateUrl: './login-passenger.component.html',
  styleUrl: './login-passenger.component.css'
})
export class LoginPassengerComponent implements OnInit {

  requestedUrl?: string = undefined;
  constructor(private passengerService: PassengerService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.requestedUrl = p['requestedUrl']);
  }

  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])]
  })

  checkPassenger(): void {
    const params = { email: this.form.get('email')!.value ?? '', password: this.form.get('password')!.value ?? '' }
    this.passengerService
      .findPassenger(params)
      .subscribe(
        this.login, e => {
          if (e.status != 404)
            console.error(e)
        }
      );
  }

  register() {
    this.router.navigate(['/register-passenger'])
  }

  login = () => {
    this.authService.loginUser({ email: this.form.get('email')!.value ?? '', password: this.form.get('password')!.value ?? '' })
    this.router.navigate([this.requestedUrl ?? '/search-flights'])
  }
}
