package main

import (
	"games/server/models/mongo"
	_ "games/server/routers"

	"github.com/astaxie/beego"
)

func main() {
	mongo.Init()
	beego.Run()
}
