$(document).ready(function () {
    $(`.btn-topball`).click(function (e) {
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    $(`.home-btn`).click(function (e) { 
        e.preventDefault();
        alert(`想幹嘛？有種說出來`)
    });
    $(`.footer-btn`).click(function (e) { 
        e.preventDefault();
        alert(`你以為會有好東西嗎？`)
    });
});