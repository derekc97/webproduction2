$(document).ready(function(){

  // let pokemonSearch;
  // let normalUrl = 'https://pokeapi.co/api/v2/pokemon/';
  //
  // $('#searchMe').click(function(){
  //   pokemonSearch = $('#userSearch').val();
  //   let newUrl = normalUrl + pokemonSearch;
  //   $.getJSON(newUrl, function(data){
  //       console.log(data);
  //
  //       let sprite = data.sprites.front_default;
  //       $(".sprite").attr('src', sprite);
  //
  //       let name = data.name;
  //       $(".name").append(name);
  //
  //       let type = data.types[0].type.name;
  //       $('.type').append(type);
  //     });
  // })


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


  // 387 -> 493 Pokemon I'd like to display
  //const pokemonStart = 387;

  let pokeContainer = document.getElementById("pokemonContainer");

  //making main container


  for (let i = 387; i < 493; i++) {
      const pokeCard = document.createElement("div");
      pokeCard.classList.add('pokemonCard');
      let pokeNumber = document.createElement("div");
      pokeNumber.classList.add('pokeNumber');
      pokeCard.appendChild(pokeNumber);
      $(pokeNumber).append("#" + i);
      pokeContainer.appendChild(pokeCard);

      let newUrl = "https://pokeapi.co/api/v2/pokemon/" + i;
  //making new cards with the json for each url
      $.getJSON(newUrl, function(data){
          console.log(data);
          let pokemonName = data.name;
          let pokemonPic = document.createElement("img");
          pokemonPic.src = data.sprites.other["official-artwork"].front_default;
          let pokemonNameDiv = document.createElement("div");
          let pokemonPicDiv = document.createElement("div");
          let pokemonTypeDiv = document.createElement("div");
          let pokemonTypeOneDiv = document.createElement("div");
          let pokemonTypeTwoDiv = document.createElement("div");
          //grabbing types
          let typeArray = [];

          for (i=0; i<data.types.length; i++) {
              typeArray[i] = data.types[i].type.name;
          }

          let pokemonTypeOne = typeArray[0];
          let pokemonTypeTwo = typeArray[1];



          pokemonNameDiv.classList.add('pokemonNameBar');
          pokemonPicDiv.classList.add('pokemonOfficialImage');
          pokemonTypeDiv.classList.add('pokemonTypeBar');
          pokemonTypeOneDiv.classList.add('pokemonType');
          pokemonTypeTwoDiv.classList.add('pokemonType');

          pokeCard.appendChild(pokemonNameDiv);
          pokeCard.appendChild(pokemonPicDiv);
          pokeCard.appendChild(pokemonTypeDiv);
          pokemonTypeDiv.appendChild(pokemonTypeOneDiv);
          if (typeArray.length === 2) {
            pokemonTypeDiv.appendChild(pokemonTypeTwoDiv);
            $(pokemonTypeTwoDiv).append(pokemonTypeTwo);
          }
          $(pokemonNameDiv).append(pokemonName);
          $(pokemonPicDiv).append(pokemonPic);
          $(pokemonTypeOneDiv).append(pokemonTypeOne);

          firstTypeAssign(pokemonTypeOne);
          secondTypeAssign(pokemonTypeTwo);
          //assigns classes for colors
          function firstTypeAssign(type) {
              pokemonTypeOneDiv.classList.add(type + "Type");
          }

          function secondTypeAssign(type) {
              pokemonTypeTwoDiv.classList.add(type + "Type");
          }

            //$("pokemonPic").attr("id", pokemonName); not sure why didnt work
            pokemonPic.setAttribute("id", pokemonName);

          var modal = document.getElementById("myModal");

          let img = document.getElementById(pokemonName);
          let modalImg = document.getElementById("img01");
          let captionText = document.getElementById("caption");
          img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          }

          let span = document.getElementsByClassName("close")[0];

          span.onclick = function () {
            modal.style.display = "none";
          }

       })

  }

})





/*Make Pokemon Container
  For Loop, start at 387 -> 493
  Each time, push the number, request through getJSON
  Create a div in loop, add data from number to div
  Repeat until done
*/


/*function pokeSearch() {
  let searchPoke = document.getElementbyId("userSearch").value;
  alert(searchPoke)
}
*/
