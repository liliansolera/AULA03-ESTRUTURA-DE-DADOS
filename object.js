var filmList = ['https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg', 'https://i.etsystatic.com/21145079/r/il/be04ee/3387742094/il_570xN.3387742094_ep65.jpg','https://br.web.img3.acsta.net/pictures/21/09/17/00/38/0501568.jpg' ]

    //for (var i=0; filmList.length; i++) {
       //document.write('<img src=' + filmList[i] + '>')
    //}
var filmNames = ['Bastardos Inglórios', 'Before Sunset', 'Patrulha Canina']
document.write('<div class="container_todosFilmes">')
//desafio 1 - transformar for em while
var i = 0;
while(i < filmList.length){
    if((filmList[i].endsWith('jpg')) || (filmList[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ filmList[i] +'>');
        document.write('<p>'+ filmNames[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')