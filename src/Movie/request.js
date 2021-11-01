const API = "0ca06f7f1149f4cd1553679cf000ffaa";
const Base = "https://api.themoviedb.org/3";
const requests = {
  fetchTopRated: `${Base}/movie/top_rated?api_key=${API}&language=en-US&page=1`,
  fetchPopular: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1`,
  fetchAction: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=28`,
  fetchAdventure: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=12`,
  fetchAnimation: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=16`,
  fetchComedy: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=35`,
  fetchCrime: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=80`,
  fetchDocumentary: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=99`,
  fetchFamily: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=10751`,
  fetchScienceFiction: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=878`,
  fetchRomance: `${Base}/movie/popular?api_key=${API}&language=en-US&page=1&with_genres=10749`,
};

export default requests;
