const clickMe = () => {
    let cities, optext;
    cities = ["Adelaide", "Brisbane", "Canberra", "Darwin", "Hobart",
            "Melbourne", "Perth", "Sydney"];
    optext = "<ul>";
    for (let i = 0; i < cities.length; i++)
    {
        optext += "<li>" + cities[i] + "</li>";
    }
    optext += "</ul>";
    return document.getElementById("capital_cities").innerHTML = optext;
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted", formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
    $('#formSubmit').click(()=>{
        submitForm();
    })
    // getProjects();

});


// const getProjects = () => {
//     $.get('/api',(response) => {
//         if(response.statusCode == 200){
//             addCards(response.data);
//         }
//     })
// }