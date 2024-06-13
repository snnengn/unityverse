
document.addEventListener("DOMContentLoaded", function () {
const remove = document.getElementById("removeFlightButton");
const filterInput = document.getElementById("filter");
const filterButton = document.getElementById("filterButton");
const form = document.getElementById("flightForm");
const flightList = document.getElementById("flights")
let flights = [
    { flightId: 1, from: 'IST', to: 'DPS', departure: '08:00', arrival: '20:00' },
    { flightId: 2, from: 'AYT', to: 'IST', departure: '09:00', arrival: '11:30' },
    { flightId: 3, from: 'SAW', to: 'DXB', departure: '09:10', arrival: '12:10' },
    { flightId: 4, from: 'SAW', to: 'DLM', departure: '09:20', arrival: '11:20' },
    { flightId: 5, from: 'IST', to: 'KSY', departure: '09:40', arrival: '11:40' },
];

let editFlightIndex = -1;
let selectedFlightIndex = 1;

function displayFlights (filter = "") {
    flightList.innerHTML = "";
flights.forEach((flight, index) => {
    if (filter && !flight.from.toLowerCase().includes(filter.toLowerCase()) && !flight.to.toLowerCase().includes(filter.toLowerCase())) {
        return;
      }
    const flightElement = document.createElement("li");
    flightElement.style.cursor = "pointer";
    flightElement.innerHTML = `Flight ${flight.flightId}: ${flight.from} to ${flight.to}, Departure: ${flight.departure}, ${flight.arrival}`;
    document.getElementById("flights").appendChild(flightElement);

    flightElement.addEventListener("click", () => {
        selectedFlightIndex = index;
        document.querySelectorAll("#flights li").forEach(li => li.classList.remove("selected"));
        flightElement.classList.add("selected");
  
        document.getElementById("flightId").value = flight.flightId;
        document.getElementById("from").value = flight.from;
        document.getElementById("to").value = flight.to;
        document.getElementById("departure").value = flight.departure;
        document.getElementById("arrival").value = flight.arrival;
        editFlightIndex = index;
      });

  });
}
    displayFlights();


form.addEventListener("submit", function (event) {
        event.preventDefault();
        const addFlightId = parseInt(document.getElementById("flightId").value);
        const addFrom = document.getElementById("from").value.trim();
        const addTo = document.getElementById("to").value.trim();
        const addDeparture = document.getElementById("departure").value;
        const addArrival = document.getElementById("arrival").value;

        const controlFlightIndex = flights.findIndex(flight => flight.flightId === addFlightId);

        if (controlFlightIndex !== -1 && controlFlightIndex !== editFlightIndex) {
          alert("This ID already exists.");
          return;
        }

        const addFlightDetails = { flightId: addFlightId, from: addFrom, to: addTo, departure: addDeparture, arrival: addArrival };
        if (editFlightIndex === -1) {
            flights.push(addFlightDetails);
            console.log("Flight added.")
            setTimeout(() => {
                alert("Flight added.");
              }, 1500);
        } else {
            flights[editFlightIndex] = addFlightDetails;
            editFlightIndex = -1;
            console.log("Flight updated.")
            setTimeout(() => {
                alert("Flight updated.");
              }, 1500);
        }
            
        form.reset();
        displayFlights();
    });


remove.addEventListener("click", () => {
    if (selectedFlightIndex !== -1) {
      flights.splice(selectedFlightIndex, 1);
      selectedFlightIndex = -1;

      displayFlights();
      flightForm.reset();
      console.log("Flight removed.")
      setTimeout(() => {
        alert("Flight removed.");
      }, 1500);

    } else {
      alert("Please select a flight to remove.");
    }
  });

  filterButton.addEventListener("click", () => {
    const filterValue = filterInput.value;
    setTimeout(() => {
        displayFlights(filterValue);
        console.log("Flights filtered")
      }, 2000);

  });
})


