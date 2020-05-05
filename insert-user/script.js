const url = 'localhost:5000'

fetch(url + '/users')
    .then(resp => resp.json())
    .then(user => console.log(user))