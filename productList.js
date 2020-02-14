(function () {



var results = [
    { image: 'productImage/image1- Black.jpg', title: 'Iphone 11 Black', price: '789.99', Brand: 'Apple'},
    { image: 'productImage/image1- Gold.jpg', title: 'Iphone 11 Gold', price: '775.99', Brand: 'Apple'},
    { image: 'productImage/image1- Green.jpg', title: 'Iphone 11 Green', price: '799.99', Brand: 'Apple'},
    { image: 'productImage/image1- Purple.jpg', title: 'Iphone 11 Purple', price: '699.99', Brand: 'Apple'},
    { image: 'productImage/image1- Red.jpg', title: 'Iphone 11 Red', price: '599.99', Brand: 'Apple'},
    { image: 'productImage/image1- White.jpg', title: 'Iphone 11 White', price: '499.99', Brand: 'Apple'},
    { image: 'productImage/image2- Black.jpg', title: 'Samsung S10 Black', price: '949.99', Brand: 'Samsung'},
    { image: 'productImage/image2- Blue.jpg', title: 'Samsung S10 Blue', price: '849.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S10 White', price: '749.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S9 White', price: '349.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S9 Black', price: '399.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S9 Gold', price: '299.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S9 Blue', price: '249.99', Brand: 'Samsung' },
    { image: 'productImage/image2- White.jpg', title: 'Samsung S9 Pink', price: '199.99', Brand: 'Samsung' },
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

function brand(sortValue){

   var sortedResults = results.filter(function (a) {
       if (a.Brand === sortValue){
           return true;
       }

   });
    renderList(sortedResults);
}

function priceRange(sortValue){
        var temp = parseInt(sortValue);
    var sortedResults = results.filter(function (a) {
        switch (temp){
            case 1:
                if(a.price <= 200){
                    return true;
                }
                break;
            case 2:
                if(a.price > 200 && a.price <= 400){
                    return true;
                }
                break;
            case 3:
                if(a.price > 400 && a.price <= 600){
                    return true;
                }
                break;
            case 4:
                if(a.price > 600){
                    return true;
                }
                break;
        }

    });
    renderList(sortedResults);
}


    document.querySelector('#orderBy').addEventListener('change', function(event){
        orderBy(event.target.value);

    });
    document.querySelector('#brand').addEventListener('change', function(event){
        brand(event.target.value);
    });
    document.querySelector('#priceRange').addEventListener('change', function(event){
        priceRange(event.target.value);

    });



})();