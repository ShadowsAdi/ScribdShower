// ==UserScript==
// @id             Scribd.com Shower
// @name           Scribd.com Shower
// @version        1.0
// @author         Shadows Adi
// @include        http*://*.scribd.com/*
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @homepageURL    https://github.com/ShadowsAdi/ScribdShower
// ==/UserScript==
setInterval(function() {
    $('.promo').remove();
    $('.absimg').css('opacity', '1.0');
    $('.text_layer').css('text-shadow', '0px 0px 0px #000');
}, 1000);
