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

// Table Chart JS
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Billions BTUs');
        data.addColumn('boolean', 'Verified');
        data.addRows([
          ['2015',803865, true],
          ['2014',771379, true],
          ['2013',757189, true],
          ['2012',752941, true],
          ['2011',768009, true],
          ['2010',788887, true],
          ['2009',766848, true],
          ['2008',771702, true],
          ['2007',788461, true],
          ['2006',778685, true],
          ['2005',767622, true],
          ['2004',745810, true],
          ['2003',741696, true],
          ['2002',718136, true],
          ['2001',684966, true],
          ['2000',668216, true],
          ['1999',638966, true],
          ['1998',639254, true],
          ['1997',597240, true],
          ['1996',586291, true],
          ['1995',571483, true],
          ['1994',544365, true],
          ['1993',521176, true],
          ['1992',501598, true],
          ['1991',499299, true],
          ['1990',489741, true],
          ['1989',472473, true],
          ['1988',444382, true],
          ['1987',417862, true],
          ['1986',398095, true],
          ['1985',379307, true],
          ['1984',353246, true],
          ['1983',329216, true],
          ['1982',315744, true],
          ['1981',317921, true],
          ['1980',309694, true],
          ['1979',295551, true],
          ['1978',289031, true],
          ['1977',270767, true],
          ['1976',252408, true],
          ['1975',242096, true],
          ['1974',235482, true],
          ['1973',237104, true],
          ['1972',209665, true],
          ['1971',188564, true],
          ['1970',171346, true],
          ['1969',153032, true],
          ['1968',135509, true],
          ['1967',119314, true],
          ['1966',108610, true],
          ['1965',95878, true],
          ['1964',87016, true],
          ['1963',78258, true],
          ['1962',71216, true],
          ['1961',62705, true],
          ['1960',57344, true],
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        
        
        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }


Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1 class="page-title">{{ text }}</h1><div class="topnav"><a class="active" href="index.html">Home</a><a href="facilities.html">Facilities</a><a href="outreach.html">Outreach</a></div></header>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

