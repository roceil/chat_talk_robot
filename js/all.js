$(document).ready(function () {
    $(`.btn-topball`).click(function (e) {
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
});