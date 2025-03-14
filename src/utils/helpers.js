import axios from "axios";

export const addMovie = async (id) => {
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        let token = localStorage.getItem('token')
        let response = await axios.put(`https://movie-api-lina-834bc70d6952.herokuapp.com/users/${user.Username}/movies/add/${id}`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }

            })
        if (response.status === 200) {
            alert('movie added to favorites')
        }

    } catch (error) {
        console.log('occured error:', error.response)
        alert('movie could not be added')
    }
}

export const deleteMovie = async (id) => {
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        let token = localStorage.getItem('token')

        let response = await axios.delete(`https://movie-api-lina-834bc70d6952.herokuapp.com/users/${user.Username}/movies/remove/${id}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        if (response.status === 200) {
            alert('the movie was deleted from the favs')
        }
    } catch (error) {
        console.log('occured error:', error.response)
        alert('Movie could not be deleted');
    }
}
