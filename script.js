   function imprime(objeto) {
        var mensagem = `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;

        return mensagem;
      }

      async function getPostagem(id) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            respjson.innerHTML = imprime(json);
          });
      }