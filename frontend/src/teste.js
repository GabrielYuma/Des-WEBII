const axios = require('axios');

const dados = {
    id: 23,
    name: "Gabriel B Corona",
    username: "gabriel.bruno",
    email: "gabriel.corona@gabriel.com.br",
    address: {
      street: "Praça Universiade",
      suite: "Partenon",
      city: "Porto Alegre",
      zipcode: "29100-240",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
        }
    }
}

// axios.delete('http://localhost:4010/api/unisaude/60e50542d0392a1298f8ab2d')
// .then((response) => {
//     console.log(response.data);
// });
axios.get('http://localhost:8080/api/unisaude/')
.then((response) => {
    console.log(response.data);
});

