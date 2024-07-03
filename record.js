const employeeName = document.getElementById(`name`);
const employeeID = document.getElementById("employeeID");
const employeeDepartment = document.getElementById(`department`);
const employeeExp = document.getElementById(`exp`);
const employeeEmail = document.getElementById(`email`);
const employeeNum = document.getElementById(`mbl`);
const form = document.querySelector(`form`);
const tbody = document.getElementById("tbody");

// let arr=[]

let arr = localStorage.getItem("Store")
  ? JSON.parse(localStorage.getItem(`Store`))
  : [];

function getRole(Experience) {
  if (Experience > 5) {
    return `Senior`;
  } else if (Experience >= 2 && Experience <= 5) {
    return "Fresher";
  } else {
    return `Junior`;
  }
}

function showDetails() {
  tbody.innerHTML = "";

  arr?.forEach((value, index) => {
    let tr = document.createElement(`tr`);

    let td1 = document.createElement(`td`);
    td1.textContent = value.employeeName;
    tr.append(td1);

    let td2 = document.createElement(`td`);
    td2.textContent = value.employeeID;
    tr.append(td2);

    let td3 = document.createElement(`td`);
    td3.textContent = value.employeeDepartment;
    tr.append(td3);

    let td4 = document.createElement(`td`);
    td4.textContent = value.employeeExp;
    tr.append(td4);

    let td5 = document.createElement(`td`);
    td5.textContent = value.employeeEmail;
    tr.append(td5);

    let td6 = document.createElement(`td`);
    td6.textContent = value.employeeNum;
    tr.append(td6);

    let td7 = document.createElement("td");
    td7.textContent = getRole(value.employeeExp);
    tr.append(td7);

    let td8 = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.addEventListener(`click`, () => {
      removeDetails(tr);
      arr.splice(index, 1);
      localStorage.setItem("Store", JSON.stringify(arr));
      showDetails();
    });

    td8.append(btn);
    tr.append(td8);
    tbody.append(tr);
  });
}

function removeDetails(tr) {
  tr.remove();
}

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (
    employeeName.value === "" ||
    employeeID.value === "" ||
    employeeDepartment.value === "" ||
    employeeExp.value === "" ||
    employeeEmail.value === "" ||
    employeeNum.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }
  arr.push({
    employeeName: employeeName.value,
    employeeID: employeeID.value,
    employeeDepartment: employeeDepartment.value,
    employeeExp: employeeExp.value,
    employeeEmail: employeeEmail.value,
    employeeNum: employeeNum.value,
  });

  showDetails();
  localStorage.setItem("Store", JSON.stringify(arr));
  // form.reset();
});
