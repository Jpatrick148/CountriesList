class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors(){
        
    
    }
    
}



var Merica = {name: "Merica",lang:"Merican",greeting:"Hello WOrld",colors:["Red","White","Blue"]}
var Canadia = {name:"Canadia",lang:"Le French",greeting:"Bonjour le monde",colors:["Red","White","White"]}
var Germany = {name: "Germany", lang:"German",greeting:"Hallo Welt",colors:["Black","Red","Gold"]}
var Finland = {name:"Finland",lang:"Finnish",greeting:"Perkele",colors:["White","Blue","Blue"]}
var Norway = {name:"Norway",lang:"Norwegian",greeting:"Helvete",colors:["Red","Blue","White"]}
var Greece = {name: "Greece", lang:"Greek", greeting:"Xaire",colors:["blue", "white", "white"]}
var IvoryCoast = {name:"Ivory Coast", lang:"French", greeting:"Bonjour le monde", colors:["orange", "white", "green"]}



function SwitchCountry(){
    let input = $("#CountryDropdown option:selected").val(); 
    var country;
    
    if(input === "Merica"){
         country = Merica;
    }
    else if (input === "Canadia"){
         country = Canadia;
    }
    else if(input === "Germany"){
         country = Germany;
    }
    else if (input === "Finland"){
         country = Finland;
    }
    else if(input === "Norway"){
     country = Norway;
    }
    else if (input === "IvoryCoast") {
        country = IvoryCoast;
    }
    else if (input === "Greece") {
        country = Greece;
    }


    $("#Color1").css("background-color",country.colors[0])
    $("#Color2").css("background-color",country.colors[1])
    $("#Color3").css("background-color",country.colors[2])

    $("#CountryName").text(country.name);
    $("#OfficialLanguage").text(country.lang);
    $("#HelloWorld").text(country.greeting);
}