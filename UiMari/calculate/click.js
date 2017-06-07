$(function() {

    $('#on2').hide();
    $('#soflow-color1').change(function() {
        if ($('#soflow-color1').val() == 'mont') {
            $('#on2').show();
            $('#on1').hide();
        } else {
            $('#on1').show();
            $('#on2').hide();
        }
    });

    $('#on4').hide();
    $('#soflow-color2_1').change(function() {
        if ($('#soflow-color2_1').val() == 'mont1') {
            $('#on4').show();
            $('#on3').hide();
        } else {
            $('#on3').show();
            $('#on4').hide();
        }
    });

    $('#on6').hide();
    $('#soflow-color3').change(function() {
        if ($('#soflow-color3').val() == 'mont2') {
            $('#on6').show();
            $('#on5').hide();
        } else {
            $('#on5').show();
            $('#on6').hide();
        }
    });

    $('#on8').hide();
    $('#soflow-color4').change(function() {
        if ($('#soflow-color4').val() == 'mont3') {
            $('#on8').show();
            $('#on7').hide();
        } else {
            $('#on7').show();
            $('#on8').hide();
        }
    });

    $('#on10').hide();
    $('#soflow-color5').change(function() {
        if ($('#soflow-color5').val() == 'mont4') {
            $('#on10').show();
            $('#on9').hide();
        } else {
            $('#on9').show();
            $('#on10').hide();
        }
    });

    $('#on12').hide();
    $('#soflow-color6').change(function() {
        if ($('#soflow-color6').val() == 'mont5') {
            $('#on12').show();
            $('#on11').hide();
        } else {
            $('#on11').show();
            $('#on12').hide();
        }
    });
    //$('#table1').hide();
    $('#table2').hide();
    $('#table3').hide();
    $('#table4').hide();
    $('#table5').hide();
    $('#table6').hide();
    $('#table7').hide();

    $('#calculator').click(function() {
        $('#table1').hide();
        $('#table2').show();
        return false;
    });
    $('#calculator-1').click(function() {
        $('#table1').hide();
        $('#table2').show();
        return false;
    });

    $('#black1').click(function() {
        $('#table1').show();
        $('#table2').hide();
        return false;
    });
    $('#calculator2').click(function() {
        $('#table3').show();
        $('#table2').hide();
        return false;
    });

    $('#calculator2-1').click(function() {
        $('#table3').show();
        $('#table2').hide();
        return false;
    });

    $('#black2').click(function() {
        $('#table2').show();
        $('#table3').hide();
        return false;
    });

    $('#calculator3').click(function() {
        $('#table4').show();
        $('#table3').hide();
        return false;
    });
    $('#calculator3-1').click(function() {
        $('#table4').show();
        $('#table3').hide();
        return false;
    });
    $('#black4').click(function() {
        $('#table3').show();
        $('#table4').hide();
        return false;
    });

    $('#calculator4').click(function() {
        $('#table5').show();
        $('#table4').hide();
        return false;
    });
    $('#calculator4-1').click(function() {
        $('#table5').show();
        $('#table4').hide();
        return false;
    });
    $('#black5').click(function() {
        $('#table4').show();
        $('#table5').hide();
        return false;
    });
    $('#calculator5').click(function() {
        $('#table6').show();
        $('#table5').hide();
        return false;
    });
    $('#calculator5-1').click(function() {
        $('#table6').show();
        $('#table5').hide();
        return false;
    });
    $('#black6').click(function() {
        $('#table5').show();
        $('#table6').hide();
        return false;
    });

    $('#calculator6').click(function() {
        $('#table6').hide(1000);
        $('#table7').show(1000);
        $('#text2').hide(1000);
    });



});