// from data.js
var tableData = data,
    button = d3.select("#filter-btn"),
    form = d3.select("#form");
    console.log(tableData);

// Get a reference to the table body
const tbody = d3.select("tbody");

// // Step 5: Use d3 to update each cell's text with
data.forEach(ufoSighting => {
  let row = tbody.append("tr");
  Object.values(ufoSighting).forEach(value => {
    // Append a cell to the row for each value
    // in the sighting object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Complete the event handler function for the form
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"), 
        inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    let filteredUFO = filteredData;

    console.log(filteredUFO);

    const tbody = d3.select("tbody");

    tbody.html("")

    filteredUFO.forEach(filteredUFO => {
        let row = tbody.append("tr");
        Object.values(filteredUFO).forEach(value => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


};

    // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
