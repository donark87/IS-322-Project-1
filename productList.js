(function () {



    var results = [
        { _id: 0,image: 'productImage/image1- Black.jpg', title: '<a href="productPage.html?id=0">Iphone 11 Black</a>', price: '789.99', Brand: 'Apple', description:"<H1>Iphone 11 Black</H1><p>reprehenderit in voluptate velit esse cillum, <strong>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  est laborum.</p>"},
        { _id: 1,image: 'productImage/image1- Gold.jpg', title: '<a href="productPage.html?id=1">Iphone 11 Gold</a>', price: '775.99', Brand: 'Apple', description:"<H1>Iphone 11 Gold</H1><p>Excepteur sint occaecat cupidatat non <strong>sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"},
        { _id: 2,image: 'productImage/image1- Green.jpg', title: '<a href="productPage.html?id=2">Iphone 11 Green</a>', price: '799.99', Brand: 'Apple', description:"<H1>Iphone 11 Green</H1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>"},
        { _id: 3,image: 'productImage/image1- Purple.jpg', title: '<a href="productPage.html?id=3">Iphone 11 Purple</a>', price: '699.99', Brand: 'Apple', description:"<H1>Iphone 11 Purple</H1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> Proin libero nunc consequat interdum varius. Luctus accumsan tortor posuere ac ut. Id eu nisl nunc mi ipsum faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Condimentum vitae sapien ces tincidunt.</p>"},
        { _id: 4,image: 'productImage/image1- Red.jpg', title: '<a href="productPage.html?id=4">Iphone 11 Red</a>', price: '599.99', Brand: 'Apple', description:"<H1>Iphone 11 Red</H1><p>Diam quis enim lobortis scelerisque. Condimentum vitae sapien <strong>pellentesque habitant morbi tristique senectus. Viverra ipsum nunc aliquet bibendum </strong>nim facilisis gravida neque convallis. Ornare massa eget egestas purus. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sed ullamcorper morbi tincidunt ornare massa eget. Sed faucibus turpis in eu mi bibendum neque egestas. In dictum non fermestu urna.</p>"},
        { _id: 5,image: 'productImage/image1- White.jpg', title: '<a href="productPage.html?id=5">Iphone 11 White</a>', price: '499.99', Brand: 'Apple', description:"<H1>Iphone 11 White</H1><p>Eget nullam non nisi est sit amet. Nunc consequat interdum <strong>varius sit amet mattis vulputate enim. Faucibus in ornare quam viverra orci sagittis</strong>eu volutpat odio. Elementum nisi quis eleifend quam adipiscing vitae proin. Duis at tellus at urna condimentum mattis. Eu scelerisque felis imperdiet proin. Lobortis elementum nibh tellus molestie nunc non. Molestie nunc non blandit massa enim nec dui nunc mattis at m aliquam.</p>"},
        { _id: 6,image: 'productImage/image2- Black.jpg', title: '<a href="productPage.html?id=6">Samsung S10 Black</a>', price: '949.99', Brand: 'Samsung', description:"<H1>Samsung S10 Black</H1><p>Sagittis nisl rhoncus mattis rhoncus. Cursus euismod <strong>quis viverra nibh cras pulvinar. Lectus quam id leo in vitae turpis. Duis ultricies lacus </strong>sed turpis tincidunt id aliquet. Pellentesque habitant morbi tristique senectus et netus et. Pharetra magna ac placerat vestibulum lectus. Leo in vitae turpis massa sed. Ac ut consequat semper viverra. Condimentum vitae sapien pellentesque habitant morbi ntesque nec nam.</p>"},
        { _id: 7,image: 'productImage/image2- Blue.jpg', title: '<a href="productPage.html?id=7">Samsung S10 Blue</a>', price: '849.99', Brand: 'Samsung', description:"<H1>Samsung S10 Blue</H1><p>Adipiscing elit ut aliquam purus sit. Praesent elementum <strong>facilisis leo vel. Fames ac turpis egestas sed. At in tellus integer feugiat scelerisque. </strong>Pellentesque adipiscing commodo elit at. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Arcu bibendum at varius vel pharetra. Hendrerit dolor magna eget est lorem ipsum. Volutpat lacus laoreet non curabitur gravida arcu ac etiam tempor.</p>" },
        { _id: 8,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=8">Samsung S10 White</a>', price: '749.99', Brand: 'Samsung', description:"<H1>Samsung S10 White</H1><pMetus vulputate eu scelerisque felis imperdiet proin fermentum. <strong> Aliquet porttitor lacus luctus accumsan. Mattis enim ut tellus elementum sagittis.</strong> Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Neque ornare aenean euismod elementum nisi quis. Fermentum odio eu feugiat pretium nibh ipsum consequat. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet nulla tique risus.</p>" },
        { _id: 9,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=9">Samsung S9 White</a>', price: '349.99', Brand: 'Samsung', description:"<H1>Samsung S9 White</H1><p>In fermentum posuere urna nec. Quis blandit turpis cursus in hac.<strong> Pellentesque sit amet porttitor eget dolor morbi. Pellentesque sit amet porttitor </strong>eget dolor morbi. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Sem integer vitae amet nisl purus in</p>" },
        { _id: 10,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=10">Samsung S9 Black</a>', price: '399.99', Brand: 'Samsung', description:"<H1>Samsung S9 Black</H1><p>Neque viverra justo nec ultrices dui. Gravida cum sociis natoque <strong>penatibus et magnis. Urna neque viverra justo nec. Orci nulla pellentesque dignissim enim.</strong> Sit amet mauris commodo quis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Eu non diam phasellus vestibulum lorem sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Dolor sit amet consectetur faucibus interdum </p>" },
        { _id: 11,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=11">Samsung S9 Gold</a>', price: '299.99', Brand: 'Samsung', description:"<H1>Samsung S9 Gold</H1><p>Quis varius quam quisque id. Sit amet est placerat in.<strong>Volutpat sed cras ornare arcu dui vivamus arcu felis. Mattis ullamcorper velit sed ullamcorper morbi </strong>tincidunt ornare massa eget. Eu feugiat pretium nibh ipsum consequat. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. A lacus vestibulum sed arcu non. At quis risus sed vulputate odio ut enim blandit volutpat. Nisi lacus sed viverra tattis... </p>" },
        { _id: 12,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=12">Samsung S9 Blue</a>', price: '249.99', Brand: 'Samsung', description:"<H1>Samsung S9 Blue</H1><p>Gravida rutrum quisque non tellus orci ac. Bibendum enim facilisis gravida neque convallis a cras semper. <strong>Commodo elit at imperdiet dui accumsan. </strong>Netus et malesuada fames ac turpis egestas. Amet dictum sit amet justo donec enim diam vulputate ut. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Id aliquet lectus proin nibh nisl condimentum. Purus viverra accumsan in nisl nisi scelerisqueetra magna ac</p>" },
        { _id: 13,image: 'productImage/image2- White.jpg', title: '<a href="productPage.html?id=13">Samsung S9 Pink</a>', price: '199.99', Brand: 'Samsung', description:"<H1>Samsung S9 Pink</H1><p>Neque sodales ut etiam sit amet nisl purus in. Nec nam aliquam sem et tortor consequat. <strong>Semper eget duis at tellus at urna condimentum mattis pellentesque. </strong>Purus non enim praesent elementum facilisis leo vel fringilla est. Pretium viverra suspendisse potenti nullam ac tortor. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eu mi bibendum neque egestas congue quisque. Lobortis feugiat que penatibus.</p>" },
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
    var sortBy = document.querySelector('#orderBy');
    orderBy(sortBy);
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
    var sortBy = document.querySelector('#orderBy');
    orderBy(sortBy);
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