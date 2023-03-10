const KEY_GUSTA_MYPAGE_LANG = "KEY_GUSTAMYPAGE_LANG";
const KEY_GUSTA_MYPAGE_LANG_PT_BR = "KEY_GUSTA_MYPAGE_LANG_PT_BR";
const KEY_GUSTA_MYPAGE_LANG_EN = "KEY_GUSTA_MYPAGE_LANG_EN";

const texts = {
    pt: {
        title: `Fazem 5 anos que me aventuro no mundo da programação,
        espero poder ajuda-ló com alguns de meus projetos!`
    },
    en: {
        title: `It's been 5 years since I ventured into the world of programming,
        I hope I can help you with some of my projects!`
    }
};

const clickLang = function () {
    if (localStorage.getItem(KEY_GUSTA_MYPAGE_LANG) === KEY_GUSTA_MYPAGE_LANG_PT_BR) {
        localStorage.removeItem(KEY_GUSTA_MYPAGE_LANG);
        localStorage.setItem(KEY_GUSTA_MYPAGE_LANG, KEY_GUSTA_MYPAGE_LANG_EN);
    } else {
        localStorage.removeItem(KEY_GUSTA_MYPAGE_LANG);
        localStorage.setItem(KEY_GUSTA_MYPAGE_LANG, KEY_GUSTA_MYPAGE_LANG_PT_BR);
    }

    initText();
}

const initText = function () {

    if (!localStorage.getItem(KEY_GUSTA_MYPAGE_LANG)) {
        localStorage.setItem(KEY_GUSTA_MYPAGE_LANG, KEY_GUSTA_MYPAGE_LANG_PT_BR);
    }

    langSelect = localStorage.getItem(KEY_GUSTA_MYPAGE_LANG);

    const spanTitle = document.getElementById("spanTitle");
    const spanLang = document.getElementById("spanLang");

    if (langSelect === KEY_GUSTA_MYPAGE_LANG_PT_BR) {
        spanTitle.innerHTML = texts.pt.title;
        spanLang.innerHTML = "br";
    } else {
        spanTitle.innerHTML = texts.en.title;
        spanLang.innerHTML = "en";
    }
}

initText();