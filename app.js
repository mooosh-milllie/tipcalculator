document.getElementById('form').addEventListener('submit', calcTips);

function calcTips(e) {
 
 const sCost = document.getElementById('servicecost').value;
 let numofservs = document.getElementById('numofserv').value;
 const qualityofserv = document.getElementById('qualityofserv').value;

 if (sCost === '' || qualityofserv == 0) {
  errorText('text-white bg-red-700 pl-2 errdiv rounded', 'complete text fields correctly');
 
 } else {
  if (numofservs <= 1) {
   numofservs = 1;
   document.getElementById('each').style.display = 'none';
  } else {
   document.getElementById('each').style.display = 'block';
  }
  let total = (sCost * qualityofserv) / numofservs;
 
  total = Math.round(total * 100) / 100
  
  document.querySelector('.lonetip').style.display = 'block';
  document.getElementById('tipeach').textContent = total
 }
 e.preventDefault()
}

function errorText(classname, message) {
 let topDiv = document.getElementById('topdiv');
 let lowerDiv = document.getElementById('lowerdiv');
 let errDiv = document.createElement('div');
 errDiv.classList = classname;
 errDiv.innerHTML = message;
 topDiv.insertBefore(errDiv, lowerDiv);
 setTimeout(() => {
  errDiv.remove();
 }, 3000);

}

document.querySelector('.lonetip').style.display = 'none';
document.getElementById('each').style.display = 'none';