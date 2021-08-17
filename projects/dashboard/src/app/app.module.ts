import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/home/home.component';
import { MainModule } from './main/main.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		// BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [HomeComponent],
})
export class DashboardModule {
	// static forRoot(): ModuleWithProviders<MainModule> {
	// 	return {
	// 		ngModule: MainModule,
	// 		providers: [],
	// 	};
	// }
}
