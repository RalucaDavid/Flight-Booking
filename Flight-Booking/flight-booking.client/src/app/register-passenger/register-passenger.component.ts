import { Component, OnInit } from '@angular/core';
import { PassengerService } from './../api/services/passenger.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})
export class RegisterPassengerComponent implements OnInit{
  constructor(private passengerService: PassengerService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  requestedUrl?: string = undefined;

  form = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(35)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(35)])],
    gender: ['', Validators.required]
  })

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.requestedUrl = p['requestedUrl']);
  }

  register() {
    if (this.form.invalid)
      return;

    console.log("Form Values:", this.form.value);
    this.passengerService.registerPassenger({ body: this.form.value})
      .subscribe(
        () => {
          this.router.navigate([this.requestedUrl ?? '/login-passenger'])
        },
        error => {
          alert(error);
        }
      );
  }

  login = () => {
    this.router.navigate(['/login-passenger'])
  }
}

