/*
* Contains code based on Read More Plugin
*
* Copyright (c) 2018 Kristijonas Gerdvilis
* @url https://github.com/krisger/ReadMorePlugin
*
* Licensed under the MIT License (MIT) - see ../license.txt
*
* Modified by Dominika Rauk
*
 */

 
jQuery(document).ready(function ($) {

	/** Team **/

    $(".dhc-doctor-enable-readmore .et_pb_team_member_description > div").readmore({
        hideText: wp.i18n.__("Less", "divi-health-clinic"),
        readText: wp.i18n.__("More", "divi-health-clinic"),
        isTextShown: false,
        effect: true,
        effectOption: "slow",
        buttonClasses: "btn-more",
        dataid: "read-more-action",
        multiple: true
    });

	
	/** Treatments **/

    // Configure/customize these variables.
    var charNumber = 90;  // How many characters are shown by default
    var moreText = wp.i18n.__("Less", "divi-health-clinic");
    var lessText = wp.i18n.__("More", "divi-health-clinic");


    $('.dhc-treatments-enable-readmore .et_pb_blurb_container .et_pb_blurb_description').each(function () {
        var content = $(this).html();

        if (content.length > charNumber) {

            var shortContent = content.substr(0, charNumber);
            var fullContent = content.substr(charNumber, content.length - charNumber);

            var html = shortContent + '<span class="more-ellipses">...</span></span><span class="more-content"><span>' + fullContent + '</span> <a href="" class="more-less-link">' + moreText + '</a></span>';

            $(this).html(html);
        }
    });

    $(".more-less-link").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moreText);
        } else {
            $(this).addClass("less");
            $(this).html(lessText);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

});