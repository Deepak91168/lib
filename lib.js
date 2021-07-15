function Book(name, author, publisher, type) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.type = type;
}

function Display() {}

Display.prototype.add = function (book) {
    console.log("adding");
    tablebody = document.getElementById("tablebody");
    let addbook = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td> 
                        <td>${book.publisher}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tablebody.innerHTML += addbook;
}

Display.prototype.clear = function () {
    let bookinfo = document.getElementById("bookinfo");
    bookinfo.reset();
};
Display.prototype.validate = function (book) {
    if(book.name.length <= 2 || book.author.length<=2 || book.publisher.length<=2){
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type,smessage){
    let alert = document.getElementById('alert');
    alert.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message </strong><br>${smessage}<br>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
    `
    setTimeout(() => {
        alert.innerHTML = '';
    },2500);
}
let bookinfo = document.getElementById("bookinfo");
bookinfo.addEventListener("submit", bookformsubmit);

function bookformsubmit(e) {
    e.preventDefault();
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let publisher = document.getElementById("publisher").value;
    let type;

    // Reference Book,Jouronal,Fiction,Documents and Reports,Others
    let Referencebook = document.getElementById("Referencebook");
    let Journal = document.getElementById("Journal");
    let fiction = document.getElementById("fiction");
    let dr = document.getElementById("dr");
    let others = document.getElementById("others");

    if (Referencebook.checked) {
        type = Referencebook.value;
    } else if (Journal.checked) {
        type = Journal.value;
    } else if (fiction.checked) {
        type = fiction.value;
    } else if (dr.checked) {
        type = dr.value;
    } else if (others.checked) {
        type = others.value;
    }

    let book = new Book(name, author, publisher, type);
    console.log(book);
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success', 'You book has been added succesfully!');
    }
    else{
        display.show('Error', 'Sorry! you cannot add this book each input must have more than 2 characters.');
    }
}
