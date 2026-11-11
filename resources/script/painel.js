document.querySelectorAll("form[data-tipo]").forEach((form) => {
  const tipo = form.dataset.tipo;
  const lista = document.getElementById(tipo);
  const itens = JSON.parse(localStorage.getItem(tipo)) || [];
 
  function mostrar() {
    lista.innerHTML = "";
    itens.forEach((item, i) => {
      const li = document.createElement("li");
      li.textContent = item.a + " — " + item.b;
 
      const remover = document.createElement("button");
      remover.textContent = "Remover";
      remover.onclick = () => {
        itens.splice(i, 1); // tira o item da lista
        salvar();
      };
 
      li.append(remover);
      lista.append(li);
    });
  }
 
  function salvar() {
    localStorage.setItem(tipo, JSON.stringify(itens));
    mostrar();
  }
 
  form.onsubmit = (e) => {
    e.preventDefault();
    itens.push({ 
        a: form.a.value,
         b: form.b.value,
          c: form.c?.value,
           d: form.d?.value});
    form.reset();
    salvar();
  };
 
  mostrar();
});
 