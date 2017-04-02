import { Component } from '@angular/core'

@Component({
	selector: 'my-app', 
	template: `
	<header>
		<nav class="navbar navbar-inverse">
			<div class="navbar-header">
				<a href="/" class="navbar-brand">My Angular 2 App!</a>
			</div>
		</nav>
	</header>

	<main>

	<div class="row">
		<div class="col-sm-4">
			<div *ngIf="users">
				<ul class="list-group users-list" >
					<li *ngFor="let user of users" 
					(click)="selectUser(user)"
					[class.active]="user === activeUser"
					class="list-group-item">
						The user is {{user.name}} ({{ user.username }}).
					</li>
				</ul>
			</div>
		</div>
		<div class="col-sm-8">
			<div class="jumbotron" *ngIf="activeUser">
				<h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
			</div>

			<div class="jumbotron" *ngIf="!activeUser">
				<span class="glyphicon glyphicon-hand-left"></span>
				<h2>Choose a user</h2>
			</div>
		</div>
	</div>

	</main>
		<footer class="text-center">
			Copyright &copy; 2017
		</footer>
	`,
	styles: [
	`
	.users-list li { cursor: pointer; }
	.jumbotron .glyphicon { font-size: 80px;}
	`]
})

export class AppComponent {
	message = "Hello!";
	users = [
		{ id: 25, name: 'justin', username: 'jbeuck' },
		{	id: 26, name: 'Kelly', username: 'kbeuck' },
		{	id: 27, name: 'Stephanie', username: 'sKidder' }
	];
activeUser 

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser)
	}
} 