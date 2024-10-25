  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['10/10/24', '11/10/24', '12/10/24', '13/10/24', '14/10/24', '15/10/24'],
      datasets: [{
        label: 'Minutes',
        data: [189, 132, 92, 126, 34, 111],
        backgroundColor: [
            '#ede9fe',
            '#fce7f3',
            '#ffe4e6',
            '#d1fae5',
            '#e0f2fe',
            '#F2F3AE'
          ],
        borderColor: [
            '#a78bfa',
            '#f472b6',
            '#fb7185',
            '#34d399',
            '#38bdf8',
            '#EDD382'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

var ctx = document.getElementById('myChart2').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Hit Me Hard & Soft - Billie Eilish', 'The Car - Arctic Monkeys', 'Room Under The Stairs - Zayn', 'Harrys House - Harry Styles', 'Guts - Olivia Rodrigo'],
    datasets: [{
      label: 'Sales',
      data: [72.7, 2.48, 82.3, 3.98, 1.7],
      backgroundColor: [
          '#ede9fe',
          '#fce7f3',
          '#ffe4e6',
          '#d1fae5',
          '#e0f2fe',
          '#F2F3AE'
        ],
      borderColor: [
          '#a78bfa',
          '#f472b6',
          '#fb7185',
          '#34d399',
          '#38bdf8',
          '#EDD382'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var ctx = document.getElementById('myChart3').getContext('2d');
new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Arctic Monkeys', 'The Neighbourhood', 'Radiohead', 'Lana Del Rey', 'ABBA', 'Chase Atlantic', 'The Strokes', 'Deftones','Beach Weather', 'Zayn'],
    datasets: [{
      label: 'Minutes',
      data: [425, 289, 248, 301, 173, 403, 152, 204, 198, 142],
      backgroundColor: [
          '#ede9fe',
          '#fce7f3',
          '#ffe4e6',
          '#d1fae5',
          '#e0f2fe',
          '#F2F3AE'
        ],
      borderColor: [
          '#a78bfa',
          '#f472b6',
          '#fb7185',
          '#34d399',
          '#38bdf8',
          '#EDD382'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});
var ctx = document.getElementById('myChart4').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['A Bar Song (Tipsy)- Shaboozey', 'Birds of a Feather- Billie Eilish', 'Espresso- Sabrina Carpenter', 'Die With a Smile- Bruno Mars & Lady Gaga', 'I Had Some Help- Post Malone'],
    datasets: [{
      label: 'million of streams',
      data: [30, 130, 140, 68, 76.4],
      backgroundColor: [
          '#ede9fe',
          '#fce7f3',
          '#ffe4e6',
          '#d1fae5',
          '#e0f2fe',
          '#F2F3AE'
        ],
      borderColor: [
          '#a78bfa',
          '#f472b6',
          '#fb7185',
          '#34d399',
          '#38bdf8',
          '#EDD382'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});