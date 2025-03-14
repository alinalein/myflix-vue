<template>
    <div class="movie-card" v-for="movie in favMovies" :key="movie.id">
        <img class="movie-card__img" :src="movie.ImagePath" :alt="movie.Title" />
        <p>
            {{ movie.Title }}
        </p>
        <p>
            {{ movie.Director.Name }}
        </p>
        <button @click="deleteMovie(movie._id)">Remove From Favorites</button>
    </div>
</template>

<script>
import axios from 'axios';
import { deleteMovie } from '../utils/helpers';
export default {
    name: 'FavMovies',
    data() {
        return {
            movies: [],
            favMovies: []
        }
    },
    methods: {
        async fetchMovies() {
            try {
                const token = localStorage.getItem('token')
                let response = await axios.get('https://movie-api-lina-834bc70d6952.herokuapp.com/movies', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                if (response.status === 200) {
                    this.movies = response.data;// Axios handles JSON parsing automatically

                    let user = JSON.parse(localStorage.getItem('user'));


                    this.favMovies = this.movies.filter(movie => user.FavoriteMovies.includes(movie._id))
                    console.log('favs', this.favMovies)
                    console.log(user)

                }
            } catch (error) {
                console.error('Error fetching movies:', error.response ? error.response.data : error.message);
                alert('An error occurred while fetching the movies.');
            }
        },
        deleteMovie
    },
    mounted() {
        this.fetchMovies();
    }
}
</script>
<style>
.movie-card {
    border: 1px solid gray;
    margin: 10px;
}
</style>