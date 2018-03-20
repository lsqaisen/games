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
