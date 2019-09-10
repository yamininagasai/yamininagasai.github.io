function totalCalc(){			//calculating the product price depending on quantity
	var quantity = document.getElementById("quant").value;
	var price=document.getElementById("price").value;
	if (quantity>5){
		alert ("you can only add 5 quantities");
		document.getElementById("quant").value="";
		document.getElementById("total").value="";
		}
	else{
		var rupees=(quantity*price);
		cost=rupees.toFixed(2);
		document.getElementById("total").value = cost;
		document.getElementById("total").disabled=true;
		}
	}
function cook(){	//saving the product details in the localStorage
	var productPrice = document.getElementById("total").value;
	var productTitle= document.title;					//tit=doll
	var productId=document.getElementById("demo").value;
	var productQuantity=document.getElementById("quant").value;
	if(quant.length==0){
		alert("Please enter quantity of products");
		return false;
		}
	else{
		var myProduct={title: productTitle, quantity:productQuantity, id: productId, price:productPrice;
		var myJSON= JSON.stringify(myProduct);			
		var productcount=localStorage.length;
		if(productcount==0){
			localStorage.setItem("product1",myJSON);
			}
		else if(productcount<=16){
			var x = Math.floor((Math.random() * 10000) + 1);
            var i=0, j=0;
            while(i<productcount){
			var key=localStorage.key(i);
			if(key=="price"){
				i++;
				j++;
				if(j==productcount){
					localStorage.setItem("product"+x, myJSON);
					}
				}
			else{
				var product=localStorage.getItem(key);
				var data=JSON.parse(product);
				var producttitle=data.id;
				if(producttitle!=id){
					i++;
					j++;
					if(j==productcount){
						localStorage.setItem("product"+x, myJSON);
						}
					}
				else if(producttitle==id){
					localStorage.setItem(key, myJSON);
					return true;
					}
				}
			}
		}
		return true;
		}
	}
