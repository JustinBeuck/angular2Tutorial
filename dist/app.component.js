"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello!";
        this.users = [
            { id: 25, name: 'justin', username: 'jbeuck' },
            { id: 26, name: 'Kelly', username: 'kbeuck' },
            { id: 27, name: 'Stephanie', username: 'sKidder' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<header>\n\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My Angular 2 App!</a>\n\t\t\t</div>\n\t\t</nav>\n\t</header>\n\n\t<main>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div *ngIf=\"users\">\n\t\t\t\t<ul class=\"list-group users-list\" >\n\t\t\t\t\t<li *ngFor=\"let user of users\" \n\t\t\t\t\t(click)=\"selectUser(user)\"\n\t\t\t\t\t[class.active]=\"user === activeUser\"\n\t\t\t\t\tclass=\"list-group-item\">\n\t\t\t\t\t\tThe user is {{user.name}} ({{ user.username }}).\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-8\">\n\t\t\t<div class=\"jumbotron\" *ngIf=\"activeUser\">\n\t\t\t\t<h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"jumbotron\" *ngIf=\"!activeUser\">\n\t\t\t\t<span class=\"glyphicon glyphicon-hand-left\"></span>\n\t\t\t\t<h2>Choose a user</h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t</main>\n\t\t<footer class=\"text-center\">\n\t\t\tCopyright &copy; 2017\n\t\t</footer>\n\t",
        styles: [
            "\n\t.users-list li { cursor: pointer; }\n\t.jumbotron .glyphicon { font-size: 80px;}\n\t"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map