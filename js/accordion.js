$('.accordion').click(function () {
    if ($(this).next().is(":visible")) {
        $(this).next().hide('slow');
    } else {
        $('.panel:visible').hide('slow');
        $(this).next().show('slow');
    }
})