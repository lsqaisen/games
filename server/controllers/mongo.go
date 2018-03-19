package controllers

import (
	"fmt"
	"games/server/models/mongo"

	"github.com/astaxie/beego"
)

type MongoController struct {
	beego.Controller
}

// @router /books [get]
func (m *MongoController) AllBooks() {
	// mongo.AddBook()
	books := mongo.AllBooks()
	fmt.Println(books)
	m.Data["json"] = &books
	m.ServeJSON()
}

// // @router /books [post]
// func addBook(m *MongoController) func(w http.ResponseWriter, r *http.Request) {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		session := s.Copy()
// 		defer session.Close()

// 		var book Book
// 		decoder := json.NewDecoder(r.Body)
// 		err := decoder.Decode(&book)
// 		if err != nil {
// 			ErrorWithJSON(w, "Incorrect body", http.StatusBadRequest)
// 			return
// 		}

// 		c := session.DB("store").C("books")

// 		err = c.Insert(book)
// 		if err != nil {
// 			if mgo.IsDup(err) {
// 				ErrorWithJSON(w, "Book with this ISBN already exists", http.StatusBadRequest)
// 				return
// 			}

// 			ErrorWithJSON(w, "Database error", http.StatusInternalServerError)
// 			log.Println("Failed insert book: ", err)
// 			return
// 		}

// 		w.Header().Set("Content-Type", "application/json")
// 		w.Header().Set("Location", r.URL.Path+"/"+book.ISBN)
// 		w.WriteHeader(http.StatusCreated)
// 	}
// }

// // @router /books/:isbn [get]
// func bookByISBN(m *MongoController) {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		session := s.Copy()
// 		defer session.Close()

// 		// isbn := pat.Param(r, "isbn")

// 		c := session.DB("store").C("books")

// 		var book Book
// 		err := c.Find(bson.M{"isbn": isbn}).One(&book)
// 		if err != nil {
// 			ErrorWithJSON(w, "Database error", http.StatusInternalServerError)
// 			log.Println("Failed find book: ", err)
// 			return
// 		}

// 		if book.ISBN == "" {
// 			ErrorWithJSON(w, "Book not found", http.StatusNotFound)
// 			return
// 		}

// 		respBody, err := json.MarshalIndent(book, "", "  ")
// 		if err != nil {
// 			log.Fatal(err)
// 		}

// 		ResponseWithJSON(w, respBody, http.StatusOK)
// 	}
// }

// // @router /books/:isbn [put]
// func updateBook(m *MongoController) func(w http.ResponseWriter, r *http.Request) {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		session := s.Copy()
// 		defer session.Close()

// 		// isbn := pat.Param(r, "isbn")

// 		var book Book
// 		decoder := json.NewDecoder(r.Body)
// 		err := decoder.Decode(&book)
// 		if err != nil {
// 			ErrorWithJSON(w, "Incorrect body", http.StatusBadRequest)
// 			return
// 		}

// 		c := session.DB("store").C("books")

// 		err = c.Update(bson.M{"isbn": isbn}, &book)
// 		if err != nil {
// 			switch err {
// 			default:
// 				ErrorWithJSON(w, "Database error", http.StatusInternalServerError)
// 				log.Println("Failed update book: ", err)
// 				return
// 			case mgo.ErrNotFound:
// 				ErrorWithJSON(w, "Book not found", http.StatusNotFound)
// 				return
// 			}
// 		}

// 		w.WriteHeader(http.StatusNoContent)
// 	}
// }

// // @router /books/:isbn [delete]
// func deleteBook(m *MongoController) func(w http.ResponseWriter, r *http.Request) {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		session := s.Copy()
// 		defer session.Close()

// 		// isbn := pat.Param(r, "isbn")

// 		c := session.DB("store").C("books")

// 		err := c.Remove(bson.M{"isbn": isbn})
// 		if err != nil {
// 			switch err {
// 			default:
// 				ErrorWithJSON(w, "Database error", http.StatusInternalServerError)
// 				log.Println("Failed delete book: ", err)
// 				return
// 			case mgo.ErrNotFound:
// 				ErrorWithJSON(w, "Book not found", http.StatusNotFound)
// 				return
// 			}
// 		}

// 		w.WriteHeader(http.StatusNoContent)
// 	}
// }
