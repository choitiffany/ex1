$(function () {
    console.log('ready');

    $('#home1').click(function () {
        console.log('click');


        //  $('.home').css('backgroundColor', '#D1B3C4');
        $('.homeDetails').toggleClass('hide');
        $('.home').toggleClass('hide');
        return false;
    })



    $('#go1').click(function () {
        console.log('click');

        // $('.go').css('backgroundColor', '#BBC7A4');
        $('.go').toggleClass('hide');
        $('.goDetails').toggleClass('hide');
        return false;



    })

    $('#cruess1').click(function () {
        console.log('click');

        //$('.cruess').css('backgroundColor', '#ABB4CC');
        $('.cruess').toggleClass('hide');
        $('.cruessDetails').toggleClass('hide');
        return false;
    })

    $('#campus1').click(function () {
        console.log('click');

        // $('.campus').css('backgroundColor', '#A9C6CF');
        $('.campusDetails').toggleClass('hide');
        $('.campus').toggleClass('hide');

        return false;
    })


    $('.tip').hide();

    $('#home1').hover(function () {
        $('#homeText').show();
    }, function () {
        $('#homeText').hide();
    });

    $('#go1').hover(function () {
        $('#goText').show();
    }, function () {
        $('#goText').hide();
    });

    $('#cruess1').hover(function () {
        $('#cruessText').show();
    }, function () {
        $('#cruessText').hide();
    });

    $('#campus1').hover(function () {
        $('#campusText').show();
    }, function () {
        $('#campusText').hide();
    });

    //close functions
});