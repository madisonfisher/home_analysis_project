# home_analysis_project

# Machine Learning
Machine Learning was used on this project to predict sets of time data as seen on the Housing Inventory 
            map, the graphs for different tiers of house value, and on the home value trends across states graphs. Both of these analysis used the same general set up 
            which involved setting up a dataframe using the previous data point and the difference between the current data point 
            and the previous data point to create the machine learning data set. This data set was then used to train the model.
            To then get the predicted data the last data point of the given data was used and the difference was calculated and plugged into 
            the model. This was repeated with a loop to get the predicted data sets used in this project.  
          
# Data Analysis</h3></div>
The data used on this project came from <a href="https://www.zillow.com/research/data/">Zillow's Research Data</a> that is updated normally monthly.
              Please note some data sets had missing data points or were not fully updated to current times. 
            
### Rent Prices
The visualizations of the rent price analysis were powered by Tableau. The purpose of using Tableau is to create different types of
              visualizations that reveal observable trends for rent across the United States and over the past six years. Zillow's rental data included
              the city, the city's size rank (as determined by Zillow) and the average rent for each month within a city from 2014 to 2020.
              Calculated fields were created using Tableau so that the average annual rent could be visualized as well as the average annual rent over six years. Both of the
              calculated fields take better advantage of Tableau's visual capablities.
            
### Housing Inventory
Mean and Median days houses were listed on the market was used for this data analysis. The files were transposed and formatted so that each city was
              its own column. Then each city was individually analyzed by taking the housing data and adding a column which took looked back at the previous week. Then
              a second column was added which took the difference between this new column and the week before. These process was then repeat to look 2 weeks back. After
              the dataframe was setup this data was then used in a machine learning model and then the model was used to predict the mean and median for another 6 months.
              This data was then graphed with the original data set on graphs that popup on a leaflet map after a city is selected. OpenCage Geocode 
              was used to find the latitude and longitude of the cities based on the city name. Please note the US data is on a popup in the center of the US. 
            
### Sales vs. List Price
The graph developed for Sales vs. List price was generated using a 6 month rolling mean. The actual data points were also graphed 
              to show a comparison between the analyzed data and original data. The 6 month rolling mean is a good tool to use to smooth out 
              data while still seeing trends. 
          
### House Value Index by Tier
Random forest regression was used to predict the average value of a home based on the value in the previous
              year. This was done three times: for homes in the top 35%, homes in the 65th to 35th percentile, and
              homes in the bottom 35%. The accuracy of the model was very good with scores > 0.99 achieved. 

            
### Home Value Trends for US States
Zillow's Home Value Index data set was used for this analysis. The data goes back to 1996 and is a monthly average of the value for homes in 
              each US State and DC. In Python the data was split into segments pre and post market bubble that existed in the second half of the aughts.
              2 linear regressions were trained; one with data from 1996-2004 and the other with data from 2011-2019. This was done with the goal to find out 
              if the value of homes had continued growing at the rates from the above time periods would they be valued higher or lower than they are currently.
              The table on the page contains the name of each state, their ZHVI on June 30 2021, and the two predicted values at the same time point.
         
# Deployment
This project was deployed using Heroku and a Flask app was created to run all the html files on the deployed Heroku app. 
          
https://home-data-project.herokuapp.com/
