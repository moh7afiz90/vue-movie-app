import Welcome from "./components/Welcome.vue";
import Movies from "./components/Movie/MoviesList.vue";
import Series from "./components/Tv/TvList.vue";
import Persons from "./components/Person/PersonList.vue";

export const routes = [
  { path: "*", component: Welcome },
  { path: "/popular/movies", component: Movies },
  { path: "/popular/series", component: Series },
  { path: "/popular/persons", component: Persons }
];
