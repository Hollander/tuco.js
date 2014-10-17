/*
 number = ["+"|"-"]natNumber["."[natNumber]][("e"|"E")["+"|"-"]natNumber]
 natNumber = digit{digit}
 digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"
*/

var assert = require("assert");
var tuco = require('../tuco');
var toString = function(x){ return x.join(''); };

eval(tuco.nsImport('tuco'));

describe('numbers', function() {
    it('numbers not null', function(){
        // digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"
        var digit = or(charIs('0'),charIs('1'),charIs('2'));
        // natNumber = digit{digit}
        var natNumber = rep1(digit).map(toString);
        // ["+"|"-"]
        var sign = optional(or(charIs('+'),charIs('-')));
        // ["."[natNumber]]
        var fraction = optional(all(charIs('.'), natNumber)).map(toString);
        // [("e"|"E")["+"|"-"]natNumber]
        var exp = optional(all(or(charIs('e'),charIs('E')), sign, natNumber)).map(toString);
        // ["+"|"-"]natNumber["."[natNumber]][("e"|"E")["+"|"-"]natNumber]
        var number = all(sign, natNumber, fraction, exp).map(toString);
        
        var result = number('-012.12E-10zzzzz');
        
        assert(result != null);
        assert(result.value == '-012.12E-10');
        assert(result.rest == 'zzzzz');
    })
        
});