// ==UserScript==
// @name         AdBlock Yandex.Music
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Yandex.Music AdBlock
// @author       Mazayw
// @match        https://music.yandex.ru/*
// @icon         https://www.google.com/s2/favicons?domain=yandex.ru
// @downloadURL  https://raw.githubusercontent.com/Mazayw/Yandex.Music-AdBlock/main/script.js
// @updateURL    https://raw.githubusercontent.com/Mazayw/Yandex.Music-AdBlock/main/script.js
// @license MIT
// ==/UserScript==

(function () {
    'use strict';
    if (document.getElementsByClassName('bar-below bar-below_plus')) document.getElementsByClassName('bar-below bar-below_plus')[0].classList.add('popup_hidden');
    setInterval(() => {
        const modalWindow = document.getElementsByClassName('crackdown-popup popup_compact local-theme-white local-icon-theme-white popup deco-pane-popup popup_modal');
        if (modalWindow.length) {
            if (!Object.values(modalWindow[0].classList).includes('popup_hidden')) {
                document.getElementsByClassName('d-button deco-button deco-button-flat d-button_type_flat d-button_w-icon d-button_w-icon-centered crackdown-popup__close')[0].click();
                document.getElementsByClassName('player-controls__btn deco-player-controls__button player-controls__btn_play')[0].click();
            }
        }
    }, 1000);
})();