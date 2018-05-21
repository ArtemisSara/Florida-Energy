google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Bars separated in 2 year incriments
        var data = google.visualization.arrayToDataTable([
         ['Year', '0 to 1', '2 to 3', '4 to 5', '6 to 7', '8 to 9', 'Decade Average'],
         ['60s',  
          35048.5,      
          37219.5,         
          39918,             
          44552,           
          51591,      
          51596],
          
         ['70s',  
          50501.5,      
          55319.5,       
          51218,             
          58230,         
          67388,      
          67393],
          
         ['80s', 
          86583,      
          98189.5,        
          109719,            
          111981,           
          173031.5,      
          115901],
          
         ['90s',  
          205970.5,      
          223903.5,       
          217887,             
          235835.5,           
          204799.5,      
          217680],
          
         ['00s',  
          176495,     
          268563.5,        
          181318.5,            
          188026.5,          
          204437,      
          293769],
        
          ['10s', 
           223237,
           224843,
           230527.5,
           000000,
           000000,
           226203],
      ]);

    var options = {
      title : 'Renewable Energy Production Florida',
      vAxis: {title: 'BTUs in Billions (Avg)'},
      hAxis: {title: 'Decade'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
