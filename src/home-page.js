export function generateHomepage() {
    //content Div
    const contentDiv = document.getElementById('content');

    //title DIV
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    //restaurant hours div
    const restaurantHoursDiv = document.createElement('div');
    restaurantHoursDiv.classList.add('restaurantHours');

    //location div
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    
    //title text
    const title = document.createElement('h1');
    title.innerText = 'Human Restaurant'
    titleDiv.appendChild(title);

    //subtitle text
    const sub_title = document.createElement('p');
    sub_title.innerText = "Our restaurant is run by people, for people. We serve food that's edible and safe for bi-pod mammals to consume. We are definitely not aliens.";
    titleDiv.appendChild(sub_title)

    //restaurant hours h1
    const restaurantHoursTitle = document.createElement('h1');
    restaurantHoursTitle.innerText = "Restaurant Hours";
    restaurantHoursDiv.append(restaurantHoursTitle);

    //restaurant hours text
    const restaurantHours = document.createElement('p');
    restaurantHours.innerText = 
    `Sunday: 8am - 8pm \n
    Monday: 6am - 6pm \n
    Tuesday: 6am - 6pm \n
    Wednesday: 6am - 6pm \n
    Thursday: 6am - 10pm \n
    Friday: 6am - 10pm \n
    Saturday: 8am - 10pm \n`
    restaurantHoursDiv.append(restaurantHours)

    //location title

    const locationTitle = document.createElement('h1');
    locationTitle.innerText = "Location";
    locationDiv.append(locationTitle);

    //location address text

    const locationAddress = document.createElement('p');
    locationAddress.innerText = "150 Cotton St, Pioche, NV 89043";
    locationDiv.append(locationAddress);

    //conect sub-divs to content div 
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(restaurantHoursDiv);
    contentDiv.appendChild(locationDiv);
}

{/* <div class='title'>
<h1>Human Restaurant</h1>
</div>

<div class='sub-title'>
<p>Our restaurant is run by people, for people. We serve food that's edible and safe for bi-pod mammals to consume. We are definitely not aliens.
</p>
</div>

<div class="hours">
<h1>Hours</h1>
<p>
    Sunday: 8am - 8pm <br>
    Monday: 6am - 6pm <br>
    Tuesday: 6am - 6pm <br>
    Wednesday: 6am - 6pm <br>
    Thursday: 6am - 10pm <br>
    Friday: 6am - 10pm <br>
    Saturday: 8am - 10pm <br>
</p>
</div>

<div class='address'>
<h1>Our Address</h1>
<p>
    150 Cotton St, Pioche, NV 89043
</p>
</div> */}