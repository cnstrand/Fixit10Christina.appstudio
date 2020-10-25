// DOWNLOAD TO GITHUB REPOSITORY 
let req = ""
let query = ""
let results = ""
let pw = "goJays123"  // put your database password here

// get the data to populate the dropdown with names from database
customerSelect.onshow=function(){
  let query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cns02770&pass=" + pw + "&database=cns02770&query=" + query)
 
 if (req.status ==200){
    results = JSON.parse(req.responseText)
    if (results.length == 0)
    NSB.MsgBox("There are none of those pets.")
}else{
  let message = `Those customers are named: \n`
  for (i = 0; i <= results.length -1; i ++)
    message = message + results [i][1] + "\n"
  txtTypeNames.value = message
  }
}
 
 