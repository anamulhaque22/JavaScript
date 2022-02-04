//Person1 অবজেক্টে person1Description নামে মেথডে Person1 অবজেক্টের প্রপার্টিজ কনসলল লগ করছি। Person2 অবজেক্টে Person1 এর person1Description মেথড person2Description রাখছি (person2Description: Person1.person1Description)। এখন Person2 এর person2Description মেথড কল করলে Person2.person2Description(); Person2 এর প্রপার্টিজ কেন প্রিন্ট হচ্ছে?
//আবার Person2 অবজেক্টে Person1 এর person1Description মেথড person2Description রাখছি(person2Description: Person1.person1Description();)। এখন Person2 এর person2Description মেথড কল করলে Person2.person2Description(); Person2 এর প্রপার্টিজ কেন প্রিন্ট হচ্ছে ?

var Person1 = {
    name: "Anamul Haque",
    age: 21,
    university: "AIUB",
    person1Description: function () {
        console.log("Name: " + this.name + " Age: " + this.age + " University: " + this.university);
    }
}

var Person2 = {
    name: "Alex Akash",
    age: 24,
    person2Description: function(){
        Person1.person1Description();
    }
}
Person2.person2Description();
//console.log(Person2.person2Description);