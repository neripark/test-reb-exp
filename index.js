// const reg = new RegExp("^https?:\/\/[^ "]+$/");
// const reg = new RegExp("^https?://.*\\..*");
// const reg = new RegExp("^https?://[^/? #]*\\..*");
// const reg = new RegExp("^https?://[a-zA-Z0-9\-]*\\..*");
const reg = new RegExp("^https?:\/\/.*");

// memo
// [^\x01-\x7E] 全角文字
// 文字クラス [] は、マッチさせたい表現とマッチさせたくない表現を一度に書くことはできない
// URLは全角も使えるので悩ましい、使ってはいけない文字列を列挙したほうが早そう

console.log("--- true ---")
console.log(reg.test("https://google.com")); // true
console.log(reg.test("https://google.jp/hogehoge/jovak?aaa=123")); // true
console.log(reg.test("http://google.com")); // true
console.log(reg.test("https://www.youtube.com/watch?v=2VQmwqWvLUw")); // true

console.log("--- false ---")
console.log(reg.test("https//google.com"));
console.log(reg.test("https://google"));
console.log(reg.test("https:/google.com"));
console.log(reg.test("aaaa https://google.com"));
console.log(reg.test("https://google/hogehoge.com"));
console.log(reg.test("https://google?hogehoge.com"));



//
let url = "<meta charset='utf-8'><a href=\"https://www.youtube.com/watch?v=xxxxxxxxxxxx\">https://www.youtube.com/watch?v=xxxxxxxxxxxx</a>";
const reg = /<.+?>/g;


console.log(reg.test(url));
console.log("trimmed", url.replace(reg, ""));
console.log("urlかどうか", /https?:\/\/.+/.test(url))

