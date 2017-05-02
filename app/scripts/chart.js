(function(){

  var ctx = document.getElementById('popularity');
  var colors = {
    'PRI': 'rgba(255,24,32,1)',
    'PAN': 'rgba(6,51,142,1)',
    'PRD': 'rgba(255,203,1,1)',
    'PT': 'rgba(218,37,29,1)',
    'MORENA': 'rgba(97,2,0,1)'
   };
  $.ajax({
    url: 'http://10.40.60.191:3030/v1/api/weeks',
    dataType: 'json',
    type: 'GET',
    success: function (weeks) {
      var firstWeek = moment('20170323', 'YYYYMMDD');
      var labels =[];
      var data = {
        datasets: []
      };
      for (let i = 0; i < 9; i++) {
        labels.push(firstWeek.add(1,'w').format('DD/MM/YY'));
      }
      for(let i=0; i<weeks.length;i++){
        data.datasets.push(generateDataSet(weeks[i].data, weeks[i].candidate, colors[weeks[i].party] ));
      }
      data['labels'] = labels
      var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      });
    },
    error:function(err){
      console.log(err);
    }
  });

  function generateDataSet(data, candidateName, color){
    return {
      label: candidateName,
      fill: false,
      lineTension: 0.1,
      backgroundColor:color,
      borderColor: color,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: color,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: data,
      spanGaps: false,
    }
  }


})();
