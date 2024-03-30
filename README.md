# belly-button-challenge

**Background**

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

**Instructions**

Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

	a. Use sample_values as the values for the bar chart.

	b. Use otu_ids as the labels for the bar chart.

	c. Use otu_labels as the hovertext for the chart.

![image](https://github.com/pbansal181/belly-button-challenge/assets/148804724/b74a9b7f-b5c1-4525-bb06-d6e165205663)


3. Create a bubble chart that displays each sample.

	a. Use otu_ids for the x values.

	b. Use sample_values for the y values.

	c. Use sample_values for the marker size.

	d. Use otu_ids for the marker colors.

	e. Use otu_labels for the text values.

![image](https://github.com/pbansal181/belly-button-challenge/assets/148804724/8bad09c5-9796-4ecb-9a0b-ede259db9c16)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/pbansal181/belly-button-challenge/assets/148804724/d8a1bcea-0183-4b98-8d69-33cda8f94085)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/pbansal181/belly-button-challenge/assets/148804724/6476e6e9-a82d-40a0-9a17-9d8601430b20)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file





