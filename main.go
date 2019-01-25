package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("../Samgatha19Count-Down/")))
	http.ListenAndServe(":8000", nil)
}
