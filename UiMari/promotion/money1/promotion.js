/***************************   แพ็คเจกเติมเงิน    ************************ */
/*****************************รับ TruePoint 2 เท่า *************************/

var topup = [];
topup["firstName"] = "รับ TruePoint 2 เท่า";
topup["ราคา"] = "ราคาเริ่มต้นเพียง <br><h2> 9 บาท </h2>ต่อซิม";
topup["sim"] = "|| ซิมยกก๊วน แลกได้ ||";
topup["โบนัส"] = "  ค่าโทร 5 บาท <br> โทรในเครือข่ายครบ 9 <br>โทรฟรีในเครือข่ายได้ถึงเที่ยงคืน";
topup["ค่าโทร"] = "1.50 บาท/นาที (คิดตามจริงเป็นวินาที)";
topup["3g4g"] = "1.50 บาท/MB <br> ที่ความเร็วสูงสุด 42 Mbps ";
topup["โบนัสรายวัน"] = " WIFI 30 นาที ";
topup["เพิ่มเติม"] = "- ค่าโทรและเน็ต 20 บาท ใช้ได้ 7 วัน<br>(เมื่อเติมเงินครั้งแรก 20 บาทขึ้นไป)<br><br>- ค่าโทรและเน็ต 90 บาท พร้อม WIFI 90 ชั่วโมง <br>ใช้ได้ 7 วัน <br>(เมื่อเติมเงินสะสมครบ 90 บาท ทุก 30 วัน)<br><br>- TruePoint 2 เท่า ทุกครั้งที่เติมเงิน <br>(ปกติ เติมเงินทุก 25 บาท =  TruePoint 1 คะแนน)";


$('#all').html(topup["firstName"]);
$('#all2').html(topup["ราคา"]);
$('#all3').html(topup["sim"]);
$('#all4').html(topup["โบนัส"]);
$('#all5').html(topup["ค่าโทร"]);
$('#all6').html(topup["3g4g"]);
$('#all7').html(topup["โบนัสรายวัน"]);
$('#all8').html(topup["เพิ่มเติม"]);