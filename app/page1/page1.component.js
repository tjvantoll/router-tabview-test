"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Page1Component = (function () {
    function Page1Component(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    Page1Component.prototype.navigate = function () {
        this.routerExtensions.navigate(["/page2"]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "my-page1",
            template: "\n    <Label (tap)='navigate()' text='Navigate to another page'></Label>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map