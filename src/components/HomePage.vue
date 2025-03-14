<template>
    <div class="movies_view">
        <div class="movie-card" v-for="movie in movies" :key="movie.id">
            <img class="movie-card__img" :src="movie.ImagePath" :alt="movie.Title" />
            <p>
                {{ movie.Title }}
            </p>
            <p>
                {{ movie.Director.Name }}
            </p>
            <button v-if="isFavorite(movie._id)" @click="handleDeleteMovie(movie._id)">
                Remove from Favorites
            </button>
            <button v-if="!isFavorite(movie._id)" @click="handleAddMovie(movie._id)">
                Add to Favorites
            </button>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { deleteMovie, addMovie } from '../utils/helpers';

export default {
    name: 'HomePage',
    data() {
        return {
            movies: [],
            favorites: []
        }
    },
    methods: {
        async fetchMovies() {
            try {
                let userToken = localStorage.getItem('token')
                let response = await axios.get('https://movie-api-lina-834bc70d6952.herokuapp.com/movies', {
                    headers: { Authorization: `Bearer ${userToken}` }
                })
                if (response.status === 200) {
                    this.movies = response.data;  // Axios handles JSON parsing automatically
                }
            } catch (error) {
                console.error('Error fetching movies:', error.response ? error.response.data : error.message);
                alert('An error occurred while fetching the movies.');
            }
        },
        async handleAddMovie(movieId) {
            await addMovie(movieId);

            const userData = JSON.parse(localStorage.getItem('user'));
            this.favorites = userData.FavoriteMovies; // gets actual list with favs from local 
        },

        async handleDeleteMovie(movieId) {
            await deleteMovie(movieId);

            const userData = JSON.parse(localStorage.getItem('user'));
            this.favorites = userData.FavoriteMovies;
        },

        isFavorite(movieId) {
            return this.favorites.includes(movieId);
        }
    },
    mounted() {
        this.fetchMovies();
        let userData = JSON.parse(localStorage.getItem('user')); // need to be parsed to object that can access FavoriteMovies
        // when no user data found in localstorage, redirect to homepage
        if (!userData) {
            this.$router.push({ name: 'LogIn' });
        }
        else {
            this.favorites = userData.FavoriteMovies || [];  // load favorites from localStorage
        }
    }
}
</script>
<style>
.movies_view {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

.movie-card {
    width: 200px;
    border: 1px solid gray;
    margin: 10px;
}

.movie-card__img {
    height: 200px;


}
</style>