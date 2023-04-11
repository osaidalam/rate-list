function bill()

{

var price;
var quantity=parseInt(document.getElementById("quantity").value)

var a=document.getElementById("product").value

if (a=="beef biryani")
{
    price=350
}
else if(a=="chicken biryani")
{

price=200

}

else if(a=="qorma")
{

price=1000

}

else if(a=="chicken karahi")
{

price=1450

}

else if(a=="beef karahi")
{

price=3000

}

else if(a=="pulao")
{

price=500

}

else if(a=="kheer")
{

price=800

}

else if(a=="coldrink")
{

price=70

}

price=parseInt(price);
if(document.getElementById("quantity").value=="")
{
    quantity=1;
}
    var bill=price*quantity;
    document.getElementById("price").innerText=bill.toString();
}

