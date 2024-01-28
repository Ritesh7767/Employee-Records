// fill in javascript code here

let data = []
document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault()
    let name = document.querySelector("#name").value
    let empId = document.querySelector("#employeeID").value
    let department = document.querySelector("#department").value
    let exp = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let ContNumber = document.querySelector("#mbl").value
    console.log(ContNumber)

    let obj = new FeedData(name, empId, department, exp, email, ContNumber)
    data.push(obj)

    UpdateTable()

    console.log(data)

})

function FeedData(name, empId, department, exp, email, ContNumber){

    this.name = name
    this.empId = empId
    this.department = department
    this.exp = exp
    this.email = email
    this.ContNumber = ContNumber
}

function UpdateTable(){

    console.log("updateTable")

    let container = document.querySelector("tbody")
    container.innerHTML = ""

    data.forEach(function(ele, i){

        let container_row = document.createElement("tr")
        let tname = document.createElement("td")
        let tempId = document.createElement("td")
        let tdepartment = document.createElement("td")
        let texp = document.createElement("td")
        let temail = document.createElement("td")
        let tMobileNumber = document.createElement("td")
        let role = document.createElement("td")
        let deldata = document.createElement("td")
        let delbtn = document.createElement("button")
        delbtn.addEventListener("click", function(){
            deleteData(ele.empId ,i)
        })

        delbtn.innerText = "Delete"
        tname.innerText = ele.name
        tempId.innerText = ele.empId
        tdepartment.innerText = ele.department
        texp.innerText = ele.exp
        temail.innerText = ele.email
        tMobileNumber.innerText = ele.ContNumber


        ele.exp >= 5 ? role.innerText = "Senior" : (ele.exp > 2 && ele.exp < 5) ? role.innerText = "Junior" : role.innerText = "fresher"

        deldata.append(delbtn)
        container_row.append(tname, tempId, tdepartment, texp, temail, tMobileNumber, role, deldata)

        container.append(container_row)
    })
}

function deleteData(id, index){

    data = data.filter(function(ele){
        return ele.empId != id 
    })

    console.log(id)
    console.log(data)
    console.log("In deleteData function")

    UpdateTable()
}

console.log("Hello ritesh")
