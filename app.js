document.addEventListener("DOMContentLoaded", function () {
    function updateData(timeframe) {
        fetch("data.json")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.forEach(function (activity, index) {
                var current = activity.timeframes[timeframe].current;
                var previous = activity.timeframes[timeframe].previous;
                var box = document.querySelector("#activity-".concat(index));
                box.querySelector("#hour").textContent = "".concat(current, "hrs");
                box.querySelector("#status").textContent = "Last Week- ".concat(previous, "hrs");
            });
        });
    }
    document
        .getElementById("daily-button")
        .addEventListener("click", function () {
        updateData("daily");
    });
    document
        .getElementById("weekly-button")
        .addEventListener("click", function () {
        updateData("weekly");
    });
    document
        .getElementById("monthly-button")
        .addEventListener("click", function () {
        updateData("monthly");
    });
    // Load initial data (default: "Weekly")
    updateData("weekly");
});
