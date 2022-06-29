document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
});



$(document).ready(function () {
  $('.sidenav').sidenav();
  
    $(".baslik").css("color", "red");
    $(".baslik").click(function (e) { 
      e.preventDefault();
      $(".baslik").css("color", "blue");
  
      
    });
  
  
    
      let dizi = [
          [
            1,
            "SÜMEYYE AKCA",
            "16008118064"
          ],
          [
            2,
            "ZEKİ ARSLAN",
            "16008118058"
          ],
          [
            3,
            "FERDİ AYDOĞDU",
            "16008118011"
          ],
          [
            4,
            "BEYZA NUR ÇAM",
            "16008118030"
          ],
          [
            5,
            "ÇAĞRI CANDAN",
            "16008118006"
          ]
        ]
  
        
        $("#btn").click(function (e) { 
          e.preventDefault();
          let htmlCikti = `
               <tr>
               <td>${dizi[0][0]}</td>
               <td>${dizi[0][1]}</td>
               <td>${dizi[0][2]}</td>
               </tr>
               `
        $("#output").append(htmlCikti);
          
        });
        console.log(dizi)
        
        let htmlCikti = ""
        $.each(dizi, function (indexInArray, satir) { 
           htmlCikti += `
           <tr>
           <td>${satir[0]}</td>
           <td class="adsoyad">${satir[1]}</td>
           <td>${satir[2]}</td>
           <td><button class="satirButton">getir</button></td>
           </tr>
           `
        });


        $("#output").append(htmlCikti);

          
        $("button").click(function (e) { 
          let ad = $(this).parent().parent().find(".adsoyad").text()
          console.log(ad)
        });
      
  });