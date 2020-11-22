package data

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type RequestBody struct {
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Link        string  `json:"link"`
	Events      []Event `json:"events"`
}

type Event struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Link        string `json:"link"`
	Description string `json:"description"`
	Categories  []struct {
		ID    string `json:"id"`
		Title string `json:"title"`
	} `json:"categories"`
	Sources []struct {
		ID  string `json:"id"`
		URL string `json:"url"`
	} `json:"sources"`
	Geometries []struct {
		Date        string   `json:"date"`
		Type        string   `json:"type"`
		Coordinates []string `json:"coordinates"`
	} `json:"geometries"`
}

var data *RequestBody

func GetData() *RequestBody {
	return data
}

func LoadData() error {
	var rq RequestBody
	response, err := http.Get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
	if err != nil {
		return err
	}

	defer response.Body.Close()

	// read the body
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return err
	}

	// parse the json to golang structs
	if err := json.Unmarshal(body, &rq); err != nil {
		return err
	}

	data = &rq

	return nil
}
