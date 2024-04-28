// normal object
var tempObject = {
    name: "asd",
    age: 23,
    lang: ["a", "b"]
}

console.log(tempObject.name);

// object template
// constructor/initilizer
function Info(name, age, lang){
    this.name = name; // this diye each object er values denote kortese/ bujhte partese
    this.age = age;
    this.lang = lang;

    // function inside constructor
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.lang);
    }


}

var infoObject = new Info("aaaaaaaaa", 12, "bbbbbbbbbbb");

infoObject.display();

console.log(infoObject.lang);

