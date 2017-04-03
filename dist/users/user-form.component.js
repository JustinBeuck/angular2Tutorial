"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.newUser = new user_1.User();
    }
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styles: ["\n\t\tform {\n\t\t\tpadding: 10px;\n\t\t\tbackground: #ECF0F1;\n\t\t\tborder-radius: 3px;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t"],
        template: "\n\t<form #form=\"ngForm\">\n\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': name.invalid && name.touch } \">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"name\" required\n\t\t\t[(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n\n\t\t\t<span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required.</span>\n\t\t</div>\n\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': username.invalid && username.touch }\" >\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" required\n\t\t\t[(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n\n\t\t\t<span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Username is required.</span>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">\n\t\t\tCreate User\n\t\t</button>\n\t</form>\n\t"
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map