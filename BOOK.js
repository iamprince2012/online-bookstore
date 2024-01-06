
function CreateAuthor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

let Author = new CreateAuthor("rajkumar", 1998, "india");

console.log(Author);

 function CreateBook (tital, author, genre, price){
    this.tital = tital;
    this.author = author;
    this.genre = genre;
    this.price = price;
 }

 let Book = new CreateBook("Rich Dad Poor Dad","Robert Kiyosaki","Personal finance",329 )

 console.log(Book)