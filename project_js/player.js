var players = [
{
    nombre: 'Falcao',
    edad: 31,
    equipo: 'Galatasaray',
    nacionalidad: 'Colombiana',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_092.jpg/250px-FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_092.jpg',
    peso: 72,
    estatura: 177
},
{
    nombre: 'Arias',
    edad: 28,
    equipo: 'Bayer Leverkusen',
    nacionalidad: 'Colombiana',
    posicion: 'Defensa',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Santiago_Arias_2019.jpg/245px-Santiago_Arias_2019.jpg',
    peso: 72,
    estatura: 177
},
{
    nombre: 'Ospina',
    edad: 32,
    equipo: 'Napoli',
    nacionalidad: 'Colombiana',
    posicion: 'Guardameta',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/David_Ospina%2C_2015-05-31_%28cropped%29.JPG/245px-David_Ospina%2C_2015-05-31_%28cropped%29.JPG',
    peso: 81,
    estatura: 183
},
{
    nombre: 'Zapata',
    edad: 34,
    equipo: 'Atalanta',
    nacionalidad: 'Colombiana',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_104_%28cropped%29.jpg/250px-FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_104_%28cropped%29.jpg',
    peso: 88,
    estatura: 190
},
{
    nombre: 'Sanchez',
    edad: 24,
    equipo: 'Tottenham',
    nacionalidad: 'Colombiana',
    posicion: 'Defensa',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/FWC_2018_-_Round_of_16_-_COL_v_ENG_-_D_S%C3%A1nchez.jpg/245px-FWC_2018_-_Round_of_16_-_COL_v_ENG_-_D_S%C3%A1nchez.jpg',
    peso: 81,
    estatura: 188
},
{
    nombre: 'Mina',
    edad: 26,
    equipo: 'Everton',
    nacionalidad: 'Colombiana',
    posicion: 'Defensa',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_103_%28cropped%29.jpg/245px-FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_103_%28cropped%29.jpg',
    peso: 92,
    estatura: 196
},
{
    nombre: 'Javier Hernandez Balcazar',
    edad: 32,
    numero: 14,
    equipo: 'L.A. Galaxy',
    nacionalidad: 'Mexicana',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mex-Kor_%2831%29.jpg/245px-Mex-Kor_%2831%29.jpg',
    peso: 71,
    estatura: 175
},
{
    nombre: 'Carlos Vela Garrido',
    edad: 31,
    numero: 10,
    equipo: 'Los Angeles F.C.',
    nacionalidad: 'Mexicana',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mex-Kor_%2821%29.jpg/245px-Mex-Kor_%2821%29.jpg',
    peso: 73,
    estatura: 177
},
{
    nombre: 'Oscar Perez Rojas',
    edad: 47,
    numero: 1,
    equipo: 'Retirado',
    nacionalidad: 'Mexicana',
    posicion: 'Portero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Óscar_Pérez_Rojas.jpg/245px-Óscar_Pérez_Rojas.jpg',
    peso: 73,
    estatura: 177
},
{
    nombre: 'Gareth Bale',
    edad: 31,
    numero: 9,
    equipo: 'Tottenham Hotspur',
    nacionalidad: 'Gales',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/AUT_vs._WAL_2016-10-06_%28155%29.jpg/245px-AUT_vs._WAL_2016-10-06_%28155%29.jpg',
    peso: 82,
    estatura: 185
},
{
    nombre: 'Raul Jimenez',
    edad: 29,
    numero: 9,
    equipo: 'Wolverhampton F.C',
    nacionalidad: 'Mexicana',
    posicion: 'Delantero',
    url_player: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Raul_Jim%C3%A9nez.png/220px-Raul_Jim%C3%A9nez.png',
    peso: 81,
    estatura: 192
},
{
    nombre: "Federico Valverde",
    numero: 15,
    equipo: "Real Madrid C.F",
    nacionalidad: "Uruguayo",
    posicion: "Mediocampista",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/6/64/%E0%B4%AB%E0%B5%86%E0%B4%A1%E0%B4%B1%E0%B4%BF%E0%B4%95%E0%B5%8B_%E0%B4%B5%E0%B4%BE%E0%B5%BD%E0%B4%B5%E0%B5%86%E0%B5%BC%E0%B4%A1%E0%B5%86.jpg",
    peso: 76,
    altura: 1.82,
},
{
    nombre:"Marco Asensio",
    edad: 24,
    numero: 11,
    equipo: "Real Madrid C.F",
    nacionalidad: "Español",
    posicion: "Delantero",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Asensio_2018_%28cropped%29.jpg/405px-Asensio_2018_%28cropped%29.jpg",
    peso: 76,
    estatura: 1.82, 
},
{
    nombre:"Thibaut Courtois",
    edad: 28,
    numero: 1,
    equipo: "Real Madrid C.F",
    nacionalidad: "Belga",
    posicion: "Arquero",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Courtois_2018_%28cropped%29.jpg/368px-Courtois_2018_%28cropped%29.jpg",
    peso: 96,
    estatura: 1.99, 
},
{
    nombre:"Martin Ødegaard",
    edad: 21,
    numero: 21,
    equipo: "Real Madrid C.F",
    nacionalidad: "Noruego",
    posicion: "Mediocampista",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Martin_%C3%98degaard_2015-02-08_001.jpg/375px-Martin_%C3%98degaard_2015-02-08_001.jpg",
    peso: 69,
    estatura: 1.78, 
},
{
    nombre:"Erling Haaland",
    edad: 20,
    numero: 9,
    equipo: "Borussia Dortmund",
    nacionalidad: "Noruego",
    posicion: "Delantero",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/FC_RB_Salzburg_versus_SV_Mattersburg_%284._Juli_2019%29_29.jpg/330px-FC_RB_Salzburg_versus_SV_Mattersburg_%284._Juli_2019%29_29.jpg",
    peso: 88,
    estatura: 1.94,  
},
{
    nombre:"Kylian Mbappé",
    edad: 21,
    numero: 7,
    equipo: "Paris Saint-Germain F.C",
    nacionalidad: "Frances",
    posicion: "Delantero",
    url_player: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/330px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    peso: 73,
    estatura: 1.78,  
}
];

var container= document.getElementById('container')


function jugadores() {
    players.forEach(function(player){
        console.log(player)
        mainCard(player);
    });
}
jugadores()

function mainCard(player){
    var playerContainer= document.createElement('div')

    var playerImage= document.createElement('img')
    playerImage.src= player.url_player

    var playerName= document.createElement('p')
    playerName.innerHTML= ('Nombre: '+player.nombre)

    var playerEdad= document.createElement('p')
    playerEdad.innerHTML= ('Edad: '+player.edad)
    
    var playerEquipo= document.createElement('p')
    playerEquipo.innerHTML= ('Team: '+player.equipo)

    var playerNacionalidad= document.createElement('p')
    playerNacionalidad.innerHTML= ('Nacionalidad: '+player.nacionalidad)

    var playerPosicion= document.createElement('p')
    playerPosicion.innerHTML= ('Posición: '+player.posicion)

    playerContainer.append(playerImage, playerName, playerEdad, playerEquipo, playerNacionalidad, playerPosicion)

    container.appendChild(playerContainer)
}


