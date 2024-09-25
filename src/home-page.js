export function generateHomepage() {
    //content Div
    const contentDiv = document.getElementById('content');
    //clear previous contents
    contentDiv.innerHTML = '';

    //title DIV
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.classList.add('outer_container');

    //restaurant hours div
    const restaurantHoursDiv = document.createElement('div');
    restaurantHoursDiv.classList.add('restaurantHours');
    restaurantHoursDiv.classList.add('outer_container');

    //location div
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    locationDiv.classList.add('outer_container');
    
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
