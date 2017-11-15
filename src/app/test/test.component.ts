import { Component } from '@angular/core';
import { TestService } from './test.service';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css'],
	providers: [TestService]
})
export class TestComponent {
	constructor(private testService: TestService){
		this.testService.search_word('hello').subscribe(res => {
			console.log('Response received is ', res);
		})
	}
}
