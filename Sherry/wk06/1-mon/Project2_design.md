This ReadMe file is consist of two parts, four screens introduction and database information.

### Four screens introduction

## Home page (<h1>Rate MY Photographer</h1>)

1. create "Search" function, to list all photographers you search for on the "show" screen. 

2. create "Post new" function to add a new photographer by editing in edit page, and then save into database, which directly link to the "Details" page, and it will also display on the Newest posts section of "Home" page when back to the "Home: page. 

3. "Top 5 list" (by rate) and "Newest posts" display under search and post new button, which is pathway link to "Details" page to check details of photographers.

## Show page

1. Display a list of photographers you search for in the "home" page.

2. It will show the details for a specific photographer when you click a title of photographer.

## Details page

1. Details is showed on this page, which includs photographer's name, image, rate,Tel, addr, comments(plus new comments).

2. You can go to "Edit" page by clicking Edit button to undate information for the photographer you choose, and then can go back to "Details" page after editing.

3. There is Add Comments and Rate section on the bottom of this page, which allows you to add comments or reviews in the text box, and give a rating for the photographer on the page. The new comment and the rating result (the average rate after calculation)you gave will show up directly in the Comments section after clicking Save button.

4. Destroy button is the option to delete the photographer you don't like (information in database will be also removed if running destroy function), then redirect to "Home" page.

## Edit page

1. There are 5-6 optional text boxes you can fill in to post a new photographer or update the one that exist already.

2. "Edit" page is linked back to "Details" page after clicking Save button.

3. New post or update for photographer you just edited for also can be found in the "Home" page as long as you link back.

### database information
 
1. Create 2 tables named as "photographers" and "comments".

2. Table photographers contains columns which are id, name, image_url, rate, tel, addr.

3. Table comments contains columns which are id, Photographer_id, comments.

4. There is a connection by id in table photographers and photographer_id in table comments.
