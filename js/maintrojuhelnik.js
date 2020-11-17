var trojuhel = {

    sidea: 0,
    sideb: 0,
    sidec: 0,
    sideVa: 0,


    trojuhels: function(sa=this.sidea, sVa=this.sideVa,){
        return (sa*sVa)/2
    },
    trojuhelo: function(sa=this.sidea, sb=this.sideb, sc=this.sidec){
        return sa+sb+sc
    }


}

console.log(trojuhel.trojuhels());

function calc(){
    trojuhel.sidea = parseInt(document.getElementById('sidea').value);
    trojuhel.sideb = parseInt(document.getElementById('sideb').value);
    trojuhel.sidec = parseInt(document.getElementById('sidec').value);
    trojuhel.sideVa = parseInt(document.getElementById('sideVa').value);
    document.getElementById('result').innerHTML =` Trojúhelník obsah ${trojuhel.trojuhels()}cm&sup2. `
    document.getElementById('result2').innerHTML =` Trojúhelník má obvod ${trojuhel.trojuhelo()}cm. `
}
