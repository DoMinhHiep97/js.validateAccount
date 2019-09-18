function validateAccount(str) {
    let regExp=/^[_a-z0-9]{6,}$/;
    return regExp.test(str);
}
let str1="123abc_";
let str2="_abc123";
let str3="______";
let str4="123456";
let str5="abcdefg";
let str6=".@";
let str7="12345";
let str8="1234_";
let str9="abcde";
console.log(validateAccount(str1));
console.log(validateAccount(str2));
console.log(validateAccount(str3));
console.log(validateAccount(str4));
console.log(validateAccount(str5));
console.log(validateAccount(str6));
console.log(validateAccount(str7));
console.log(validateAccount(str8));
console.log(validateAccount(str9));