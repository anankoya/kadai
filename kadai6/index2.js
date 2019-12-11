const str1 ="abc"
const str2 ="'abc'"
const str3 ='"abc"'
const str4 ='{"a": undefined}'
const str5 ='{"a":123}'
const str6 ='{a: 123}'

//str1のバース結果
try{
    console.log(JSON.parse(str1))
}catch (error){
    console.log(error)
    //abcという文字列は正しいJSONではないから。
    //正しくは"abc"
}

//str2のバース結果
try{
    console.log(JSON.parse(str2))
}catch(error){
    console.log(error)
    //'abc'という文字列は正しいJSONではないから
    //正しくは"abc"
}


//str3のバース結果
try{
    console.log(JSON.parse(str3))
}catch(error){
    console.log(error)
    //"abc"は正しいJSONなのでバースできる
}
//..str6まで試してみる