import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'test',
	},
	{
		path: 'test',
		component: TestComponent,
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('../../projects/dashboard/src/app/app.module').then(
				(m) => m.DashboardModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
