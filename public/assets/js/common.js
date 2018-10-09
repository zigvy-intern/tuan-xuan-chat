$(document).ready(function () {
    $("#menu").click(function () {
        $(".grid-container").toggleClass("open-menu");
    })
});

function openInfo() {
    $(".info-container").addClass("open-info");
}

function closeInfo() {
    $(".info-container").removeClass("open-info");
}
