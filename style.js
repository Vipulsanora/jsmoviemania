


            //    Add Movies

const form = document.querySelector("nine");
const tbody = document.querySelector("tbody");


function onAddWebsite(e){
    e.preventDefault();
    const website = document.getElementById("website").value;
    const num = document.getElementById("num").value;
    // alert(website);
    tbody.innerHTML += `
       <tr>
            <td>${website}</td>
            <td>${num}</td>
            <td><button class="btn btn-danger two" onclick="remove_tr()">Delete</button></td>
        
       </tr>
       `;


}
nine.addEventListener("submit", onAddWebsite);



    //   Delete movies


function remove_tr(This){
    // alert("why");
    // This.closest('tr').remove();
    var table = document.getElementById("mytab");
    table.deleteRow(-1);
}





//  Search Movies


    var searchForm = document.forms['srhmov'][0];
searchForm.addEventListener('keyup',function(e){
    var searchItem = tbody.querySelectorAll('tr');
    var filter = e.target.value.toUpperCase();
    Array.from(searchItem).forEach(function (text){
        var textVal = text.firstElementChild.textContent;
        if (textVal.toUpperCase().indexOf(filter) > -1){
            text.style.display = "tr";
        } else{
            text.style.display = "none";
        }
    })
})


var hideform = document.querySelector('#nine #invisible');
hideform.addEventListener('click' , function (e){
    if (tbody.style.display == "none"){
        tbody.style.display = "";
    } else{
        tbody.style.display = "none" ;
    }
})






