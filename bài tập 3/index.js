document.getElementById("btnResult").onclick = function(){
  //Đầu vào
  let name = document.getElementById("name").value;
  let tongThuNhapNam = document.getElementById("tongtiennam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNgPhuThuoc").value * 1;

  //Xử lí
  let tongChiuThue = tongThuNhapNam - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
  let total = 0;
  let current = new Intl.NumberFormat("vn-VN");
  if(tongThuNhapNam < 11e+6){
      alert("Số tiền thu nhập không hợp lệ");
  }else{
      if(tongChiuThue <= 60e+6 ){
          total = tongChiuThue * 0.05;
      }else if(tongChiuThue <= 120e+6){
          total = tongChiuThue * 0.1;
      }else if(tongChiuThue <= 210e+6){
          total = tongChiuThue * 0.15;
      }else if(tongChiuThue <= 384e+6){
          total = tongChiuThue * 0.2;
      }else if(tongChiuThue <= 624e+6){
          total = tongChiuThue * 0.25;
      }else if(tongChiuThue <= 960e+6){
          total = tongChiuThue * 0.3;
      }else{
          total = tongChiuThue * 0.35;
      }
      
  }
  document.getElementById("showResult").innerHTML ="Họ Tên :" + name + "<br/> " +"Tiền thuế thu nhập cá nhân là : " + current.format(total);
}