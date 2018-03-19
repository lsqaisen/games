package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["games/server/controllers:MongoController"] = append(beego.GlobalControllerRouter["games/server/controllers:MongoController"],
		beego.ControllerComments{
			Method: "AllBooks",
			Router: `/books`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
