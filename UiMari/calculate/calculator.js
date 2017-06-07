// alert('H I');
/*$(document).ready(function() {

    var x = $('input[name="a1"]').val();
    var mu = $('input[name="a2"]').val(); <<<เป็นการนำตัวหนังสือมา รวมกัน 
    
    var total = x + mu;

    function calculate() {
        $('#result').html(total);
    }
}); */
/*
$("#calculate").on('click', function() {
   //vent.preventDefault();
  var x = parseInt($("#a1").val());        
  var mu = parseInt($("#fname1").val());
   var total = x  * 10 ;
           
    $('#result').html(total);

});*/


var total, total2, total3, total4, total5, total6, n, result, q;



$("#calculator6").on('click', function() {

    var x = parseInt($("#a2").val());
    var x1 = parseInt($("#a1").val());
    //var y = parseInt($("#fname1").val());

    ////////////canal 1 ////////////////////////////
    if ($('#soflow-color2').val() == 'kb') {
        var z = parseInt($("#fname1").val());
        var y = z / 1024;

    } else if ($('#soflow-color2').val() == 'mb') {
        var z = parseInt($("#fname1").val());
        var y = z;

    } else if ($('#soflow-color2').val() == 'gb') {
        var z = parseInt($('#fname1').val());
        var y = z * 1024;

    } else {}


    if ($('#soflow-color1').val() == 'mont') {
        total = (y * 60) * (x) / 1024;


    } else {
        total = (y * 60) * (x1 * 30) / 1024;

    }
    ////////////////////////////////////////////////

    //////////////////canal 2 ////////////////////////

    var x2 = parseInt($("#a4").val());
    var x3 = parseInt($("#a3").val());

    if ($('#soflow-color2-1').val() == 'kb1') {
        var z1 = parseInt($("#fname2").val());
        var y1 = z1 / 1024;

    } else if ($('#soflow-color2-1').val() == 'mb1') {
        var z1 = parseInt($("#fname2").val());
        var y1 = z1;

    } else if ($('#soflow-color2-1').val() == 'gb1') {
        var z1 = parseInt($('#fname2').val());
        var y1 = z1 * 1024;

    } else {}

    if ($('#soflow-color2_1').val() == 'mont1') {
        total2 = y1 * x2 / 1024;


    } else {
        total2 = (y1 * x3) * (30) / 1024;

    }

    /////////////////////////////////////////////////

    //////////////////canal 3 ////////////////////////

    var x5 = parseInt($("#a6").val());
    var x4 = parseInt($("#a5").val());

    if ($('#soflow-color3-1').val() == 'kb2') {
        var z2 = parseInt($("#fname3").val());
        var y2 = z2 / 1024;

    } else if ($('#soflow-color3-1').val() == 'mb2') {
        var z2 = parseInt($("#fname3").val());
        var y2 = z2;

    } else if ($('#soflow-color3-1').val() == 'gb2') {
        var z2 = parseInt($('#fname3').val());
        var y2 = z2 * 1024;

    } else {}

    if ($('#soflow-color3').val() == 'mont2') {
        total3 = y2 * x5 / 1024;


    } else {
        total3 = (y2 * x4) * (30) / 1024;

    }

    /////////////////////////////////////////////////

    //////////////////canal 4 ////////////////////////
    var x7 = parseInt($("#a8").val());
    var x6 = parseInt($("#a7").val());

    if ($('#soflow-color4-1').val() == 'kb3') {
        var z3 = parseInt($("#fname4").val());
        var y3 = z3 / 1024;

    } else if ($('#soflow-color4-1').val() == 'mb3') {
        var z3 = parseInt($("#fname4").val());
        var y3 = z3;

    } else if ($('#soflow-color4-1').val() == 'gb3') {
        var z3 = parseInt($('#fname4').val());
        var y3 = z3 * 1024;

    } else {}

    if ($('#soflow-color4').val() == 'mont3') {
        total4 = y3 * x7 / 1024;


    } else {
        total4 = (y3 * x6) * (30) / 1024;

    }
    /////////////////////////////////////////////////

    //////////////////canal 5 ////////////////////////
    var x9 = parseInt($("#a10").val());
    var x8 = parseInt($("#a9").val());

    if ($('#soflow-color5-1').val() == 'kb4') {
        var z4 = parseInt($("#fname5").val());
        var y4 = z4 / 1024;

    } else if ($('#soflow-color5-1').val() == 'mb4') {
        var z4 = parseInt($("#fname5").val());
        var y4 = z4;

    } else if ($('#soflow-color5-1').val() == 'gb4') {
        var z4 = parseInt($('#fname5').val());
        var y4 = z4 * 1024;

    } else {}

    if ($('#soflow-color5').val() == 'mont4') {
        total5 = (y4 * 60) * (x9) / 1024;


    } else {
        total5 = (y4 * 60) * (x8 * 30) / 1024;

    }
    /////////////////////////////////////////////////

    //////////////////canal 6 ////////////////////////

    var x11 = parseInt($("#a12").val());
    var x10 = parseInt($("#a11").val());

    if ($('#soflow-color6-1').val() == 'kb5') {
        var z5 = parseInt($("#fname6").val());
        var y5 = z5 / 1024;

    } else if ($('#soflow-color6-1').val() == 'mb5') {
        var z5 = parseInt($("#fname6").val());
        var y5 = z5;

    } else if ($('#soflow-color6-1').val() == 'gb5') {
        var z5 = parseInt($('#fname6').val());
        var y5 = z5 * 1024;

    } else {}

    if ($('#soflow-color6').val() == 'mont5') {
        total6 = y5 * x11 / 1024;


    } else {
        total6 = (y5 * x10) * (30) / 1024;

    }
    /////////////////////////////////////////////////


    result = total + total2 + total3 + total3 + total4 + total5 + total6;
    q = result;
    //  $('#resultTotal1').val(total);
    // $('#resultTotal2').val(total2);
    //  $('#resultTotal3').val(total3);
    //$('#resultTotal4').val(total4);
    //$('#resultTotal5').val(total5);
    //$('#resultTotal6').val(total6);





    if (result >= 1024) {
        var result1 = result / 1024;
        n = result1.toFixed(2);
        $('#result').html(n + ' TB');
    } else if (result < 1) {
        var result1 = result * 1024;
        n = result1.toFixed(2);
        $('#result').html(n + ' MB');
    } else {
        n = result.toFixed(2);
        $('#result').html(n + ' GB');
    }
    /*$('#result').html(total + ' GB');*/

});

function myFunction() {
    if (total == null || total == "") {
        total = 0;
    }
    var result = "send.html?total1=" + total + "&total2=" + total2 + "&total3=" + total3 + "&total4=" + total4 + "&total5=" + total5 + "&total6=" + total6 + "&result1=" + q;
    window.location.replace(result);
}

//$('#result').html(10+9);