import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
       
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule

    ],
    exports: [
        HeaderComponent,
    ]
})
export class HomeModule {

}