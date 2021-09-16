# Movie-finder

## A react app questionnaire that fetches suitable movie recommendations

Since most movie APIs are **paid**, the plan to use an API for fetching movie data changed. Instead a csv file with the top 1000 movies from imdb was used.
The csv contains **1000** movie data with the following columns: _Poster Link, Title, Year, Description, Genre_.

### Basic Flow

The first time the app renders, the csv gets parsed and loaded into redux state in order to avoid repeated future delays. When the **play** button is pressed three random movies from the 1000 available are picked and are shown to the user with their respective poster images from amazon. Each time the user clicks on a poster a new set of 3 random movies is shown and each time the data from the picked movies is persisted. At the end a set of movies that match the users genre picks is shown.

![image](https://user-images.githubusercontent.com/37384081/133584344-c6c65d6d-1018-4d37-a4a2-bea7c5246dc4.png)
![image](https://user-images.githubusercontent.com/37384081/133584468-04ac555c-03c3-4832-b0b5-9f8ef362aec4.png)

**Click the link for a live demo!**
https://giannoulo.github.io/Movie-finder/

## Tags

_ReactJS, Redux, Fully Responsive, Dark mode, Bootstrap, SCSS_
