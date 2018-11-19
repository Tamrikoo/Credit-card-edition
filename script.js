function Card(){
	var pin=prompt("Enter your PIN")
  this.cardHolder=prompt ("Enter Your first name")+" "+prompt ("Enter Your Name")
  this.name="bankCard"
	var cash=0
	this.cardNum=(function(){
    var num = ""
    var i = 1
    while(i<20){
	  var res = ""
      if(i%5 === 0){
		res = " "
      } else {
		res += String.fromCharCode(Math.round(Math.random()*9)+48)
	  }
      num+=res
	  i++
    }
    return num
  })()

this.putCash=function(sum){
	cash+=sum
}

this.getCash=function(sum1){
	if(prompt("Enter PIN")===pin){
		if ( sum1 > cash) return "No money"
		else {
			cash-=sum1
			return console.log(`Выдано: ${sum1}, Остаток ${cash}`)
		}
		}else{
     	 alert ("Пароль неправильный")
    	}
	}

this.showBalance=function(){
  if(prompt("Enter PIN")===pin){
    return cash
  }else{
    alert("Wrong password")
  }
}

}

//creating buttons

var buttonName=[
{
  text:"Create Card",
  callback: createCardFunction
},
{
  text:"Put Cash",
  callback: putCashFunction
},
{
  text:"Get Cash",
  callback: 'getCashFunction'
},
{
  text:"Show balance",
   callback: 'showBalanceFunction'
}
]

  for (var x of buttonName){
      var elem = buttonPlace.appendChild ( document.createElement ( "button" ) )
      elem.innerHTML = x.text;
      elem.className="buttons"
      elem.addEventListener ( 'click', x.callback )
  }


function createCardFunction (event){
    var card=new Card
    var notice = screenPlace.appendChild(document.createElement("p"))
    notice.innerHTML=`New Card created succesfully.<br>
     Card number: ${card.cardNum}<br>
     Card holder: ${card.cardHolder}<br>`
    notice.style.fontSize="40px"
}

function putCashFunction(event){
  //var inp = inputNumbers.appendChild(document.createElement("input"))
 // inp.type="number"
 //  var notice = screenPlace.appendChild(document.createElement("p"))
 // this.putCash()?this.putCash(inp.value):alert ("No card created")
 console.log (card)

    screenPlace.innerHTML=`${card.cardNum}`

}
