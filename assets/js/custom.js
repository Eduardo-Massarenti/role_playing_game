/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */
function rolar_dados() {
    // var qtde = document.getElementById('quantidade').value
    var qtde = $("#quantidade option:selected").val();
    var dados = $("#select_dados option:selected").val();
    var replace = document.getElementById('vantagem').value
    // var replace = limpa.toString().replace("+","")
    total = 0
    var vant = parseInt(replace)
    for (i = 0; i < qtde; i++) {
      if (isNaN(vant)) {
        vant = 0
        var result = conta + vant
      }
      var conta = Math.floor(Math.random()* dados + 1);
      var result = conta + vant
      var image = $("#select_dados option:selected").text();
      console.log(result)
      console.log(dados)
      total += result
      let tot = document.querySelector("#total")

      // Card
      let card = document.createElement('div')
      if (dados = 20 && conta >= 20 ) {
        card.classList.add('card', 'card-result-red')
      } else {
        card.classList.add('card', 'card-result')
      }

      // Card Icon
      let icon = document.createElement('div')
      icon.classList.add('card-img')

      // Img
      let img = document.createElement('img')
      img.classList.add('img-result')
      let src = `./assets/images/dados/${image}.png`
      img.setAttribute('src', src)

      // Card Body
      let cardB = document.createElement('div')
      cardB.classList.add('card-body', 'text-right')

      let h3 = document.createElement('h3')
      if (dados = 20 && conta >= 20 ) {
        h3.classList.add('card-value', 'text-danger', 'mb-0')
      } else {
      h3.classList.add('card-value', 'text-gray', 'mb-0')
      }
      h3.textContent=`${result}`

      let h6 = document.createElement('h6')
      if (dados = 20 && conta >= 20 ) {
        h6.classList.add('mb-0', 'text-danger')
        h6.textContent=`[ ${conta} + ${vant} ]`
      } else {
        h6.classList.add('mb-0', 'dark-custom')
        h6.textContent=`[ ${conta} + ${vant} ]`
      }

      card.appendChild(icon)
      icon.appendChild(img)
      card.appendChild(cardB)
      cardB.appendChild(h3)
      cardB.appendChild(h6)
      let id = document.querySelector("#rolagem")
      setTimeout(() => {
        tot.innerHTML = `<b style="color: #34395e; font-size: 18px; ">${total}</b>`
        id.prepend(card)
      }, "250")

    }
  }

  function limpar_dados() {
    let id = document.getElementById("rolagem")
    while (id.hasChildNodes()) {
      id.removeChild(id.firstChild);
    }
  }

  function reset() {
    let qtde = 1
    let vant = 0
    document.getElementById('quantidade').value = qtde
    document.getElementById('vantagem').value = vant
    $("#select_dados").prop('selectedIndex', 0);
    let tot = document.querySelector("#total")
    tot.innerText = ''
    limpar_dados()
  }

document.addEventListener("DOMContentLoaded", function(event) {
    Chocolat(document.querySelectorAll('.gallery-fw .gallery-item'))
})

