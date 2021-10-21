$(document).ready(function(){

  let pokemonSearch;
  let normalUrl = 'https://pokeapi.co/api/v2/pokemon/';

  $('#searchMe').click(function(){
    pokemonSearch = $('#userSearch').val();
    let newUrl = normalUrl + pokemonSearch;
    $.getJSON(newUrl, function(data){
        console.log(data);

        let sprite = data.sprites.front_default;
        $(".sprite").attr('src', sprite);

        let name = data.name;
        $(".name").append(name);

        let type = data.types[0].type.name;
        $('.type').append(type);
      });
  })


  // $.getJSON("https://pokeapi.co/api/v2/pokemon/pikachu", function(data){
  //     console.log(data);
  //
  //     let sprite = data.sprites.front_default;
  //     $(".sprite").attr('src', sprite);
  //
  //     let name = data.name;
  //     $(".name").append(name);
  //
  //     let type = data.types[0].type.name;
  //     $('.type').append(type);
  //   });
})


/*function pokeSearch() {
  let searchPoke = document.getElementbyId("userSearch").value;
  alert(searchPoke)
}
*/
