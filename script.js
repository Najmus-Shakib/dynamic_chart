// $(document).ready(function () {
//   var ctx = document.getElementById("myChart").getContext("2d");

//   const endEmployee = 40;
//   const numberOfEmployee = 30;
//   const timeInterval = 10;

//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   // previous levels code start
//   let levelCount = 0;
//   let previousLevelsArray = [];
//   let totalNumberOfLevels = 0;
//   if (Number.isInteger(60 / timeInterval)) {
//     totalNumberOfLevels = Math.ceil(60 / timeInterval) + 1;
//   }
//   if (!Number.isInteger(60 / timeInterval)) {
//     totalNumberOfLevels = Math.ceil(60 / timeInterval) + 1;
//   }

//   for (let i = 0; i < totalNumberOfLevels; i++) {
//     if (levelCount === 0) {
//       previousLevelsArray.push(hours + ":" + minutes + ":" + levelCount);
//       levelCount = -1;
//     } else {
//       if (levelCount === -1) {
//         levelCount = 0;
//       }

//       levelCount = levelCount + timeInterval;

//       previousLevelsArray.push(hours + ":" + minutes + ":" + levelCount);
//     }
//   }
//   if (levelCount > 60) {
//     previousLevelsArray.pop();
//     previousLevelsArray.push(hours + ":" + minutes + ":" + "60");
//   }
//   // previous levels code end
//   var data = {
//     labels: previousLevelsArray,
//     datasets: [
//       {
//         label: "My First dataset",
//         fillColor: "rgba(220,220,220,0.2)",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(220,220,220,1)",
//         data: [65, 59, 80, 81, 56, 55, 40, 56, 76, 88, 98, 18],
//       },
//       {
//         label: "My Second dataset",
//         fillColor: "rgba(151,187,205,0.2)",
//         strokeColor: "rgba(151,187,205,1)",
//         pointColor: "rgba(151,187,205,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(151,187,205,1)",
//         data: [28, 48, 40, 19, 86, 27, 90, 98, 76, 86, 46, 65],
//       },
//     ],
//   };

//   var options = {
//     animation: false,
//     //Boolean - If we want to override with a hard coded scale
//     scaleOverride: true,
//     //** Required if scaleOverride is true **
//     //Number - The number of steps in a hard coded scale
//     scaleSteps: 10,
//     //Number - The value jump in the hard coded scale
//     scaleStepWidth: 10,
//     //Number - The scale starting value
//     scaleStartValue: 0,
//   };

//   var myLineChart = new Chart(ctx).Line(data, options);
//   setInterval(function () {
//     setData(data.datasets[0].data);
//     setData(data.datasets[1].data);
//     setLabels(data.labels);

//     var myLineChart = new Chart(ctx).Line(data, options);
//   }, 2000);

//   function setLabels(labels) {
//     var nextNewArrayIndex = newArray.indexOf(labels[labels.length - 1]) + 1;

//     var nextNewArrayName =
//       newArray[nextNewArrayIndex] != undefined
//         ? newArray[nextNewArrayIndex]
//         : newArray[0];
//     labels.push(nextNewArrayName);
//     labels.shift();
//   }

//   function setData(data) {
//     data.push(Math.floor(Math.random() * 100) + 1);
//     data.shift();
//   }

//   var newArray = previousLevelsArray;
// });

$(document).ready(function () {
  var ctx = document.getElementById("myChart").getContext("2d");

  function LebelsArray() {
    const endEmployee = 40;
    const numberOfEmployee = 30;
    const timeInterval = 1;

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // previous levels code start
    let levelCount = 0;
    let previousLevelsArray = [];
    let totalNumberOfLevels = 0;
    if (Number.isInteger(60 / timeInterval)) {
      totalNumberOfLevels = Math.ceil(60 / timeInterval) + 1;
    }
    if (!Number.isInteger(60 / timeInterval)) {
      totalNumberOfLevels = Math.ceil(60 / timeInterval) + 1;
    }

    for (let i = 0; i < totalNumberOfLevels; i++) {
      if (levelCount === 0) {
        previousLevelsArray.push(hours + ":" + minutes + ":" + levelCount);
        levelCount = -1;
      } else {
        if (levelCount === -1) {
          levelCount = 0;
        }

        levelCount = levelCount + timeInterval;

        previousLevelsArray.push(hours + ":" + minutes + ":" + levelCount);
      }
    }
    if (levelCount > 60) {
      previousLevelsArray.pop();
      previousLevelsArray.push(hours + ":" + minutes + ":" + "60");
    }

    return previousLevelsArray;
  }
  // previous levels code end
  // data levels code start
  function PreviousDataFunction() {
    let previousLevelsArray = LebelsArray();

    let previousData = previousLevelsArray.map(function (el, i) {
      return Math.floor(Math.random() * 30) + 1;
    });

    return previousData;
  }
  function UpdateDataFunction() {
    let previousLevelsArray = LebelsArray();
    let updateData = [];
    for (let i = previousLevelsArray.length; i > 0; i--) {
      updateData.push(Math.floor(Math.random() * 30) + 1);
    }

    return updateData;
  }

  // data levels code end
  // previous levels code end

  var data = {
    labels: LebelsArray(),
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: PreviousDataFunction(),
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: UpdateDataFunction(),
      },
    ],
  };

  var options = {
    animation: false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps: 8,
    //Number - The value jump in the hard coded scale
    scaleStepWidth: 5,
    //Number - The scale starting value
    scaleStartValue: 0,
  };

  var myLineChart = new Chart(ctx).Line(data, options);
  setInterval(function () {
    setData(data.datasets[0].data);
    setData(data.datasets[1].data);
    setLabels(data.labels);

    var myLineChart = new Chart(ctx).Line(data, options);
  }, 1000);

  function setLabels(labels) {
    let newArray = LebelsArray();
    var nextNewArrayIndex = newArray.indexOf(labels[labels.length - 1]) + 1;

    var nextNewArrayName =
      newArray[nextNewArrayIndex] != undefined
        ? newArray[nextNewArrayIndex]
        : newArray[0];
    labels.push(nextNewArrayName);
    labels.shift();
  }

  function setData(data) {
    // data.push(Math.floor(Math.random() * 20) + 1);
    // data.shift();
    const max = 30; // set the maximum value to 30
    const randomNumber = Math.floor(Math.random() * max) + 1; // generate a random number between 1 and 30
    data.push(randomNumber);
    data.shift();
  }
});
