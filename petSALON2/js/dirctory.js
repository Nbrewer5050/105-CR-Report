console.log("directory.js");
function display(){
    var pets =salon.pets;
    var text="";
    var petSection=document.getElementById("petSection");

    for(var i=0;1<pets.length;i++){
        
        console.log(pets[i]);

        text+=`
        <div id="${pets[i].id}" class="pet">
                <h2>name: ${pets[i].name}</h2>
                ${icon}
                <p> age: ${pets[i].age}</p>
                <p> type: ${pets[i].type}</p>
                <p> breed: ${pets[i].breed}</p>
                <p> gender: ${pets[i].gender}</p>
                <p> service: ${pets[i].service}</p>
                <p> Price: ${pets[i].price}</P>
                <p> ownerName: ${pets[i].ownerName}</p>
                <p> contactPhone: ${pets[i].contactPhone}</p>
                <p> email: ${pets[i].email}</p>
                

                <button class="btn btn-danger" onclick="deletePet(${pets[i].id});"> Delete </button>
        </div>
        `;
                console.log(text);
    }

    petSection.innerHTML=text;

}

display();

// CR Report 01 OCT 2020//


//a) Display, Delete and Search function.

//b) Add click and keypress events.

//c) Add a map in your project.

//d) Add an Image Carousel 