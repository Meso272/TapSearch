# :new_moon: TapSearch
A simple search engine for documents based on inverted-index. ReactJs for frontend and Djano Rest Framework for Rest API. <br />
Deploying frontend on Github pages and backend on heroku.

Backend:- https://quiet-badlands-42446.herokuapp.com/api/

#### USECASE:<br />
Can be used to index documents and words in the document.<br />
Can be used to search words present in different documents.

#### REST APIs:<br/>
index: Index the entrered set of paragraphs.<br/>
search: Search for the given words in the documents.<br/>
getALl: View all the documents present in the db.<br/>
clear: Clear all the indexes in the db.<br/>

#### TECHSTACK: <br />
Python <br />
Django<br />
Django Rest Framework<br />
ReactJs<br />
Heroku

#### How to use:<br />
Given the frontpage of the TapSearch website. Click on Index<br/><br/>
<img src="tapsearch1.PNG" alt="drawing" width="900" height="500" /><br/><br/>
Enter the documents or paragraphs to be indexed and press index it.<br/><br/>
<img src="tapsearch2.PNG" alt="drawing" width="900" height="500" /><br/><br/>
Go to search page and search for the specific word in each document.<br><br/>
<img src="tapsearch3.PNG" alt="drawing" width="900" height="500" /><br/><br/>
<img src="tapsearch4.PNG" alt="drawing" width="900" height="500" /><br/><br/>
Go to All Documents to get all the documents that has been indexed.<br /><br/>
<img src="tapsearch5.PNG" alt="drawing" width="900" height="500" /><br/><br/>
Press clear to clear all the indexed documents.<br/><br/>
<img src="tapsearch6.PNG" alt="drawing" width="900" height="500" /><br/><br/>

### Future Prospects<br/>
The given webapp can be further improve by adding phrase indexing. so that we can seach for phrases.<br />
The search can be modified search that we can get all the paragraphs that contains the word the user has typed untill now.

### Instructions to run locally as backend server might crash.
1. Clone the repo.<br/>
`git clone https://github.com/sorablaze11/TapSearch.git`
2. Install python and nodejs if you don't have it installed in your laptop/desktop.<br/>
3. At the project folder. Enter the below code to install all the libraries.<br/>
`pip install -r requirements.txt`
3. Go to backend and enter to run the backend searver.<br />
`python manage.py runserver`
4. Go to frontend and enter the below code to install the dependencies.<br/>
`npm i`
5. After that type the below code to run frontend server. <br />
`npm start`
6. Now go to below link to access the webapp. <br />
`http://127.0.0.1:3000/`
