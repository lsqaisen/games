package mongo

import (
	mgo "gopkg.in/mgo.v2"
)

type MongoDB struct {
	session *mgo.Session
}

var (
	mongoDB MongoDB
)

func ensureIndex(s *mgo.Session) {
	session := s.Copy()
	defer session.Close()

	c := session.DB("store").C("books")

	index := mgo.Index{
		Key:        []string{"isbn"},
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}
	err := c.EnsureIndex(index)
	if err != nil {
		panic(err)
	}
}

func Init() {
	var err error
	mongoDB.session, err = mgo.Dial("127.0.0.1")
	if err != nil {
		panic(err)
	}

	mongoDB.session.SetMode(mgo.Monotonic, true)
	ensureIndex(mongoDB.session)
}
