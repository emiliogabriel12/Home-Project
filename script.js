// Toggle the details of each service
function toggleDetails(serviceId) {
    var details = document.getElementById(serviceId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
