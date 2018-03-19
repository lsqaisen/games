package routers

import (
	"games/server/controllers"

	"github.com/astaxie/beego"
)

func init() {
	ns :=
		beego.NewNamespace("/v1",
			beego.NSInclude(
				&controllers.MainController{},
				&controllers.MongoController{},
			),
		)
	//注册 namespace
	beego.AddNamespace(ns)
	// beego.Router("/", &controllers.MainController{})
}
