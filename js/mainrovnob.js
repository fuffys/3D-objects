var rovnob = {

    sidea: 0,
    sideb: 0,
    sideVa: 0,
    sideVb: 0,


    rovnobs1: function(sa=this.sidea, sVa=this.sideVa,){
        return sa*sVa
    },
    rovnobs2: function(sb=this.sideb, sVb=this.sideVb,){
        return sb*sVb
    },
    rovnobo: function(sa=this.sidea, sb=this.sideb){
        return 2*(sa+sb)
    }


}

console.log(rovnob.rovnobs());

function calc(){
    rovnob.sidea = parseInt(document.getElementById('sidea').value);
    rovnob.sideb = parseInt(document.getElementById('sideb').value);
    rovnob.sideVa = parseInt(document.getElementById('sideVa').value);
    rovnob.sideVb = parseInt(document.getElementById('sideVb').value);
    document.getElementById('result').innerHTML =` Rovnoběžník s pomocí Va má obsah ${rovnob.rovnobs1()}cm&sup2. `
    document.getElementById('result2').innerHTML =` Rovnoběžník s pomocí Vb má obsah ${rovnob.rovnobs2()}cm&sup2. `
    document.getElementById('result3').innerHTML =` Rovnoběžník má obvod ${rovnob.rovnobo()}cm. `
}
