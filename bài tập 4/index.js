document.getElementById("btnResult").onclick = function(){
  //Đầu vào
  let customerType = document.getElementById("loaikhachhang").value;
  let customerCode = document.getElementById("makhachhang").value;
  let soKenhSenior = document.getElementById("soKenhSenior").value*1;
  let soKetNoi = document.getElementById("soKetNoi").value*1;
  //Xử lí
  let cost = 0;
  let current = new Intl.NumberFormat("en-US",{
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
  switch(customerType){
      case "nhaDan":{
          cost = 4.5 + 20.5 + 7.5*(soKenhSenior);
          break;
      }
      case "doanhNgiep":{
          if(soKetNoi <= 10){
              cost = 15 + 75 + 50*soKenhSenior;
              break;
          }else{
              cost = 15 + 75 + (soKetNoi-10)*5 + 50*soKenhSenior;
              break;
          }  
      }
      default :{
          alert("Loại khách hàng không hợp lệ");
      }
  }
  document.getElementById("showResult").innerHTML = "Mã khách hàng : " + customerCode + "<br/>" + "Tổng tiền cáp là: " + current.format(cost);

}
// Onchange xử lí sự kiện của select dropdown
document.getElementById("soKetNoi").style.display = "none";
function displayInput(){
  let val = document.getElementById("loaikhachhang").value;
  if(val === "doanhNgiep"){
      document.getElementById("soKetNoi").style.display = "block";
  }else{
      document.getElementById("soKetNoi").style.display = "none";
  }  
}
