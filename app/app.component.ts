import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
	selector: 'my-app', 
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css'] 
})

export class AppComponent {
	message: string = "Hello!";
	users: User[] = [
		{ id: 25, name: 'justin', username: 'jbeuck' },
		{	id: 26, name: 'Kelly', username: 'kbeuck' },
		{	id: 27, name: 'Stephanie', username: 'sKidder' }
	];
activeUser: User;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser)
	}

	onUserCreated(event) {
		this.users.push(event.user)
	}
} 