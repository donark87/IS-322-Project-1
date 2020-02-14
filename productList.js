(function () {



var results = [
    { image: 'productImage/image1- Black.jpg', title: 'Iphone 11 Black', price: '999.99', Brand: 'Apple'},
    { image: 'productImage/image1- Gold.jpg', title: 'AIphone 11 Gold', price: '899.99', Brand: 'Apple'},
    { image: 'productImage/image1- Green.jpg', title: 'Iphone 11 Green', price: '799.99', Brand: 'Apple'},
    { image: 'productImage/image1- Purple.jpg', title: 'Iphone 11 Purple', price: '699.99', Brand: 'Apple'},
    { image: 'productImage/image1- Red.jpg', title: 'Iphone 11 Red', price: '599.99', Brand: 'Apple'},
    { image: 'productImage/image1- White.jpg', title: 'BIphone 11 White', price: '499.99', Brand: 'Apple'},
    { image: 'productImage/image2- Black.jpg', title: 'Samsung S10 Black', price: '949.99', Brand: 'Samsung'},
    { image: 'productImage/image2- Blue.jpg', title: 'CSamsung S10 Blue', price: '849.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S10 White', price: '749.99', Brand: 'Samsung' },
];
    renderList(results);

function renderList(results) {


    var tableBody = document.querySelector('#results-table tbody');

    tableBody.innerHTML = '';

    var tableRows = results.map(function (result, index) {
        return '<td> <img src="' + result.image + '"></td><td> <p>' +
            result.title + '</p></td><td><p>$' + result.price + '</p></td></tr>';
    });

    tableRows.forEach(function (row) {
        tableBody.innerHTML += row;
    });
}


function orderBy(sortValue) {

    var sortedResults = (sortValue === 'name') ?

        results.sort(function (a, b) {

            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }) :
        results.sort(function (a, b) {
            return a[sortValue] - b[sortValue];
        });
    renderList(sortedResults);
}
    document.querySelector('#orderBy').addEventListener('change', function(event){
        orderBy(event.target.value);

    });
function brand(sortValue){

   var sortedResults = results.filter(function (a) {
       if (a.Brand === sortValue){
           return true;
       }

   });
    renderList(sortedResults);
}

    document.querySelector('#brand').addEventListener('change', function(event){
        brand(event.target.value);
    });



})();