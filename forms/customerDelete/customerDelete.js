customerDelete.onshow=function(){
    txtCustomers_contents.style.height = "100px"
    
    let query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)
    
     if (req.status == 200) { //transit worked.
        allCustData = JSON.parse(req.responseText)
        console.log(allCustData)
    } else {
        // transit error
        lblMessages5 = `Error: ${req.status}`
    }  
    let message = ""
    for (i = 0; i <= allCustData.length -1; i ++)
    message = message + allCustData [i][1] + "\n"
    txtCust.value = message
  }

btnDelete.onclick=function(){
    let custNameDel = inptDel.value
    
    let found = true
    for (i = 0; i <= allCustData.length - 1; i++) {
        if (custNameDel == allCustData[i][1])
            found = true
            break // if found the item in the database jump out of loop
    }
    if (found == false) 
       lblResults.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + custNameDel + '"'
      alert(query)
      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)

      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                lblResults.textContent = `You have successfully deleted the customer named ${custNameDel}`
            else
                lblResults.textContent = `There was a problem deleting ${custNameDel} from the database.`
      else
        // transit error
        lblResults.textContent = `Error: ${req.status}`
      } // found is true
}

   
btnNxtPg.onclick=function(){
  ChangeForm(customerAdd)
}
