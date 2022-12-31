document.getElementById("btnResult").onclick = function(){
  //Đầu vào
  let name = document.getElementById("name").value;
  let soKW = document.getElementById("soKW").value * 1;

  //Xử lí
  let current = new Intl.NumberFormat("vn-VN");
  let total = 0;
  let result = "";
  if(!soKW ){
      alert("Tên hoặc Số kW không hợp lệ") ;
      // return ;
  }
  total = current.format(total);
  if(soKW <= 50){
      total = soKW * 500; 
  }else if(soKW <= 100){
      total = (50 * 500) + (soKW - 50)* 650;
  }else if(soKW <=200 ){
      total = (50 * 500) + (100-50)* 650 + (soKW - 100) * 850;
  }else if(soKW <=350){
      total = (50 * 500) + (100-50)* 650 + (200-100) * 850 + (soKW - 200)* 1100;
  }else{
      total = (50 * 500) + (100-50)* 650 + (200-100) * 850 + (350-200)* 1100 + (soKW - 350) * 1300;
  }
  result = "<div>"
  result += "<p>Tên là: "+ name +"</p>" 
  result += "<p>Tổng tiền điện là: " + current.format(total) + " vnd</p> "
  result += "</div>"
  document.getElementById("showResult").innerHTML = result;
}