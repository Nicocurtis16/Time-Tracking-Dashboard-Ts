document.addEventListener("DOMContentLoaded", function () {
  function updateData(timeframe: string): void {
    fetch("data.json")
      .then((response) => response.json())
      .then(
        (
          data: {
            title: string;
            timeframes: Record<string, { current: number; previous: number }>;
          }[]
        ) => {
          data.forEach((activity, index) => {
            const current = activity.timeframes[timeframe].current;
            const previous = activity.timeframes[timeframe].previous;
            const box = document.querySelector(
              `#activity-${index}`
            ) as HTMLElement;
            (
              box.querySelector("#hour") as HTMLElement
            ).textContent = `${current}hrs`;
            (
              box.querySelector("#status") as HTMLElement
            ).textContent = `Last Week- ${previous}hrs`;
          });
        }
      );
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
