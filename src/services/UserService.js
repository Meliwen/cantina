// Uniformiser ce qui fait appel au serveur dans ce fichier
import axios from 'axios';
const API_ENDPOINT = 'http://localhost:9000/api';

export default {
    fetchAll : function(){
        return axios.get(`${API_ENDPOINT}/recipes`) // axios est basé sur fetch mais rajoute d'autres fonctionnalités, il est compatible avec toutes les versions des navigateurs
        .then(res => {console.log(res);
        return res.data}); // avec fetch : res.json()
    },
    addUser: function(userObj){
        return axios.post(`${API_ENDPOINT}/recipe`, userObj)
        .then(res => res.data)
    },
    removeUser: function(userObj){
        return axios.delete(`${API_ENDPOINT}/recipe/${userObj.id}`)
        .then(res => res.data)
    }
}