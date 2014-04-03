$.ajax({
    url: 'packages.json',
    dataType: 'json',
    success: function( data ) {
        var packages = [];
        data.forEach(function(pkg){
            packages.push('<li><a target="_blank" href="http://npmjs.org/' + pkg.name + '"><name>' + pkg.name+ '</name><desc>' + pkg.description + '</desc></a></li>');
        })
        $('#packages').html(packages.join(''))
    }
});
