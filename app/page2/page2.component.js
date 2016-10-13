"use strict";
var core_1 = require("@angular/core");
var Page2Component = (function () {
    function Page2Component() {
    }
    Page2Component = __decorate([
        core_1.Component({
            selector: "my-page2",
            template: "\n    <TabView>\n      <StackLayout *tabItem=\"{title: 'Tab 1'}\">\n        <my-tab1></my-tab1>\n      </StackLayout>\n      <StackLayout *tabItem=\"{title: 'Tab 2'}\">\n        <my-tab2></my-tab2>\n      </StackLayout>\n    </TabView>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=page2.component.js.map