function createTable() {
    //Write your code here
   let rows = prompt("Input number of rows")
            let cols = prompt("Input number of columns")
            let table = document.getElementById("myTable")
            for(let r=0; r<rows; r++){
                let tr = document.createElement("tr")
                for(let c=0; c<cols; c++){
                    let td = document.createElement("td")
                    td.innerText = `Row-${r} Column-${c}`
                    tr.append(td)
                }
                table.append(tr)
            }
}
