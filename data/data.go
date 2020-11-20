package data

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
