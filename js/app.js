let headerArray = ['Location', 'Type', 'Stock', 'Cost', 'Price', 'Profit'];

// Instantiate cookie objects
let chocolateChip = new Cookie('PDX', 'Chocolate Chip', 100, 5, 10);
let oatmealRaisin = new Cookie('MSP', 'Oatmeal Rasin', 80, 4, 8);
let snickerdoodle = new Cookie('FAR', 'Snickerdoodle', 50, 7, 15);
let salmondoodles = new Cookie('SEA', 'Salmondoodles', 1, 1, 100);

let cookieArray = [chocolateChip, oatmealRaisin, snickerdoodle, salmondoodles];

// Header/Footer stuff
function header() {
    render(headerArray, 'head', 'header');
}

function footer() {
    let footerArray = [];
    footerArray.push('Total');
    footerArray.push('');
    // Stock, Cost, Profit, Price
    let totals = [0, 0, 0, 0];
    for(let i in cookieArray) {
        totals[0] += cookieArray[i].stock;
        totals[1] += cookieArray[i].cost;
        totals[2] += cookieArray[i].profit;
        totals[3] += cookieArray[i].price;
    }
    for(let i in totals) {
        footerArray.push(totals[i]);
    }
    render(footerArray, 'body', 'body-total');
}

// Call some functions
header();
update();
