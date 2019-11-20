const profile = {
    firstname: "ryo",
    familyname: "kamata",
    age:24,
    major: "computer science"
    hobby: "fitness",
    job:"teacher"
    families:"2cats"
};
const keys =object.keys(profile);

for(let i =0; i<keys.length;i=i+1){
    const key =keys[i];
    const value =profile[key];
    const text ="私の"+key+"は、"+value+"です。"
    console.log(text);
}
