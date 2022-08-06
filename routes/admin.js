let express = require("express");
let router = express.Router();

router.get("/dashboard", function (req, res) {
  let userid = req.query.userid,
    password = req.query.password;

  if (userid == "1234" && password == "1234") {
    res.render("dashboard");
  } else {
    res.render("login", {
      status: true,
    });
  }
});

router.get("/dashboard/result", function (req, res) {
  var roll = req.query.rollno;
  var name = req.query.name;
  var fn = req.query.fname;
  var sn = req.query.sname;

  var sub1 = parseInt(req.query.pmarks);
  var sub2 = parseInt(req.query.cmarks);
  var sub3 = parseInt(req.query.mmarks);
  var sub4 = parseInt(req.query.hmarks);
  var sub5 = parseInt(req.query.emarks);
  var total = sub1 + sub2 + sub3 + sub4 + sub5;
  var per = total / 5;
  var grade;

  var prem = "";
  if (sub1 < 33) {
    prem += "*";
  } else if (sub1 > 33 && sub1 <= 48) {
    prem += "F";
  } else if (sub1 > 49 && sub1 <= 60) {
    prem += "E";
  } else if (sub1 > 60 && sub1 <= 70) {
    prem += "D";
  } else if (sub1 > 70 && sub1 <= 80) {
    prem += "C";
  } else if (sub1 > 80 && sub1 <= 90) {
    prem += "B";
  } else if (sub1 > 90 && sub1 <= 100) {
    prem += "A";
  }

  var crem = "";
  if (sub2 < 33) {
    crem += "*";
  } else if (sub2 > 33 && sub2 <= 48) {
    crem += "F";
  } else if (sub2 > 49 && sub2 <= 60) {
    crem += "E";
  } else if (sub2 > 60 && sub2 <= 70) {
    crem += "D";
  } else if (sub2 > 70 && sub2 <= 80) {
    crem += "C";
  } else if (sub2 > 80 && sub2 <= 90) {
    crem += "B";
  } else if (sub2 > 90 && sub2 <= 100) {
    crem += "A";
  }

  var mrem = "";
  if (sub3 < 33) {
    mrem += "*";
  } else if (sub3 > 33 && sub3 <= 48) {
    mrem += "F";
  } else if (sub3 > 49 && sub3 <= 60) {
    mrem += "E";
  } else if (sub3 > 60 && sub3 <= 70) {
    mrem += "D";
  } else if (sub3 > 70 && sub3 <= 80) {
    mrem += "C";
  } else if (sub3 > 80 && sub3 <= 90) {
    mrem += "B";
  } else if (sub3 > 90 && sub3 <= 100) {
    mrem += "A";
  }

  var hrem = "";
  if (sub4 < 33) {
    hrem += "*";
  } else if (sub4 > 33 && sub4 <= 48) {
    hrem += "F";
  } else if (sub4 > 49 && sub4 <= 60) {
    hrem += "E";
  } else if (sub4 > 60 && sub4 <= 70) {
    hrem += "D";
  } else if (sub4 > 70 && sub4 <= 80) {
    hrem += "C";
  } else if (sub4 > 80 && sub4 <= 90) {
    hrem += "B";
  } else if (sub4 > 90 && sub4 <= 100) {
    hrem += "A";
  }

  var erem = "";
  if (sub5 < 33) {
    erem += "*";
  } else if (sub5 > 33 && sub5 <= 48) {
    erem += "F";
  } else if (sub5 > 49 && sub5 <= 60) {
    erem += "E";
  } else if (sub5 > 60 && sub5 <= 70) {
    erem += "D";
  } else if (sub5 > 70 && sub5 <= 80) {
    erem += "C";
  } else if (sub5 > 80 && sub5 <= 90) {
    erem += "B";
  } else if (sub5 > 90 && sub5 <= 100) {
    erem += "A";
  }

  var compartment = "";
  if (
    (prem === "*" && crem === "*" && mrem === "*") ||
    (crem === "*" && mrem === "*" && hrem === "*") ||
    (mrem === "*" && hrem === "*" && crem === "*") ||
    (erem === "*" && hrem === "*" && mrem === "*") ||
    (prem === "*" && hrem === "*" && erem === "*") ||
    (prem === "*" && crem === "*" && erem === "*")
  ) {
    compartment += "Fail";
  } else if (
    (hrem === "*" && erem === "*") ||
    (hrem === "*" && prem === "*") ||
    (hrem === "*" && crem === "*") ||
    (hrem === "*" && mrem === "*")
  ) {
    compartment += "Compartment in 2 Subject";
  } else if (
    (erem === "*" && hrem === "*") ||
    (erem === "*" && prem === "*") ||
    (erem === "*" && crem === "*") ||
    (erem === "*" && mrem === "*")
  ) {
    compartment += "Compartment in 2 Subject";
  } else if (
    (prem === "*" && erem === "*") ||
    (prem === "*" && hrem === "*") ||
    (prem === "*" && crem === "*") ||
    (prem === "*" && mrem === "*")
  ) {
    compartment += "Compartment in 2 Subject";
  } else if (
    (crem === "*" && erem === "*") ||
    (crem === "*" && prem === "*") ||
    (crem === "*" && hrem === "*") ||
    (crem === "*" && mrem === "*")
  ) {
    compartment += "Compartment in 2 Subject";
  } else if (
    (mrem === "*" && erem === "*") ||
    (mrem === "*" && prem === "*") ||
    (mrem === "*" && crem === "*") ||
    (mrem === "*" && hrem === "*")
  ) {
    compartment += "Compartment in 2 Subject";
  } else if (
    hrem === "*" ||
    erem === "*" ||
    prem === "*" ||
    crem === "*" ||
    mrem === "*"
  ) {
    compartment += "Compartment in 1 Subject";
  } else {
    compartment += "Pass";
  }

  var gen = "";
  if (req.query.gm) {
    gen += "Male";
  }
  if (req.query.gf) {
    gen += "Female";
  }
  if (req.query.go) {
    gen += "Other";
  }

  var slt = "";
  if (gen === "Male") {
    slt += "S/O";
  }
  if (gen === "Female") {
    slt += "D/O";
  }
  if (gen === "Other") {
    slt += "";
  }

  if (per >= 00 && per <= 32) {
    grade = "Failed";
  } else if (per >= 33 && per <= 48) {
    grade = "F";
  } else if (per >= 49 && per <= 60) {
    grade = "E";
  } else if (per >= 61 && per <= 70) {
    grade = "D";
  } else if (per >= 71 && per <= 80) {
    grade = "C";
  } else if (per >= 81 && per <= 90) {
    grade = "B";
  } else if (per >= 91 && per <= 100) {
    grade = "A";
  } else {
    grade = "Invalid";
  }

  if (grade === "A" || grade === "B") {
    alert(`Congratulation, You Scored ${per} %`);
  }

  /*
    var fnl =
      "<table bgcolor='#dcdde1' border='1' cellspacing='1' cellpadding='16' width='64%' ><caption></caption>";
    fnl +=
      "<tr><th><font size='6' color='blue'>Central Board of Secondary Education</font></th></tr>";
    fnl += `<tr><th><img src='cbse.png' alt='CBSE LOGO' width='16%'></th></tr>`;
    fnl += `<tr><td><b>Roll No.</b> : ${roll}<br><b>Name : </b>${name} ${slt} Shri ${fn}<br><b>Gender : </b>${gen}<br><b>School Name : </b>${sn}</td></tr></table>`;
    fnl +=
      "<table bgcolor='aliceblue' border='1' cellspacing='1' cellpadding='16' width='64%'>";
    fnl += `<tr><th>Subject</th><th>Minimum Marks</th><th>Maximum Marks</th><th>Obtained Marks</th><th>Grade</th></tr>`;
    fnl += `<tr>
        <td><b>Physics</b><br>
        <b>Chemistry</b><br>
        <b>Mathematics</b><br>
        <b>Hindi</b><br>
        <b>English</b><br>
        </td>
        <td>33<br>33<br>33<br>33<br>33</td>
        <td>100<br>100<br>100<br>100<br>100</td>
        <td>${sub1}<br>${sub2}<br>${sub3}<br>${sub4}<br>${sub5}</td>
        <td>${prem}<br>${crem}<br>${mrem}<br>${hrem}<br>${erem}</td>
      </tr></table>`;
    fnl += `<table bgcolor='#81ecec' border='1' cellspacing='1' cellpadding='24' width='64%'>
    <center>
        <td>
        <b>Total Marks : 500<br>
        Obtained Marks : ${total}/500</b><br>
        <b>Grade : ${grade}</b><br>
        <b>Percentage : ${per} %</b><br>
        <b>Remark : ${compartment}</b>
        </td></center></table>`;

    console.log(fnl);
    */

  res.render("result", {
    rollno: roll,
    name: name,
    slt: slt,
    fn: fn,
    gen: gen,
    sn: sn,
    sub1: sub1,
    sub2: sub2,
    sub3: sub3,
    sub4: sub4,
    sub5: sub5,
    prem: prem,
    crem: crem,
    mrem: mrem,
    hrem: hrem,
    erem: erem,
    total: total,
    grade: grade,
    per: per,
    compartment: compartment,
  });
});

module.exports = router;
