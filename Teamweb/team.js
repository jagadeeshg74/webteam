window.onload = function () {

    team = [];

    //{ name: "John", age: 31, city: "New York" };
    member1 = {
        name: "Sasee", 
        skill: "Power BI,web app",
        place: "chennai"
    };
    member2 = {
        name: "Jayakumar",
        skill: "Power BI,web app",
        place: "chennai"
    };
     
    team.push(member1);
    team.push(member2);
    displayGrid();

}




function displayGrid() {

    var innerHTML = '<div class="card-deck">';

    for (var i = 0; i < team.length; i++) {
        innerHTML += ' <div class="card bg-light">';
        innerHTML += '<img class="img-thumbnail.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover; " src="./images/sasee.jpg" alt="Card image">';        
        innerHTML += '<div class="card-body text-center">';
        innerHTML += 'Name :' + '<strong>' + team[i].name + '</strong><br>';
        innerHTML += '</div> </div>';
    }

    innerHTML += '</div>';


    document.getElementById("teamlist").innerHTML = innerHTML;



}
