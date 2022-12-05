const cuacaApi = "http://api.weatherapi.com/v1/current.json?key=e92e71769a914e2284752330220512"

const keyword = document.querySelector(".keyword")
const btnSearch = document.querySelector(".btn-search")
const container = document.querySelector("#container")

btnSearch.addEventListener("click", function () {

    fetch(`${cuacaApi}&q=${keyword.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let element = ""

            element = showData(data)
            container.innerHTML = element

            // const current = data.current;
            // const location = data.location
        })
})

function showData(data) {
    return `<h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
    <div class="boc">
        <img src="https:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} C</h1>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>`
}