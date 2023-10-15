// ==UserScript==
// @name         AdBlocker PopUp Block
// @version      0.1
// @description  None
// @author       Phillip
// @match        https://youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const Element = 'style-scope ytd-popup-container';
    const Remove = document.getElementById(Element);
    if (Remove) { Remove.remove(); }
})();
