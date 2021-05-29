import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwiperOptions } from 'swiper';

@Component({ selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {
    config: SwiperOptions = {
        pagination: { 
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true 
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    }; 
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }
    //only number will be add
    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],    
            phonenumber: ['', [ Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(10), Validators.maxLength(10)]]        
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 5));
    }

    
}