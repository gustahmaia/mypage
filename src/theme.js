const KEY_GUSTA_MYPAGE_THEME = "KEY_GUSTA_MYPAGE_THEME";
const KEY_GUSTA_MYPAGE_THEME_LIGTH = "KEY_GUSTA_MYPAGE_THEME_LIGTH";
const KEY_GUSTA_MYPAGE_THEME_DARK = "KEY_GUSTA_MYPAGE_THEME_DARK";

const theme = {
    light: {
        primaryColor: "orange-300",
        secondaryColor: "gray-300",
        textColor: "gray-800",
        imgTheme: "sun.png"
    },
    dark: {
        primaryColor: "gray-600",
        secondaryColor: "orange-600",
        textColor: "gray-200",
        imgTheme: "moon.png"
    }
};

const elements = {
    body: document.getElementById("body"),
    header: document.getElementById("header"),
    headerTitle: document.getElementById("spanTitle"),
    compEmail: document.getElementById("compEmail"),
    compWhatsapp: document.getElementById("compWhatsapp"),
    compLang: document.getElementById("compLang"),
    compTheme: document.getElementById("compTheme"),
    imgTheme: document.getElementById("imgTheme")
};

const clickTheme = function () {
    if (localStorage.getItem(KEY_GUSTA_MYPAGE_THEME) === KEY_GUSTA_MYPAGE_THEME_LIGTH) {
        localStorage.removeItem(KEY_GUSTA_MYPAGE_THEME);
        localStorage.setItem(KEY_GUSTA_MYPAGE_THEME, KEY_GUSTA_MYPAGE_THEME_DARK);
    } else {
        localStorage.removeItem(KEY_GUSTA_MYPAGE_THEME);
        localStorage.setItem(KEY_GUSTA_MYPAGE_THEME, KEY_GUSTA_MYPAGE_THEME_LIGTH);
    }

    initTheme();
}

const initTheme = function () {
    if (!localStorage.getItem(KEY_GUSTA_MYPAGE_THEME)) {
        localStorage.setItem(KEY_GUSTA_MYPAGE_THEME, KEY_GUSTA_MYPAGE_THEME_LIGTH);
    }

    themeSelected = localStorage.getItem(KEY_GUSTA_MYPAGE_THEME);

    if (themeSelected === KEY_GUSTA_MYPAGE_THEME_LIGTH) {
        elements.body.classList.remove(`bg-${theme.dark.primaryColor}`);
        elements.body.classList.add(`bg-${theme.light.primaryColor}`);

        elements.header.classList.remove(`bg-${theme.dark.secondaryColor}`);
        elements.header.classList.add(`bg-${theme.light.secondaryColor}`);

        elements.headerTitle.classList.remove(`text-${theme.dark.textColor}`);
        elements.headerTitle.classList.add(`text-${theme.light.textColor}`);

        elements.compEmail.classList.remove(`bg-${theme.dark.primaryColor}`);
        elements.compEmail.classList.remove(`text-${theme.dark.textColor}`);
        elements.compEmail.classList.add(`bg-${theme.light.primaryColor}`);
        elements.compEmail.classList.add(`text-${theme.light.textColor}`);

        elements.compWhatsapp.classList.remove(`bg-${theme.dark.primaryColor}`);
        elements.compWhatsapp.classList.remove(`text-${theme.dark.textColor}`);
        elements.compWhatsapp.classList.add(`bg-${theme.light.primaryColor}`);
        elements.compWhatsapp.classList.add(`text-${theme.light.textColor}`);

        elements.compLang.classList.remove(`bg-${theme.dark.primaryColor}`);
        elements.compLang.classList.remove(`text-${theme.dark.textColor}`);
        elements.compLang.classList.add(`bg-${theme.light.primaryColor}`);
        elements.compLang.classList.add(`text-${theme.light.textColor}`);

        elements.compTheme.classList.remove(`bg-${theme.dark.primaryColor}`);
        elements.compTheme.classList.add(`bg-${theme.light.primaryColor}`);
        elements.imgTheme.src = "/public/sun.png";

    } else {
        elements.body.classList.remove(`bg-${theme.light.primaryColor}`);
        elements.body.classList.add(`bg-${theme.dark.primaryColor}`);

        elements.header.classList.remove(`bg-${theme.light.secondaryColor}`);
        elements.header.classList.add(`bg-${theme.dark.secondaryColor}`);

        elements.headerTitle.classList.remove(`text-${theme.light.textColor}`);
        elements.headerTitle.classList.add(`text-${theme.dark.textColor}`);

        elements.compEmail.classList.remove(`bg-${theme.light.primaryColor}`);
        elements.compEmail.classList.remove(`text-${theme.light.textColor}`);
        elements.compEmail.classList.add(`bg-${theme.dark.primaryColor}`);
        elements.compEmail.classList.add(`text-${theme.dark.textColor}`);

        elements.compWhatsapp.classList.remove(`bg-${theme.light.primaryColor}`);
        elements.compWhatsapp.classList.remove(`text-${theme.light.textColor}`);
        elements.compWhatsapp.classList.add(`bg-${theme.dark.primaryColor}`);
        elements.compWhatsapp.classList.add(`text-${theme.dark.textColor}`);

        elements.compLang.classList.remove(`bg-${theme.light.primaryColor}`);
        elements.compLang.classList.remove(`text-${theme.light.textColor}`);
        elements.compLang.classList.add(`bg-${theme.dark.primaryColor}`);
        elements.compLang.classList.add(`text-${theme.dark.textColor}`);


        elements.compTheme.classList.remove(`bg-${theme.light.primaryColor}`);
        elements.compTheme.classList.add(`bg-${theme.dark.primaryColor}`);
        elements.imgTheme.src = "/public/moon.png";
    }
};

initTheme();