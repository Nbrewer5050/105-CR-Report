// create an object literal for the pet salon (name, address, hours)
var salon={
    salonName:`The Fashion Pet`,
    address:{
        street:`Av. university`,
        number:"215B"
    },
    hours:{
        open:"8AM",
        close:"5pm"
    },

    pets:[],
    price:{
        shower: "$45.00",
        haircut:"$20.00",
        nailTrimming: "$10.00",
        fullService: "$75.00"
    }
}
var c=1;

class Pet{
    constructor(name,age,type,breed,gender,service,ownerName,contactPhone,price,email){
        this.petName=petName;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.price=price;
        this.email=email;
        this.id=c;
        c++;    
    }
}

var scooby = new Pet("scooby",50,"dog","Dane","Male","full Service","shaggy","4564564567");
var scrappy = new Pet("scrappy",40,"dog","Dane","Male","full Service","shaggy","4564564567");
var krypto = new Pet("Krypto",100,"dog","retriever","Male","full Service","Superman","4564564567");
salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(krypto);
console.log(scooby);

var txtName=document.getElementById(`petName`);
var txtAge=document.getElementById(`petAge`);
var txtType=document.getElementById(`petType`);
var txtBreed=document.getElementById(`petBreed`);
var txtGender=document.getElementById(`petGender`);
var txtService=document.getElementById(`petService`);
var txtOwnerName=document.getElementById(`petOwnerName`);
var txtContactPhone=document.getElementById(`petContactPhone`);
var txtPrice=document.getElementById()
var txtEmail=document.getElementById(`email`);
// finish loading variables
function register(){
    var thePet=new Pet(txtName.value, txtAge.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtContact.value, txtEmail.value);
    console.log(thePet);
    salon.pet.push(thePet);
    display();
    clear(); 
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtContact.value="";
    txtEmail.value="";
}

function profitCalculation(){
    var total = 0;
    for(var i=0;i<salon.pets.length;i++){
        total=total+salon.pets[i].price;
    }
    console.log(total);
    document.getElementById("profits").innerHTML=`$ ${total}`;
}


function deletePet(petId){
    
    var tr=$("#"+Id);
    var indexDelete;

    for(var i=0;i<salon.pets.length;1++){
        var selected=salon.pets[i];
        if(selected.Id===petId){
            indexDelete=i;
        }
    }

    salon.pets.splice(indexDelete,1);


    tr.remove();

}

function deletePet(petId){
    console.log('delete'+petId);
}

function init(){
    //defualt
    console.log('script');
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(tweety);
    display();
    profitCalculation();
    $('#register-btn').on('click',register);
}

window.onload=init;