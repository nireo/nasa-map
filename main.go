package main

import (
	"io"
	"log"
	"net/http"
	"time"

	"github.com/nireo/nature-tracker/data"
)

// Why is there a server?
// I think it's better to periodically run a request on nature events, which can
// take many hours to develop. Also there is a rate limit present on the NASA api.

func GetNatureData(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "this is the nature data")
}

func main() {
	http.HandleFunc("/api/data", GetNatureData)
	// initially load the data
	if err := data.LoadData(); err != nil {
		log.Fatal("Could not execute initial data load")
	}

	// create a go routine which handles hosting the web server
	go func() {
		log.Fatal(http.ListenAndServe(":8080", nil))
	}()

	log.Println("Server running on PORT=8080")

	// periodically load the data every 30 minutes
	for range time.NewTicker(30 * time.Minute).C {
		if err := data.LoadData(); err != nil {
			log.Fatal("Could not load data")
		}
	}

	select {}
}
