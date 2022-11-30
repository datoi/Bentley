let buttons = document.getElementsByClassName("footer-dropdown-btn")
for(let btns of buttons){
  btns.addEventListener("click", function(){
    let dropdown = this.nextElementSibling;
    if(dropdown.style.display !== "block"){
      dropdown.style.display ="block";
    } else{
      dropdown.style.display = "none";
    }
  })
}
const next = document.getElementById("btn-next")
const Prev = document.getElementById("btn-prev");
const progressBar = document.getElementById("progress-bar");
const steps = document.querySelectorAll(".step");
var width = 1;
var activeStep = 1;
let active =1;
next?.addEventListener("click", function(){
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
 
  if (activeStep === 1) {
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    displaySelectedCars();
    activeStep = 2;
    next.setAttribute('disabled', '');
    
    step2();
  } else if (activeStep === 2) {
    document.getElementById('step-3').style.display = 'block';
    
    activeStep = 3;
    agreement();
  } else {
    alert("You've ordered a dealer");
  }
})
const updateProgress = () => {
  // toggle active class on list items
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  progressBar.style.width = 
  ((active - 1) / (steps.length - 1)) * 100 + "%";
  
}
let selectedCars = [];
var input = document.getElementsByClassName("car-select")
for(let inpt of input) {
  inpt.addEventListener("click", function(){
    if(inpt.checked) {
      selectedCars.push(this.parentElement.innerText);
    } else {
      const i = selectedCars.indexOf(this.parentElement.innerText);
      selectedCars.splice(i, 1);
    }
    toggleDisable();
  })
}
function toggleDisable() {
  if (selectedCars.length > 0) {
    next.removeAttribute('disabled')
  } else {
    next.setAttribute('disabled', '');
  }
}

function agreement(){
  next.setAttribute('disabled', '');
  let agr = document.getElementById("agreement") 
  agr.addEventListener("click", function(){
  if(agr.checked){
    next.removeAttribute('disabled')
  } else{
    next.setAttribute('disabled', '');
  }
})
}
function displaySelectedCars() {
  const carList = document.getElementById('selectedCarList');

  for(const inpt of selectedCars) {
    const newCar = document.createElement('h5');
    newCar.innerText = inpt;
    carList.append(newCar);
  }  
}

function step2(){
let adress = document.getElementById("enter-address")
const dealerList = document.getElementById('selectedDealerList');
adress.addEventListener("keypress" , function(event){
  if(this.value.length > 0 && event.key === "Enter"){
    const dealerAmount = document.createElement("p")
    dealerAmount.setAttribute("class", "foundeddealer")
    dealerAmount.innerText = "You found a dealer in " + adress.value;
    dealerAmount.style.color= "#335b4c"
    dealerList.prepend(dealerAmount)
    const dealerTitle = document.createElement("h5")
    dealerTitle.innerText = "BENTLEY";
    dealerTitle.setAttribute("class", "dealertitle")
    const dealerPosition = document.createElement("p")
    dealerPosition.setAttribute("class", "dealerposition")
    dealerPosition.innerText = "near"
    dealerPosition.setAttribute("class", "near")
    const dealerbtn = document.createElement("button")
    const dealerbtn2 = document.createElement("button")
    dealerbtn.setAttribute("class", "moredetails btn")
    dealerbtn2.setAttribute("id", "selectDealer")
    dealerbtn2.setAttribute("class", "selectdealerClass btn")
    dealerbtn.innerText = "MORE DETAILS"
    dealerbtn2.innerText = "SELECT DEALER"
    dealerList.append(dealerTitle, dealerPosition,dealerbtn, dealerbtn2)
    let selectedDealer = document.getElementById("selectDealer")
    selectedDealer.addEventListener("click", function(){      
    next.removeAttribute('disabled')
    })
    selectedDealer.addEventListener("click", function(){
      dealerList.style.border = "1px solid #7f988f"
      dealerList.style.width = "50%"
      dealerList.style.padding = "8px 0"
      adress.style.display = "none"
      selectedDealer.style.display = "none"
      const prefDealer = document.createElement("p")
      prefDealer.setAttribute("class", "prefdealer")
      prefDealer.innerText = "Preffered Dealer"
      dealerList.prepend(prefDealer)
    })
    var pophead=document.getElementById("pophead");
var  more= document.getElementsByClassName('moredetails');
for(var mr of more) {
  mr.addEventListener('click', function() {
    if(pophead.style.display !== "block"){
      pophead.style.display = "block"
    }
  })
}
var exit=document.getElementById("exit");
exit.addEventListener("click", function(){
  if(pophead.style.display !== "none"){
    pophead.style.display = "none"
  }
})
  }  
})
}

