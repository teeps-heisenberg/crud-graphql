import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";

@Injectable()
export class BookService{
    public booksData:BookEntity[] = [];

    addBook(book:BookEntity):string{
        this.booksData.push(book);
        return 'Book Added Successfully';
    }

    updateBook(id:number,updateBook:BookEntity):string{
        for(let i=0; i < this.booksData.length;i++){
            if(this.booksData[i].id == id){
                this.booksData[i] = updateBook;
            }
        }
        return 'Book Updated Successfully';
    }

    deleteBook(id:number):string{
        this.booksData = this.booksData.filter((book) => book.id !== id);
        return 'Book deleted successfully';
    }

    findBookById(id:number):BookEntity{
        for(let i=0; i < this.booksData.length;i++){
            if(this.booksData[i].id == id){
                 return this.booksData[i];
            }
        }
    }

    findAllBooks():BookEntity[]{
        return this.booksData;
    }

}