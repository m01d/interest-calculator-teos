const good = [
    {
        "name": "обучающий контент",
        "example": "example",
        "href": "#"
    },
    {
        "name": "теория заговора",
        "example": "example",
        "href": "#"
    },
    {
        "name": "расследования",
        "example": "example",
        "href": "#"
    },
    {
        "name": "творческие пространства",
        "example": "example",
        "href": "#"
    },
    {
        "name": "малоизвестные сайты",
        "example": "example",
        "href": "#"
    },
    {
        "name": "каналы / профили в соц.сетях",
        "example": "example",
        "href": "#"
    },
    {
        "name": "документы / архивы",
        "example": "example",
        "href": "#"
    },
    {
        "name": "IP-адреса",
        "example": "example",
        "href": "#"
    },
    {
        "name": "сети",
        "example": "example",
        "href": "#"
    },
    {
        "name": "ARG",
        "example": "example",
        "href": "#"
    },
    {
        "name": "репозитории",
        "example": "example",
        "href": "#"
    },
]

const bad = [
    {
        "name": "крипипасты",
        "example": "example",
        "href": "#"
    },
    {
        "name": "файлы смерти",
        "example": "example",
        "href": "#"
    },
    {
        "name": "треш-контент",
        "example": "example",
        "href": "#"
    },
    {
        "name": "псевдонаука",
        "example": "example",
        "href": "#"
    },
    {
        "name": "компьютерные игры",
        "example": "example",
        "href": "#"
    },
    {
        "name": "семейные архивы",
        "example": "example",
        "href": "#"
    },
    {
        "name": "маленькие проекты",
        "example": "example",
        "href": "#"
    },
    {
        "name": "устаревшие проекты",
        "example": "example",
        "href": "#"
    },
    {
        "name": "«не о чем»",
        "example": "example",
        "href": "#"
    },
]

function render(data, id) {
    const container = document.getElementById(id);
    data.forEach(function (item, index) {
        const checkboxId = "flexCheckDefault" + (index + 1);
        const checkboxHtml = `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${checkboxId}">
                <label class="form-check-label" for="${checkboxId}">
                                ${item.name}
                </label>
            <br />
            <a href="${item.href}">${item.example}</a>
        </div>
      `;
        container.innerHTML += checkboxHtml;
    });
}

render(good, "good");
render(bad, "bad");

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let interestingCount = 0;
    let uninterestingCount = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.closest('.card').classList.contains('border-success')) {
                interestingCount++;
            } else if (checkbox.closest('.card').classList.contains('border-danger')) {
                uninterestingCount++;
            }
        }
    });

    console.log('Количество выбранных чекбоксов из категории "Интересные параметры": ' + interestingCount);
    console.log('Количество выбранных категорий из "Неинтересные параметры": ' + uninterestingCount);
    const result = document.getElementById("result");
    result.textContent = "Итог: " + (interestingCount - uninterestingCount);
});
