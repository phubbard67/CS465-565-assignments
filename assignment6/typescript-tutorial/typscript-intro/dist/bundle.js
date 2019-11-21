(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Codelab = /** @class */ (function () {
    function Codelab(guests) {
        this.guests = guests;
    }
    Codelab.prototype.getGuestsComing = function () {
        return this.guests.filter(function (guest) { return guest.coming; });
    };
    return Codelab;
}());
exports.Codelab = Codelab;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Codelab_1 = require("./Codelab");
// Use this file for reference.
var guests = [
    {
        coming: true,
        name: "Sir Isaac Newton"
    },
    {
        coming: true,
        name: "Marie Curie"
    },
    {
        coming: true,
        name: "Albert Einstein"
    },
    {
        coming: false,
        name: "Charles Darwin"
    }
];
var codelab = new Codelab_1.Codelab(guests);
// Angular is so much better than this:
document.body.innerHTML = '<ul>' +
    codelab.getGuestsComing().map(function (guest) { return "<li>" + guest.name + "</li>"; }).join('') +
    '</ul>';
},{"./Codelab":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29kZWxhYi50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTtJQUNJLGlCQUFtQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUUsQ0FBQztJQUUxQyxpQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDBCQUFPOzs7O0FDRHBCLHFDQUFvQztBQUdwQywrQkFBK0I7QUFFL0IsSUFBTSxNQUFNLEdBQVk7SUFDdEI7UUFDRSxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxrQkFBa0I7S0FDekI7SUFDRDtRQUNFLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLE1BQU0sRUFBRSxJQUFJO1FBQ1osSUFBSSxFQUFFLGlCQUFpQjtLQUN4QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCO0NBQUMsQ0FBQztBQUVMLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQyx1Q0FBdUM7QUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTTtJQUM5QixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsU0FBTyxLQUFLLENBQUMsSUFBSSxVQUFPLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2xGLE9BQU8sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7R3Vlc3R9IGZyb20gJy4vR3Vlc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvZGVsYWJ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ3Vlc3RzOiBBcnJheTxHdWVzdD4pe31cclxuXHJcbiAgICBnZXRHdWVzdHNDb21pbmcoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ3Vlc3RzLmZpbHRlcihndWVzdCA9PiBndWVzdC5jb21pbmcpO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IENvZGVsYWIgfSBmcm9tICcuL0NvZGVsYWInO1xyXG5pbXBvcnQgeyBHdWVzdCB9IGZyb20gJy4vR3Vlc3QnO1xyXG5cclxuLy8gVXNlIHRoaXMgZmlsZSBmb3IgcmVmZXJlbmNlLlxyXG5cclxuY29uc3QgZ3Vlc3RzOiBHdWVzdFtdID0gW1xyXG4gIHtcclxuICAgIGNvbWluZzogdHJ1ZSxcclxuICAgIG5hbWU6IGBTaXIgSXNhYWMgTmV3dG9uYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29taW5nOiB0cnVlLFxyXG4gICAgbmFtZTogYE1hcmllIEN1cmllYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29taW5nOiB0cnVlLFxyXG4gICAgbmFtZTogYEFsYmVydCBFaW5zdGVpbmBcclxuICB9LFxyXG4gIHtcclxuICAgIGNvbWluZzogZmFsc2UsXHJcbiAgICBuYW1lOiBgQ2hhcmxlcyBEYXJ3aW5gXHJcbiAgfV07XHJcblxyXG5jb25zdCBjb2RlbGFiID0gbmV3IENvZGVsYWIoZ3Vlc3RzKTtcclxuXHJcbi8vIEFuZ3VsYXIgaXMgc28gbXVjaCBiZXR0ZXIgdGhhbiB0aGlzOlxyXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8dWw+JyArXHJcbiAgY29kZWxhYi5nZXRHdWVzdHNDb21pbmcoKS5tYXAoKGd1ZXN0OiBHdWVzdCkgPT4gYDxsaT4ke2d1ZXN0Lm5hbWV9PC9saT5gKS5qb2luKCcnKSArXHJcbiAgJzwvdWw+JztcclxuIl19
