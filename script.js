let formDiv = document.getElementById("formdiv");

let validateFood = () => {
  let food = document.getElementsByName("food");
  let food1 = document.getElementsByName("food1");
  let checkedCount = 0;

  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      checkedCount++;
    }
  }

  for (let j = 0; j < food1.length; j++) {
    if (food1[j].checked) {
      checkedCount++;
    }
  }

  if (checkedCount < 2) {
    alert("Please select at least two foods");
  }
};

let addValues = () => {
  let firstname = document.getElementById("first-name").value;
  let lastname = document.getElementById("last-name").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let gender = document.getElementsByName("gender").value;
  let food = document.getElementsByName("food").value;
  let food1 = document.getElementsByName("food1").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let table = document.getElementById("Table");
  let row = table.insertRow(table.rows.length);

  let data1 = row.insertCell(0);
  let data2 = row.insertCell(1);
  let data3 = row.insertCell(2);
  let data4 = row.insertCell(3);
  let data5 = row.insertCell(4);
  let data6 = row.insertCell(5);
  let data7 = row.insertCell(6);
  let data8 = row.insertCell(7);

  data1.innerHTML += `${firstname}`;
  data2.innerHTML += `${lastname}`;
  data3.innerHTML += `${address}`;
  data4.innerHTML += `${pincode}`;
  data5.innerHTML += `${gender}`;
  data6.innerHTML += `${(food, food1)}`;
  data7.innerHTML += `${state}`;
  data8.innerHTML += `${country}`;

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementsByName("gender").value = "";
  document.getElementsByName("food").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
};

formDiv.innerHTML = `<form id="form">
   <div class="form-group">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" name="firstname" placeholder="Enter first-name"required><br><br>
    </div>
        <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" name="lname" placeholder="Enter last-name"required><br><br>
    </div>
    <div class="form-group">
        <label for="address">Address:</label>
        <textarea name="address" id="address" cols="25" rows="1" placeholder="Enter address"></textarea><br><br>
    </div>
        <label for="pincode">Pincode:</label>
        <input type="text" name="pincode" id="pincode" placeholder="Enter pincode" required><br><br>

        <label>
            <input type="radio" name="gender" value="male">
            Male
        </label>

        <label>
            <input type="radio" name="gender" value="female">
            Female
        </label><br><br>
        <label>
            Choice of food:
        </label>

          <label>
            <input type="radio" name="food" value="Biriyani">
            Biriyani
        </label>

         <label>
            <input type="radio" name="food" value="chicken Rice">
            Chicken Rice
        </label>

         <label>
            <input type="radio" name="food" value="idly">
            Idly
        </label>

         <label>
            <input type="radio" name="food1" value="Chappathi">
            Chappathi
        </label>

         <label>
            <input type="radio" name="food1" value="Butter chicken">
            Butter chicken  
        </label><br><br>

         <label for="state">State:</label>
         <input type="text" name="state" id="state"><br><br>

         <label for="country">Country:</label>
         <input type="text" name="country" id="country"><br><br>

        <button class="btn btn-primary" type="submit" id="submit" onclick="validateFood();addValues()">submit</button>
    
    </form><br><br>`;
