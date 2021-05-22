import './css/main.css'

import $ from 'jquery'

import './instaFeed.js'
import './carousel.js'

/*
 * restore animations once dom has settled
 */
$(document).ready(() => {
    $('body').removeClass("u-preload")
})


/*
 * show/hide nav modal
 */
function showNavModal() {
    $('#navModal').addClass('navModal-is-shown')
    $('body').addClass('l-noScroll')
}

function hideNavModal() {
    $('#navModal').removeClass('navModal-is-shown')
    $('body').removeClass('l-noScroll')
}

$('#hamburger').click(showNavModal)
$('#closeNavModal').add('.navModal--linkList > *').click(hideNavModal)
$(document).on('keyup', e => { e.key === "Escape" ? hideNavModal() : null })

/*
 * show/hide faq answers
 */
$('.faq--questionBox').click(event => {
    $(event.target).closest('.faq').toggleClass('faq-is-open')
    event.preventDefault()
})


/*
 * jump to email form from "get updates"
 */
$('.getUpdates').click(() => {
    $('.emailForm--inputBox').focus()
})


/*
 * show/hide mural modal
 */
function showMuralModal(event) {
    const name = event.target.closest('.muralThumbnail[data-mural-name]').dataset.muralName
    $(`.muralModalContainer[data-mural-name="${name}"]`).addClass('muralModalContainer-is-shown')
    $('body').addClass('l-noScroll')
}

function hideMuralModal() {
    $('.muralModalContainer-is-shown').removeClass('muralModalContainer-is-shown')
    $('body').removeClass('l-noScroll')
}

$('.muralThumbnail').click(showMuralModal)
$('.muralModal--close').click(hideMuralModal)
$('.muralModalContainer').click(hideMuralModal).children().click(() => { return false })
$(document).on('keyup', e => { e.key === "Escape" ? hideMuralModal() : null })


/*
 * mural gallery
 */
$('#muralGallerySlider').click(event => {
    $('#muralGallery').toggleClass('muralGallery-is-hidden')
    if (event.target.innerHTML === "&#10095;") {
        event.target.innerHTML = "&#10094;"
    } else {
        event.target.innerHTML = "&#10095;"
    }
})
