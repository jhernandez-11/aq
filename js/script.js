$(document).ready(() => {
    ///////////////////// JQUERY /////////////////////

    // TOGGLE HELP GLOBAL
    $('.header-hidden').hide()
    $('.section__container__3__sub--row').on('click', () => {
        $('.header-visible').toggle('slow')
        $('.header-hidden').toggle('slow')
    })
})