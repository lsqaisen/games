package mongo

import (
	"fmt"
	"log"

	"gopkg.in/mgo.v2/bson"
)

type Book struct {
	ISBN    string   `json:"isbn"`
	Title   string   `json:"title"`
	Authors []string `json:"authors"`
	Price   string   `json:"price"`
}

func AllBooks() []Book {
	// session := &mongoDB.session.Copy()
	// fmt.Println(session)

	c := mongoDB.session.DB("store").C("books")
	// err := c.Insert(&Book{ISBN: "fsfs", Title: "+55 53 1234 4321", Authors: []string{"sd"}, Price: "safssd"},
	// 	&Book{ISBN: "sdfsd", Title: "+55 53 1234 4321", Authors: []string{"sd"}, Price: "safssd"})

	// if err != nil {
	// 	panic(err)
	// }
	var books []Book
	err := c.Find(bson.M{}).All(&books)
	if err != nil {
		log.Println("Failed get all books: ", err)
		return []Book{}
	}

	fmt.Println(books)

	return books
}
