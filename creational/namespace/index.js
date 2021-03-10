var myApp = myApp || {};
myApp.utils =  {};

(function () {
    let val = 5;

    this.getValue = function () {
        return val;
    };

    this.setValue = function( newVal ) {
        val = newVal;
    }

    this.tools = {};

}).apply( myApp.utils );


(function () {
    this.diagnose = function(){
        return "diagnosis";
    }
}).apply( myApp.utils.tools );



console.log( myApp );

console.log( myApp.utils.getValue() );

myApp.utils.setValue( 25 );
console.log( myApp.utils.getValue() );

console.log( myApp.utils.tools.diagnose() );