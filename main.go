package main

import (
	"io"
	"log"
	"net/http"
)

// Why is there a server?
// I think it's better to periodically run a request on nature events, which can
// take many hours to develop. Also there is a rate limit present on the NASA api.

func GetNatureData(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "this is the nature data")
}

func main() {
	http.HandleFunc("/api/data", GetNatureData)

	// create a go routine which handles hosting the web server
	go func() {
		log.Fatal(http.ListenAndServe(":8080", nil))
	}()

	log.Println("Server running on PORT=8080")
	select {}
}
