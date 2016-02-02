// we hebben een basis object voor alle teachers
var teacher = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// we maken een simpele functie die voor ons objecten kan maken
// dit is niet perse nodig, maar kan soms netjes zijn
function createTeacher(age, firstName, lastName){
    // we maken een nieuw leeg object aan met een prototype chain
    // naar het teacher object (zodat newTeacher ook bij fullName() mag)
    var newTeacher = Object.create(teacher);
    newTeacher.age = age;
    newTeacher.firstName = firstName;
    newTeacher.lastName = lastName;
    return newTeacher;
}

// we maken 3 leraren aan
berend = createTeacher(32, "Berend", "Weij");
jelle = createTeacher(40, "Jelle", "Sjollema");
ingrid = createTeacher(38, "Ingrid", "van Bovenkamp");

// we laten de volledige namen zien
console.log(berend.fullName());
console.log(ingrid.fullName());
console.log(jelle.fullName());

// als we nu de functie aanpassen in het object teacher
// dan geldt dit voor iedereen
teacher.fullName = function(){
    return "dit is niet meer je naam. Deze functie is aangepast :) ";
}

console.log(berend.fullName());
console.log(ingrid.fullName());
console.log(jelle.fullName());