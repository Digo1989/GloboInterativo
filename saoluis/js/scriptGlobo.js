 var width = 960,
   height = 800,
  sens = 0.65, espionar=0,
  focused;
  


  //Setting projection

  var projection = d3.geo.orthographic()
  .scale(220)
  .rotate([10, 10])
  .translate([width / 2, height / 2])
  .clipAngle(90);

  var path = d3.geo.path()
  .projection(projection);
  

var λ = d3.scale.linear()
    .domain([0, width])
    .range([-180, 180]);

var φ = d3.scale.linear()
    .domain([0, height])
    .range([90, -90]);
	
	



  //SVG container

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);
  


  //Adding water

  svg.append("path")
  .datum({type: "Sphere"})
  .attr("class", "water")
  .attr("d", path);

  var countryTooltip = d3.select("body").append("div").attr("class", "countryTooltip"),
  countryList = d3.select("body").append("select").attr("name", "countries");
  var canvas = d3.select("body").append("canvas");
   
  canvas.on("mousedown.drag", onMapClick);

 

  queue()
  .defer(d3.json, "js/world-110m.json")
  .defer(d3.tsv, "js/world-110m-country-names.tsv")
  .await(ready);

  
  
    
  //Main function
  


var scrollSpeed = 2; var current = 0;
   function bgscroll(){
current += 1;
projection.rotate([λ(current), 0]);
 
   svg.selectAll("path").attr("d", path);


}

function onMapClick() {
 //timer.stop();
  //rotateMap(projection.invert(d3.mouse(this)));
 // alert(10);
   
  
}

  var timer;



  
  function spin() {
  timer = d3.timer(function() {
    var dt = Date.now() -time;
    
    proj.rotate([rotate[0] + velocity[0] * dt, rotate[1] + velocity[1] * dt]);
    
    refresh();
  });
}








    
   


////////////////////////////////////////////////////////////////////////
	
/////////////////////////////////////////////////////////////////////////////


 var myData = [-1,-2,-3,4,8,10,12,16,20,24,28,31,32,
 36,40,44,48,50,51,52,56,60,64,68,70,72,74,76,84,86,90,92,96,100,
104,108,112,116,120,124,132,136,140,144,148,152,156,158,162,166,170,174,175,178,180,184,188,191,192,196,203,204,208,212,214,218,222,226,231,232,233,234,238,239,242,246,248,250,254,258,260,262,266,268,270,275,276,288,292,296,300,304,308,312,316,320,324,328,332,334,336,340,344,348,352,356,360,364,368,372,376,380,384,388,392,398,400,404,408,410,414,417,418,422,426,428,430,434,438,440,442,446,450,454,458,462,466,470,474,478,480,484,492,496,498,499,500,504,508,512,516,520,524,528,531,533,534,535,540,548,554,558,562,566,570,574,578,580,581,583,584,585,586,591,598,600,604,608,612,616,620,624,626,630,634,638,642,643,646,652,654,659,660,662,663,666,670,674,678,682,686,688,690,694,702,703,704,705,706,710,716,724,728,729,732,740,744,748,752,756,760,762,764,768,772,776,780,784,788,792,795,796,798,800,804,807,818,826,831,832,833,834,840,850,854,858,860,862,876,882,887,894]


//170     Colombia    MISSAO:Guayaquil


 /*12 ALGERIA   OK
   32 ARGENTINA OK
   68 BOLIVIA   OK 
   76 BRASIL    OK
   124 CANADA   OK 
   132 Cabo Verde -----
   152 Chile    OK 
   156 China    OK
   170 Colombia OK
   250 França   OK
   254 Guiana Francesa OK
   276 Alemanha OK 
   348 Hungria OK
   450 Madagascar OK
   508 Moçambique OK
   591 Panama     OK
   600 Paraguai   OK
   604 Peru       OK
// 608 Filipinas  OK BROWN
   616 Polonia    OK NAVY
   620 Portugal   OK OLIVE
   724 Espanha    OK
756  SUICA OK
788  TUNISIA OK
826  REINO UNIDO OK
840  ESTADOS UNIDOS  OK
858  URUGUAI OK
*/
 
//d3.scale.ordinal()   ou d3.scale.linear() 

  var color = d3.scale.ordinal() 
	.domain(myData)
	.range(['green','green','green','green','green','green','LightSeaGreen','green','green','green','green', 'green','Chocolate',
	'green','green','green','green','green','green','green','green','green','green','DarkRed','green','green','green','Gold','green','green','green','green','green','green',
	'green','green','green','green','green','Salmon','black','green','green','green','green','Tan','MediumTurquoise','green','green','green','Olive','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','RebeccaPurple','DarkSlateGrey','green','green','green','green','green','green','green','Cyan','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','yellow','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','DarkMagenta','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','Tomato','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','OrangeRed','green','DimGrey','DeepSkyBlue','Brown','green','Navy','OliveDrab','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','red','green','green','green','green','green','green','green','Maroon','green'
,'green','green','green','green','green','green','green','LightSlateGrey','green','green','green'
,'green','green','green','green','green','teal','green','green','green','green','orange'
,'green','green','Coral','green','green','green','green','green','green']);
	//var color_scale = d3.scale.linear().domain([0, mean_area, max_area]).range(['blue', 'beige', 'red']);

  function ready(error, world, countryData) {

    var countryById = {},
    countries = topojson.feature(world, world.objects.countries).features;

    timeteste =setInterval(bgscroll, scrollSpeed);
  //console.log(timeteste);

  
    //Adding countries to select
    countryData.forEach(function(d) {
      countryById[d.id] = d.name;
	 
	 // context.fillStyle=  d.color;
	 // console.log( countryById[d.id]);
      option = countryList.append("option");
      option.text(d.name);
      option.property("value", d.id);
	  
	  if(d.id==76){
	  // teste="red";
	  // alert(teste);
	  // .style("fill",  teste )
	  }
	  else{
	 // teste="blue";
	 // alert(teste);
	  //.style("fill",  teste )
	  }
	  
    });

    //Drawing countries on the globe
	for (var i = 0, j = countries.length; i < j; i++) {
  //console.log(countries[i].id);
 
  
  
//  teste = testey(countries.id,76);
  
}
	// console.log(countries);
	 
	  
	  
        svg.selectAll(".country") //svg.selectAll("path.land")
                .data(countries)
                .enter().insert("path", ".graticule")
                //.attr("class", "country")
				.attr("class", "land")
                .attr("d", path)
				
				
				 .style("fill", function(d) { console.log(d.id); return color(d.id); })
			
				// alert(d.id)
                //.style("fill", function(d,i) { return color(i); });
				//.attr('fill',function(d,i) { return color(i); })
				
				

   


    //Drag event

     .call(d3.behavior.drag()
      .origin(function() { var r = projection.rotate(); return {x: r[0] / sens, y: -r[1] / sens}; })
      .on("drag", function() {
	  
	  ////////////TESTE AREAA/////////////////
	//   svg.selectAll(".country").remove();
	//   var world = svg.selectAll("path.land")
  //  .data(countries)
  //  .enter().append("path")
  //  .attr("class", "land")
   // .attr("d", path)
	////////////TESTE AREAA/////////////////
	
        clearInterval(timeteste);
        console.log("DRAG");
        var rotate = projection.rotate();
        projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
        svg.selectAll("path.land").attr("d", path);
        svg.selectAll(".focused").classed("focused", focused = false);
       


		
      }))

    //Mouse events

   .on("mouseover", function(d) {
/*276     Alemanha    MISSAO:Paderborn
12      Algeria
32      Argentina   MISSAO: Corrientes
68      Bolivia     MISSAO:Santa Cruz de la Sierra, Sucre
76      BRASIL      MISSAO: QUASE TODOS OS ESTADOS
124     Canada      MISSAO:Toronto
132     Cabo Verde  Missao:Cabo verde
152     Chile       MISSAO: Santiago
156     China
170     Colombia    MISSAO:Guayaquil

724     Espanha     Missao: Granada
840     Estados Unidos MISSAO: Boston
608     Filipinas   MISSAO:Manilla
250     França      MISSAO:Aix-en-Provence, Avignon,Evry,Paris,Toulon 
254     Guiana Francesa  MISSAO: Guiana Francesa
348     Hungria     MISSAO:Budapeste
        Inglaterra  MISSAO: Londres
376     Israel      MISSAO: Haifa, Nazaré
380     Italia      MISSAO: Acqui Terme, Civita Castellana, Roma
591     Panama -    MISSAO: Cidade do Panamá
600 Paraguay -  MISSAO: Assunção
450     Madagascar  MISSAO: Madagascar
508     Moçambique  MISSAO:Moçambique
604     Peru        MISSAO: Lima
616     Polonia     MISSAO: Cracóvia,Varsóvia
620     Portugal    Missao:Braga,Setúbal
756     Suiça       Missao:Lugano
788     Tunisia     Missao:Tunisia
858     Uruguai     Missao:  Montevideo
826     United Kingdom  Missao: Londres

//12,32,68,124,132,152,156,170,250,276,328,348,450,508,591,600,604,
//608,616,620,724,756,788,840,858*/
    var missoes = {employees:[
{id:"12",cidades:"Argelia" }, {id:"32",cidades:"Corrientes"},{id:"68",cidades:"Santa Cruz de la Sierra, Sucre" },
{id:"76",cidades:"Fortaleza,Natal,Aracaju,Recife,<br>Amazonas,Pará,Macapá,Curitiba,Rio de Janeiro,Alagoas,Rio Branco" }, 
{id:"124",cidades:"Toronto" }, {id:"132",cidades:"Cabo Verde" }, {id:"152",cidades:"Santiago" },
{id:"156",cidades:"China" }, {id:"170",cidades:"Guayaquil" }, {id:"250",cidades:"Aix-en-Provence, Avignon,Evry,Paris,Toulon" },{id:"254",cidades:"Guiana Francesa" },
{id:"276",cidades:"Paderborn" },
{id:"348",cidades:"Budapeste" }, {id:"450",cidades:"Madagascar" },
{id:"508",cidades:"Moçambique" }, {id:"591",cidades:"Cidade do Panamá" }, {id:"600",cidades:"Assunção" },
{id:"604",cidades:"Lima" }, {id:"608",cidades:"Manilla" }, {id:"616",cidades:"Cracóvia,Varsóvia" },
{id:"620",cidades:"Braga,Setúbal" }, {id:"724",cidades:"Granada" }, {id:"756",cidades:"Lugano" },
{id:"788",cidades:"Tunisia" },{id:"826",cidades:"Londres" } , {id:"840",cidades:"Boston" }, 
{id:"858",cidades:"Montevideo" }]};

var htmlPais="<strong>"+countryById[d.id]+"</strong>"; //Ficará com essa formatação caso não tenha Shalom Ainda
var nameImg=1000;

for (var i = 0; i  <missoes.employees.length; i++) {
       var value=missoes.employees[i].id;
       
    if(missoes.employees[i].id ==d.id){
          var lugares=missoes.employees[i].cidades;
          var nameImg=d.id;
         // var texto = "<span style='color:red;'><strong'>MISSÕES:</strong><br>"+lugares+"</span>";
          htmlPais="<table><tr><td><span class='liketext'><img src='"+nameImg+".png' width='45' height='30'align='rigth'></span><h3 class='liketext'>"+countryById[d.id]+"</h3></td></tr><br><tr><td><span style='color:red;'><strong'>MISSÕES:</strong><br>"+lugares+"</span></td></tr></table>";
         
                   // console.log(texto);
     }
        
  
}
//style='width:100%;text-align:left;background-color:gold;'>
//class='testeCss'>País:<b style='color:red;'>XXX</b>"+d.id+"//"+countryById[d.id]+"</b><br><br>FIRST LINE</span></table>")
//class='testeCss'

     countryTooltip.text(countryById[d.id])
    .html(htmlPais)
	 // <strong>Country: </strong><span class='testeCss'>" + d.properties.name + "<br></span>" + "<strong>Population: </strong><span class='details'>" + d.population +"</span>";
      .style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      .style("display", "block")
      .style("opacity", 1);

      
	  
    })
    .on("mouseout", function(d) {
      countryTooltip.style("opacity", 0)
      .style("display", "none");

	 
	    
    })
    .on("mousemove", function(d) {
      countryTooltip.style("left", (d3.event.pageX + 17) + "px")
      .style("top", (d3.event.pageY - 25) + "px");

      
	 
    });

    //Country focus on option select
    d3.select("select").on("change", function() {
       clearInterval(timeteste);
        console.log("SELECT COUNTRIES");

      var rotate = projection.rotate(),
      focusedCountry = country(countries, this),
      p = d3.geo.centroid(focusedCountry);

       
      svg.selectAll(".focused").classed("focused", focused = false);

    //Globe rotating

    (function transition() {
      d3.transition()
      .duration(2500)
      .tween("rotate", function() {
        var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
        return function(t) {
          projection.rotate(r(t));
          svg.selectAll("path").attr("d", path)
          .classed("focused", function(d, i) { return d.id == focusedCountry.id ? focused = d : false; });
        };
      })
      })();
    });

    function country(cnt, sel) { 
      for(var i = 0, l = cnt.length; i < l; i++) {
        if(cnt[i].id == sel.value) {return cnt[i];}
      }

    };

    
  


  };
  
   /*HERE*/
    function testey(countryId,IdValue) {
        if (countryId == IdValue) {
          alert("10");
           color="blue";
           
          //  return color(country.color = "red");
        }
		else{
		   color="black";
		}
		return color;
    }
  