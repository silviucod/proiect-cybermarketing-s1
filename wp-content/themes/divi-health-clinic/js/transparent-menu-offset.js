jQuery(document).ready(function ($) {

    function setOffset() {

        var $menu = $('#dhc-transparent-menu');
        var $section = $('.dhc-top-section');

        var $menuHeight = $($menu).outerHeight();
        //console.log($menuHeight);

        var $sectionPadding = $menuHeight + 50;
        //console.log($sectionPadding);

        $section.css({
            "padding-top": $sectionPadding + 'px',
            "margin-top": -$menuHeight
        });
        $menu.attr("style", "background-color: transparent !important");

    }

    setOffset();

    $(window).resize(function () {
        setOffset(); 
    });
});