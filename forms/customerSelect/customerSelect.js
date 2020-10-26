
let req = ""
let query = ""
let results = ""
let pw = "goJays123"  // put your database password here

// get the data to populate the dropdown with names from database
customerSelect.onshow=function(){
    txtResults_contents.style.height = "100px"
    }
    
btnSeeCustomers.onclick = function(){
    let query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)

    if (req.status ==200){
        results = JSON.parse(req.responseText)
        console.log(results)

    if (results.length == 0){
        lblMessage.textContent = "There are no customers in the database."
}else{
  let message = ""
  for (i = 0; i <= results.length -1; i ++)
    message = message + results [i][1] + "\n"
  txtResults.value = message
  }
}
}

// input state
btnState.onclick = function(){
    let state = inptState.value
    query = "SELECT * FROM customer WHERE state =" + '"' + state + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)

if (req.status ==200){
  resultstate = JSON.parse(req.responseText)
  console.log(resultstate)
  
  if (resultstate.length == 0){
      lblMessage.textContent = "There are no customers in the database."
    }else{
       lblMessage.textContent= `The customer information is ${resultstate[0]}`
    
    let message = ""
    for (i = 0; i <= resultstate.length -1; i ++)
      message = message + resultstate [i][1] + "\n"
    txtStateResults.value = message
    }
  }else{
      lblMessage.textContent = "Error code: " + req.status
  }
}
 btnNextPage.onclick=function(){
  ChangeForm(customerDelete)
}
 