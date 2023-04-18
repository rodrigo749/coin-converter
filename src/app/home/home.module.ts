import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
       
    ],
    imports: [
        CommonModule,
        RouterModule,

    ],
    exports: [
        HeaderComponent,
    ]
})
export class HomeModule {

}