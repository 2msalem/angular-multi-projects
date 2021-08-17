import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from '../../projects/dashboard/src/app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [AppComponent, TestComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		// DashboardModule.forRoot(),
		BrowserAnimationsModule,
		ButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
