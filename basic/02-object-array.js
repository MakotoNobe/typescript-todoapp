"use strict";
// オブジェクトの型定義をするには`interface`を使います。
// 構文は下記の通りです。
// オブジェクトの型定義をする時の構文は下記の通りです。
// const 変数名: interface名 = {
//   key名: value
// }
// 例
var user = {
    firstName: "山田",
    lastName: "太郎",
    age: 22,
    isAdult: true,
    //   remarks: "備考",　// 有っても無くもOK
    //   test: "テスト", // Userインターフェイスに無いkeyはエラーになる
};
console.log(user);
