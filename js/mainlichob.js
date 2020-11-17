var lichob = {
    sidea: 0,
    sideb: 0,
    sidec: 0,
    sided: 0,
    sidev: 0,


    lichobs: function(sa=this.sidea, sc=this.sidec, sv=this.sidev ){
        return ((sa+sc)/2)*sv
    },
    lichobo: function(sa=this.sidea, sb=this.sideb, sc=this.sidec, sd=this.sided){
        return (sa+sb+sc+sd)
    }


}

console.log(lichob.lichobs());

function calc(){
    lichob.sidea = parseInt(document.getElementById('sidea').value);
    lichob.sideb = parseInt(document.getElementById('sideb').value);
    lichob.sidec = parseInt(document.getElementById('sidec').value);
    lichob.sided = parseInt(document.getElementById('sided').value);
    lichob.sidev = parseInt(document.getElementById('sidev').value);
    document.getElementById('result').innerHTML =` Lichoběžník má obsah ${lichob.lichobs()}cm&sup2. `
    document.getElementById('result2').innerHTML =` Lichoběžník má obvod ${lichob.lichobo()}cm. `
}
