/**
 * Leitor de livro
 * Minha biblioteca digital
 */


// function createBook(id: string, title: string, author: string, pages: number, currentPage: number): Book {
//     return {
//         id,
//         title,
//         author,
//         pages,
//         currentPage
//     }
// }

// createBook('1', 'Harry Potter', 'J. K. Rowling', 200, 100);
// const book = new Book('Harry Potter', 'J. K. Rowling', 200);

class Book {
    readonly id: string;
    title: string;
    author: string;
    pages: number;
    currentPage: number;

    constructor(title: string, author: string, pages: number) {
        this.id = Math.random().toString();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.currentPage = 0;
    }
    
    nextPage(): void {
        if (this.currentPage < this.pages) {
            this.currentPage = this.currentPage + 1;
        }
    }

    prevPage(): void {
        if (this.currentPage > 0) {
            this.currentPage = this.currentPage - 1;
        }
    }

    goToPage(page: number): void {
        this.currentPage = page;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addBooks(books: Book[]): void {
        this.books = this.books.concat(books);
    }

    searchBooksByTitle(title: string): Book[] {
        return this.books.filter((book) => {
            return book.title === title;
        });
    }

    removeBook(book: Book): void {
        const bookIndex = this.books.findIndex((bookItem) => {
            return bookItem.id === book.id;
        });

        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
        }
    }

    listBooks(): void {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
}

const library = new Library();

const HarryPotter = new Book('Harry Potter', 'J. K. Rowling', 200);
const SenhorDosAneis = new Book('Senhor dos Anéis', 'J. R. R. Tolkien', 300);
const OPequenoPrincipe = new Book('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 100);

library.addBook(HarryPotter);
library.addBook(SenhorDosAneis);
library.addBook(OPequenoPrincipe);

library.listBooks();

library.removeBook(OPequenoPrincipe);

console.log('-----------------');

library.listBooks();