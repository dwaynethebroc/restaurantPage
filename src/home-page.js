function generateHomepage() {
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

export function generateMenu() {
    //find content div
    const contentDiv = document.getElementById('content');
    // clear previous content
    contentDiv.innerText = ''

    //build a loop that creates a menu item with name, description, picture, and price from an array with class names that can be targeted and styled
    
    menu_item_name_array = ["Balinese Cuisine", "French Food", "Grain Products", "Rice", "Bolivian Salt", "Barbeque"];
    menu_item_description_array = [
        "We have very normal human food such as Balinese Cuisine",
        "French food is human food too",
        "Grain products for people",
        "Rice, the most common human food in the world",
        "Salt from Bolivia is important for nutrition",
        "Asado"
    ];
    menu_item_picture_array = [
        "./images/bali.jpg", 
        "./images/french.JPG",
        "./images/grain.jpg",
        "./images/rice.jpg",
        "./images/salt.jpg",
        "./images/asado.jpg",
    ];
    menu_item_price_array = ["$2", "$5", "$3", "$2", "$8", "$6"];

    for(i=0; i < menu_item_name.length; i++) {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu_item');
        menuDiv.classList.add('outer_container');
        
        const menu_item_name = document.createElement('h1');
        menu_item_name.classList.add('menu_item_name');
        menu_item_name.innerText = menu_item_name_array[i];
        
        const menu_item_description = document.createElement('p');
        menu_item_description.classList.add('menu_item_description');
        menu_item_description.innerText = menu_item_description_array[i];
        
        const menu_item_picture = document.createElement('div');
        menu_item_picture.classList.add('menu_item_picture');
        menu_item_picture.innerHTML = '<img src=\"'+menu_item_picture_array[i]+'\">';
        
        const menu_item_price = document.createElement('p');
        menu_item_price.classList.add('menu_item_price');
        menu_item_price.innerText = menu_item_price_array[i];

        menuDiv.append(menu_item_name);
        menuDiv.append(menu_item_description);
        menuDiv.append(menu_item_picture);
        menuDiv.append(menu_item_price);

        contentDiv.append(menuDiv);

        i++
    }
}

{/* <div class="menuDIV">
    <div class="menu_item_name">
        Name of item
    </div>

    <div class='menu_item_description'>
        description of food item
    </div>

    <div class='menu_item_picture'>
        picture of item
    </div>

    <div class="menu_item_price">
        The price
    </div>
</div> */}