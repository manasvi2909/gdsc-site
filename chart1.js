import Chart from 'chart.js/auto';
var ctx = document.getElementById("myChart").getContext("2d");
var myChart =  new Chart(ctx ,{
    type : "bar",
    data:{
        labels: ["Python","JavaScript","PHP","C++","C#","Java"],
        datasets: [
            {
                data: ["13","15","10","9","8","6"]
            }
        ]
    }
})