import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
	isLoaded = false;
	items: MenuItem[] = [];

	constructor() {
		setTimeout(() => {
			this.isLoaded = true;
		}, 5000);
	}

	ngOnInit(): void {
		this.items = [
			{
				label: 'File',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-plus',
						items: [
							{
								label: 'Project',
								command(event) {
									console.log('called');
									console.log(event);
								},
							},
							{ label: 'Other' },
						],
					},
					{ label: 'Back' },
					{ label: 'Quit' },
				],
			},
			{
				label: 'Edit',
				icon: 'pi pi-fw pi-pencil',
				items: [
					{ label: 'Delete', icon: 'pi pi-fw pi-trash' },
					{ label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
				],
			},
		];
	}
}
