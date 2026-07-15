let bid = 0;
let bidder = "Nobody";
let time = 30;

function update(){
    document.getElementById("bid").innerHTML = bid;
    document.getElementById("buyer").innerHTML = bidder;
    document.getElementById("time").innerHTML = time;
}

setInterval(()=>{
    if(time > 0){
        time--;
        update();
    }
},1000);


document.addEventListener("keydown", e=>{

    if(e.key=="1"){
        bid += 10;
        bidder="New Bidder";
        time=30;	
        document.getElementById("status").innerHTML="🔥 NEW BID!";
    }

    if(e.key=="2"){
        document.getElementById("status").innerHTML="⚠️ GOING ONCE!";
    }

    if(e.key=="3"){
        document.getElementById("status").innerHTML="⚠️ GOING TWICE!";
    }

    if(e.key=="4"){
        document.getElementById("status").innerHTML="✅ SOLD!";
        time=0;
    }

    update();
});