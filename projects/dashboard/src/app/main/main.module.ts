import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenubarModule } from 'primeng/menubar';
import { DockModule } from 'primeng/dock';
import { ListboxModule } from 'primeng/listbox';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
	declarations: [MainComponent],
	imports: [
		CommonModule,
		MainRoutingModule,
		MenubarModule,
		DockModule,
		ListboxModule,
		CascadeSelectModule,
	],
})
export class MainModule {}
