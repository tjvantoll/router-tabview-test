"use strict";
var page1_component_1 = require("./page1/page1.component");
var page2_component_1 = require("./page2/page2.component");
exports.appRoutes = [
    { path: "", component: page1_component_1.Page1Component },
    { path: "page2", component: page2_component_1.Page2Component }
];
exports.navigatableComponents = [
    page1_component_1.Page1Component,
    page2_component_1.Page2Component
];
//# sourceMappingURL=app.routing.js.map