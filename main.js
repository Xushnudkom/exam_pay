document.getElementById("click_exit").addEventListener("click", function () {
    document.getElementById("travel_box").style.display = "block";
    document.getElementById("travel_box").style.display = "none";
    document.getElementById("data_pages").style.display = "block";
  });
  
  document.getElementById("button_one").addEventListener("click", function () {
    document.getElementById("travel_box").style.display = "none";
    document.getElementById("travel_box").style.display = "block";
  });
  
  
  
  
  const form = document.getElementById('travel_box');
  const tableBody = document.getElementById('tableBody');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    const where = document.getElementById('where').value;
    const where_to = document.getElementById('where_to').value;
    const day = document.getElementById('start_date').value;
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${where}</td>
      <td>${where_to}</td>
      <td>${day}</td>
    `;
    console.log(newRow);
    tableBody.appendChild(newRow);
  
    alert("So'rovingiz qabul qilindi, Safaringiz behatar bo'lsin")
    
    form.reset();
  });
  

