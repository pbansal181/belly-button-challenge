function getPlots(id) {
    //getting data from the json file
    d3.json("samples.json").then((data)=> {
        console.log(data)
  
        var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)
        
        //filter sample values by id 
        var samples = data.samples.filter(s => s.id.toString() === id)[0];
        console.log(samples);
  
        //Getting the top 10 values
        var samplevalues = samples.sample_values.slice(0, 10).reverse();
  
        //Finding top 10 otu ids for the plot OTU and reversing it
        var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();
        
        //Finding otu id's for the plot
        var OTU_id = OTU_top.map(d => "OTU " + d)
    
        //Finding top 10 labels for the plot
        var labels = samples.otu_labels.slice(0, 10);
  
        //Creating variables for the bar graph
        var trace = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            marker: {
              color: 'blue'},
            type:"bar",
            orientation: "h",
        };
  
        var data = [trace];
  
        //Create layout variable for the graph plot
        var layout = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
  
        // create the bar plot
        Plotly.newPlot("bar", data, layout);
  
            
        // Creating variables for Bubble Chart
        var trace1 = {
            x: samples.otu_ids,
            y: samples.sample_values,
            mode: "markers",
            marker: {
                size: samples.sample_values,
                color: samples.otu_ids
            },
            text: samples.otu_labels
  
        };
  
        // set the layout for the bubble plot
        var layout_b = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1000
        };
  
        // creating data variable 
        var data1 = [trace1];
  
        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout_b); 
  
        // The guage chart
  
      });
  }  
// create the function to get the necessary data
function getdemoInfo(id) {
    
    d3.json("samples.json").then((data)=> {
        
        //Finding metadata info for the demographic panel
        var metadata = data.metadata;
        console.log(metadata)

        //Filtering metadata info by ID
        var result = metadata.filter(meta => meta.id.toString() === id)[0];

        //Demographic data
        var demographicInfo = d3.select("#sample-metadata");
        
        //Removing all demographic details each time
        demographicInfo.html("");

        //Finding details of demographic data for the id and append it
        Object.entries(result).forEach((key) => {   
                demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

//Funtion for changing event ID
function optionChanged(id) {
    getPlots(id);
    getdemoInfo(id);
}

//Create the function for the initial data rendering
function init() {
    //Selecting dropdown menu 
    var dropdown = d3.select("#selDataset");

        d3.json("samples.json").then((data)=> {
        console.log(data)

        //Finding IDs for dropdown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        //Call the plot and demographic info function
        getPlots(data.names[0]);
        getdemoInfo(data.names[0]);
    });
}

init();
