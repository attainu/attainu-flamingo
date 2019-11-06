$(document).ready(function(){

   var dogURL = 'https://dog.ceo/api/breeds/image/random'

    $('#fetchButton').on('click',function(){

        console.log('button clicked!')

        $.ajax({url:dogURL,
                success: function(response){
                    
                    $('#imageDiv').append('<img src='+response.message+'>')
                    $('#imageDiv').append('<h3>A cute dog!</h3>')

                    console.log(response)

                },
                error: function(){
                    alert('not able to fetch!')
                }
        
        })







    })








})