customerAdd.onshow=function(){
    txtCustomers_contents.style.height = "100px"
    
    let query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)
    let message = ""
    for (i = 0; i <= results.length -1; i ++)
    message = message + results [i][1] + "\n"
    txtCustomers.value = message
  
}

btnAddCustomer.onclick=function(){
    let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
    alert(query)
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)

    if (req.responseText == 500)  { 
        lblAddMessage.textContent = "You have successfully added Jesse Antiques!"
        query = "Select name From customer"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)
        results = JSON.parse(req.responseText)
        let message = ""
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtAllCustomers.value = message
              for (i = 0; i <= results.length - 1; i++){
            txtAllCustomers.addItem(results[i])
            }
     } else {
        lblAddMessage.textContent = "There was a problem with adding the Jesse Antiques to the database."
    } 
}

btnPage.onclick=function(){
  ChangeForm(customerUpdate)
}
