$( document ).ready(function() {
    console.log( 'ready!' );
    $.ajax({
      url: 'http://localhost:9000/scripts/candidates.json',
      dataType: 'json',
      type: 'GET',
      success: function (candidates) {
        var source   = $('#profile-template').html();
        var template = Handlebars.compile(source);

        for( var i=0;i<candidates.length;i++){

          if(i<3){
            $('#profile-3').append(template(candidates[i]));
          }else{
            $('#profile-2').append(template(candidates[i]));
          }
        }
      }
    } );

    $.ajax({
      url: 'http://localhost:9000/scripts/places.json',
      dataType: 'json',
      type: 'GET',
      success: function (places) {
        var source   = $('#places-template').html();
        var template = Handlebars.compile(source);

        for( var i=0;i<places.length;i++){
          if(i==0){
            places[i]['class']='selected';
          }
          places[i]['PRD-margin'] = (places[i]['PRD']-1)*60;
          places[i]['PRI-margin'] = (places[i]['PRI']-1)*60;
          places[i]['PT-margin'] = (places[i]['PT']-1)*60;
          places[i]['MORENA-margin'] = (places[i]['MORENA']-1)*60;
          places[i]['PAN-margin'] = (places[i]['PAN']-1)*60;
          places[i]['date'] = moment(places[i]['date']).format('DD/MM/YYYY');
          console.log(places);
          console.log(template(places[i]));
          $('#places').append(template(places[i]));
        }

      },
      error:function(err){
        console.log(err);
      }
    });

});
