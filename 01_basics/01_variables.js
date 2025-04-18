const accountId=14456
let accountEmail="Gaurav@google.com"
var accountPassword="1235"
accountCity="Lucknow"
let accountState;   //By default its value is undefined


// accountId=20142
accountEmail="GT@hf.com"
accountPassword="2135"
accountCity="Delhi"
console.log(accountId);

// Prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])