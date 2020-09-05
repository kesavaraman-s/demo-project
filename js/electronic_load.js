var divElement=document.createElement('div');
function loadElectroicItems(){
    
    for(var i=1;i<=5;i++){
        createProductList("laptop"+i,"$ 200");
    }
    console.log(document.querySelector(".fashion_section .container .row"));

}

function createProductList(productName,productPrice){

    var divColElement=document.createElement('div');
    var boxMain=document.createElement('div');
    var headerElement=document.createElement('h4');
    var paraElement=document.createElement('p');
    var spanElement=document.createElement('span');
    var imgDiv=document.createElement('div');
    var btnDiv=document.createElement('div');
    var buy_btnDiv=document.createElement('div');
    var imgElement=document.createElement('img');
    var anchorElement=document.createElement('a');

    divColElement.className="col-lg-4 col-sm-4";
    boxMain.className="box_main";
    headerElement.className="shirt_text";
    headerElement.innerText=productName;

    paraElement.className="price_text";
    paraElement.innerText="start price";

    spanElement.style.color="#262626";
    spanElement.innerText=productPrice;
    paraElement.appendChild(spanElement);

    imgDiv.className="electronic_img";

    imgElement.src="https://frischmart-test.s3.ap-south-1.amazonaws.com/fresh-farm.jpg";
    imgDiv.appendChild(imgElement);

    btnDiv.className="btn_main";
    buy_btnDiv.className="buy_bt";
    anchorElement.href="#";
    anchorElement.innerText="Buy Now";

    buy_btnDiv.appendChild(anchorElement);
    btnDiv.appendChild(buy_btnDiv);

    boxMain.appendChild(headerElement);
    boxMain.appendChild(paraElement);
    boxMain.appendChild(imgDiv);
    boxMain.appendChild(btnDiv);
    divColElement.appendChild(boxMain);

    
   document.querySelector(".fashion_section .container .row").appendChild(divColElement);
  

}