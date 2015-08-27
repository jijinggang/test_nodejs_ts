if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="./typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = "world";
        this.names = ["Aarav", "Martin", "Shannon", "Ariana", "Kai"];
    }
    MyAppComponent.prototype.addTo = function (name) {
        this.names.push(name);
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n    <h1>I am {{name}}</h1>\n    <h1>Friends</h1>\n    <ul>\n      <li *ng-for=\"#name1 of names\">\n      {{ name1 }}\n      </li>\n    </ul>\n    <input #addtext>\n    <button (click)=\"addTo(addtext.value);addtext.value=''\">Add Friend</button>\n        " })
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
//# sourceMappingURL=ng1.js.map