["moradores", "eventos"].forEach((tipo) => {
  const itens = JSON.parse(localStorage.getItem(tipo)) || [];
  const lista = document.getElementById(tipo);
  if (!lista) return;

  if (itens.length === 0) {
    lista.innerHTML = "<li>Nada cadastrado ainda.</li>";
    return;
  }

  itens.forEach((item) => {
   
    const b = tipo === "eventos" ? new Date(item.b + "T00:00").toLocaleDateString("pt-BR") : item.b;

    const li = document.createElement("li");

   if (tipo === "moradores") {
      li.textContent = `${item.a} — CPF: ${item.b} | Tel: ${item.c} | E-mail: ${item.d}`;
    } else {
      li.textContent = `${item.a} — ${item.b}`;
    }

    lista.append(li);
  });
});