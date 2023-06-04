const good = [
    {
        "name": "обучающий контент",
        "example": "Order of Six Angles",
        "href": "https://teosclan.boards.net/thread/206"
    },
    {
        "name": "культы / теории заговора",
        "example": "Cult of Corona",
        "href": "https://teosclan.boards.net/thread/151"
    },
    {
        "name": "расследования",
        "example": "south32.com​",
        "href": "https://teosclan.boards.net/thread/82"
    },
    {
        "name": "творческие пространства",
        "example": "Jodi",
        "href": "https://teosclan.boards.net/thread/127"
    },
    {
        "name": "малоизвестные сайты",
        "example": "Sacrifice Your Sanity",
        "href": "https://teosclan.boards.net/thread/86"
    },
    {
        "name": "каналы / профили в соц.сетях",
        "example": "Molgbq Mxpbkzlobjloq",
        "href": "https://teosclan.boards.net/thread/202"
    },
    {
        "name": "документы / архивы",
        "example": "research",
        "href": "https://teosclan.boards.net/thread/197"
    },
    {
        "name": "IP-адреса",
        "example": "TCP/IP (scan.)",
        "href": "https://teosclan.boards.net/thread/170"
    },
    {
        "name": "скрытые сети",
        "example": "Dread",
        "href": "https://teosclan.boards.net/thread/169"
    },
    {
        "name": "ARG/веб-сериал",
        "example": "JumpPoint",
        "href": "https://teosclan.boards.net/thread/49"
    },
    {
        "name": "репозитории",
        "example": "youtube-dl",
        "href": "https://teosclan.boards.net/thread/225"
    },
    {
        name: "нетсталкинг",
        example: "Горизонт Событий",
        href: "https://teosclan.boards.net/thread/62/"
    },
    {
        name: "правительственные программы",
        example: "AATIP / UAPTF",
        href: "https://teosclan.boards.net/thread/176",
    },
    {
        name: "геолокационный поиск",
        example: "Mysterious Nashville",
        href: "https://teosclan.boards.net/thread/64/",
    },
    {
        name: "криптография / криптоголоволомки",
        example: "Dark Horse​",
        href: "https://teosclan.boards.net/thread/60",
    },
    {
        name: "анти-наука",
        example: "Forgotten Languages​",
        href: "https://teosclan.boards.net/thread/144",
    }
]

const bad = [
    {
        "name": "крипипасты",
        "example": "Джефф Убийца",
        "href": "https://creepypasta-biographies.fandom.com/wiki/Jeff_the_Killer"
    },
    {
        "name": "файлы смерти",
        "example": "Ben.mp3",
        "href": "https://mrakopedia.net/wiki/Ben.mp3"
    },
    {
        "name": "шок-контент",
        "example": "сайты, каналы и т.д. с видеозаписями насилия, сэлфхарма, смертями",
        "href": "javascript:alert('Думаем, вы понимаете, о чём речь :)')"
    },
    {
        "name": "порнография",
        "example": "сайты, каналы и т.д. с порнографией",
        "href": "javascript:alert('Думаем, вы понимаете, о чём речь :)')"
    },
    {
        "name": "нелегальщина",
        "example": "сайты, каналы и т.д. по продаже нелегальных товаров",
        "href": "javascript:alert('Думаем, вы понимаете, о чём речь :)')"
    },
    {
        "name": "компьютерные игры",
        "example": "No Players Online",
        "href": "https://papercookies.itch.io/no-players-online"
    },
    {
        "name": "семейные архивы",
        "example": "Sladkiy_lomtick",
        "href": "https://t.me/sladkiy_lomtick"
    },
    {
        "name": "маленькие проекты",
        "example": "Unchartedfabrications",
        "href": "https://reddit.com/r/ARG/comments/vkl9bb/i_make_arg_style_puzzles_heres_the_third_and/"
    },
    {
        "name": "устаревшие проекты",
        "example": "Junko Junsui",
        "href": "https://teosclan.boards.net/thread/98"
    },
    {
        "name": "«не о чем»",
        "example": "Amorphous",
        "href": "http://amorph7hyofdtnfkgtu2vfe6obipy3ipij72qsic2rw5gsq37wicmyyd.onion/"
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
calculateButton.addEventListener("click", (event) => {
    event.preventDefault();
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

    console.log('Количество выбранных категорий из "Интересные параметры": ' + interestingCount);
    console.log('Количество выбранных категорий из "Неинтересные параметры": ' + uninterestingCount);
    const result = document.getElementById("result");
    result.textContent = "Итог: " + (interestingCount - uninterestingCount);
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", (event) => {
    const result = document.getElementById("result");
    result.textContent = "Итог: ";
    const optionsForm = document.getElementById("optionsForm");
    optionsForm.reset();
});