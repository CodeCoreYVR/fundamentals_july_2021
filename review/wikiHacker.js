// Write some jQuery to remove the wikipedia logo
$('.mw-wiki-logo').remove()

// Write some jQuery to change the image on the right hand side to 
// a different picture
$('a.image > img') // or $('a[href="/wiki/File:Justin_Bieber_in_2015.jpg"] > img')
  .eq(0)
  .attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Prime_Minister_Trudeau_-_2020_%28cropped%29.jpg/220px-Prime_Minister_Trudeau_-_2020_%28cropped%29.jpg')
  .attr('srcset', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Prime_Minister_Trudeau_-_2020_%28cropped%29.jpg/220px-Prime_Minister_Trudeau_-_2020_%28cropped%29.jpg')