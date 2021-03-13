function PositiveData(subject) {
  return parseInt(subject.Outcome) > 0;
}

var filteredDiabetesPos = DiabetesClean.filter(PositiveData);

// console.log(filteredDiabetesPos);

var AgePos = filteredDiabetesPos.map(subject => subject.Age);

// console.log(AgePos);

var BMIPos = filteredDiabetesPos.map(subject => subject.BMI);

// console.log(BMIPos);

function NegativeData(subject) {
  return parseInt(subject.Outcome) === 0;
}

var filteredDiabetesNeg = DiabetesClean.filter(NegativeData);

// console.log(filteredDiabetesNeg);

var AgeNeg = filteredDiabetesNeg.map(subject => subject.Age);

// console.log(AgeNeg);

var BMINeg = filteredDiabetesNeg.map(subject => subject.BMI);

// console.log(BMINeg);

// var AgeUser = UserData.map(subject => subject.Age);

// // console.log(AgeUser);

// var BMIUser = UserData.map(subject => subject.BMI);

// // console.log(BMIUser);

var trace1 = {
  x: AgePos,
  y: BMIPos,
  mode: 'markers',
  type: "scatter",
  name: 'Diabetes'
};

var trace2 = {
  x: AgeNeg,
  y: BMINeg,
  mode: 'markers',
  type: "scatter",
  name: 'No Diabetes'
};

var trace3 = {
  x: [32],
  y: [24],
  mode: 'markers',
  type: "scatter",
  name: 'User Data',
  marker: { size: 12 }
}

var data = [trace1, trace2, trace3];

var layout = {
  title: "Age vs. BMI of People with and without Diabetes",
  xaxis: { title: "Age" },
  yaxis: { title: "BMI"}
};

Plotly.newPlot("scatter-plot", data, layout);
