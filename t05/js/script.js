'use strict'

function myCalculator(arg) {
    this.result = arg;
    this.init = function(num) {
        this.result = num;
        return this;
    };
    this.add = function(num) {
        this.result += num;
        return this;
    };
    this.sub = function(num) {
        this.result -= num;
        return this;
    };
    this.mul = function(num) {
        this.result *= num;
        return this;
    };
    this.div = function(num) {
        this.result /= num;
        return this;
    };
    this.alert = function() {
        setTimeout(alert , 5000, this.result);
        return this;
    };
}
