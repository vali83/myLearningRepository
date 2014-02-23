/**
 * Created by vali on 1/18/14.
 */

//  path uses ./ to indicate that module exists within the same directory
//  as application script
var currency = require('./currency');


console.log('50 Canadian dollars equals this amount of US dollars: ');
//  use currency module's canadianToUS function
console.log(currency.canadianToUS(50));


console.log('30 US dollars equals this amount of Canadian dollars: ');
//  use currency module's canadianToUS function
console.log(currency.USToCanadian(30));


