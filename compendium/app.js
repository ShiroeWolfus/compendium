$(document).ready(() => {
    const apiBaseUrl = "http://localhost:3000/"
    
    function getAllData() {
        $.ajax({
            type:"GET",
            url: apiBaseUrl ,
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success: (result)=> {
                console.log(result);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + "error: " + error)
                $("button").append("<br>" + result.array)
            }
        })
    }
    
    function getDataByClasse() {
        const categorie = $("#categorie-get-categorie").val()
        $.ajax({
            type:"GET",
            url: apiBaseUrl + categorie,
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success:(result)=> {
                console.log(result);
                let html = '';
                result.forEach(obj => {
                    html += '<p>Id: ' + obj.id + ' Jeu: ' + obj.name + ' Statut du jeu : ' + obj.value + '</p>';
                })
                $("#results-all-game").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + "error: " + error)
            }
        })
    }
    
    function createData() {
        const categorie =  $("#categorie-create-game").val()
        const data = { name: $("#name-create-game").val() }
        let value = { value: $("#value-create-game").val() }
        $.ajax({
            type:"POST",
            url: apiBaseUrl + categorie,
            data : JSON.stringify(data, value),
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success: (result)=> {
                getDataByClasse(result);
                console.log(result)
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + "error: " + error)
            }
        })
    }
    
    function getDataById() {
        const categorie =  $("#categorie-get-id-game").val() 
        const id = $("#id-get-id-game").val()
        $.ajax({
            type:"GET",
            url: apiBaseUrl + categorie + "/" + id,
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success:(result) => {
                let html = '';
                html += '<p>Id: ' + result.id + '  Jeu: ' + result.name + ' Statut du jeu : ' + result.value + '</p>';
                $("#results-get-one").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error);
            },
        })
    }


    function getDataByName() {
        const categorie = $("#categorie-get-name-game").val()
        const data =  $("#name-get-name-game").val()
        $.ajax({
            type:"GET",
            url: apiBaseUrl + categorie + "/name/" + data,
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success:(result)=> {
                let html = '';
                html += '<p>Id: ' + result.id + '  Job: ' + result.name + ' Statut du jeu : ' + result.value + '</p>';
                $("#results-get-name").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        })
    }

    function updateDataById() {
        const categorie = $("#categorie-update-game").val()
        const id = $("#id-update-game").val()
        const data = { value: $("#value-update-game").val()}
        $.ajax({
            type:"PUT",
            url: apiBaseUrl + categorie + "/" + id,
            data : JSON.stringify(data),
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success:(result)=> {
                getDataByClasse()
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        })
    }

    function deleteDataById() {
        const categorie = $("#categorie-delete-game").val()
        const id = $("#id-delete-game").val()
        $.ajax({
            type:"DELETE",
            url: apiBaseUrl + categorie + "/" + id,
        
            contentType :'application/json; charset=utf-8',
            dataType: 'json',
            success:(result) => {
                getDataByClasse()
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + "error: " + error)
            }
        })
    }
//Rajouter un event listener sur le buton
$("#get-all-game").click(getAllData);
$("#create-button").click(createData);
$("#get-categorie-button").click(getDataByClasse);
$("#get-id-button").click(getDataById);
$("#get-by-classes").click(getDataById);
$("#get-name-button").click(getDataByName);
$("#update-button").click(updateDataById);
$("#delete-button").click(deleteDataById);
})