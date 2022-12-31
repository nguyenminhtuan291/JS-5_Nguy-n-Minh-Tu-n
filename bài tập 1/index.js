

document.getElementById("btnResult").onclick = function () {
  //Đầu vào
  let diemChuan = +domID("diemChuan").value;
  let diemCongKhuVuc = domID("diemCongKhuVuc").value;
  let diemCongDoiTuong = domID("diemCongDoiTuong").value;
  let diemMonThu1 = +domID("diemMon1").value;
  let diemMonThu2 = +domID("diemMon2").value;
  let diemMonThu3 = +domID("diemMon3").value;

  //Xử lí
  let total = tongBaMon(diemMonThu1, diemMonThu2, diemMonThu3);
  let result = "";
  //   let total2 = 0;
  switch (diemCongKhuVuc) {
    case "khuVuckhong": {
      total = total;
      break;
    }
    case "khuVucA": {
      total += 2;
      break;
    }
    case "khuVucB": {
      total += 1;
      break;
    }
    case "khuVucC": {
      total += 0.5;
      break;
    }
  }

  switch (diemCongDoiTuong) {
    case "doiTuongkhong": {
      total = total;
      break;
    }
    case "doiTuongX": {
      total += 2.5;
      break;
    }
    case "doiTuongY": {
      total += 1.5;
      break;
    }
    case "doiTuongZ": {
      total += 1;
      break;
    }
  }
  
  if (total >= diemChuan) {
    result = "Bạn đã đậu!";
  } else {
    result = "Bạn đã rớt!";
  }

  function domID(id){
    return document.getElementById(id);
  }
  
  // Hàm tổng điểm 3 môn
  function tongBaMon(diem1,diem2,diem3){
    let total = diem1 + diem2 + diem3;
    return total;
  }
  
  // Đầu ra
  domID("showResult").innerHTML = result + "  Tổng điểm là: " + total;
}