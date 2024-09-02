document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll('img').forEach(function (img) {
      img.setAttribute("draggable", "false");
   });

   // ?TRENDING CARD RELOAD/REMOVE
   const gridContainer = document.querySelector('.card-grid');
   const gridCard = document.querySelectorAll('.card')
   
   gridCard.forEach(card => { 
      const containerHeight = gridContainer.offsetHeight;
      const cardHeight = card.offsetHeight;

      const rowsSpanned = Math.ceil(containerHeight / cardHeight);
   
      if (rowsSpanned > 2) {
         card.remove();
         console.log("ROW: " + rowsSpanned + " itemRemoved")
      }
   });
   
})