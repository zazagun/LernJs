async function fetchDataFromBackend() {
  try {
    const response = await fetch("http://localhost:3500/api/data")
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }
    const result = await response.json();
    console.log("Данные с бэкенда:", result.data)

    // Выводим данные на страницу
    const outputElement = document.getElementById("output")
    outputElement.innerHTML = result.data
      .map((item) => `<div>${JSON.stringify(item.name) + " : " + JSON.stringify(item.message)}</div>`)
      .join("<br>")
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

setInterval(fetchDataFromBackend, 2000);

fetchDataFromBackend();
