const accountId = 12345;

let acocuntEmail = "user@gmail.com"; // Block scope variable
var accountPassword = "password123"; // Function scope variable
accountCity = "New York"; // Global scope variable
let accountStae;

// accountId = 54321; // Error: Assignment to constant variable.
accountEmail = "admin@gmail.com";
accountPassword = "admin123";
accountCity = "Los Angeles";

console.log(accountId); // 12345

console.table([accountEmail, accountPassword, accountCity, accountState]);

// var not recommended for use in modern JavaScript development because of its scope.
