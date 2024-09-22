document.addEventListener("DOMContentLoaded", () => {

   // ?IMAGE DRAGGABLE
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
         card.style.display = 'none';
         console.log("ROW: " + rowsSpanned + " itemRemoved")
      }
      // location.reload();
   });





   // ?FILTERING CARDS
   const filterList = document.querySelector('.filter');
   const filterbuttons = filterList.querySelectorAll('.filter-btn');

   const cards = document.querySelectorAll('.product-card');

   filterbuttons.forEach((button) => {
      button.addEventListener ('click', (e) => {
         const filter = e.target.getAttribute('data-filter');
         console.log(filter);
         
         updateCurrentButtton(e.currentTarget);
         filterConf(filter);
      })
   })

   function updateCurrentButtton(currentTarget){
      filterList.querySelector('.active-link').classList.remove('active-link');
      currentTarget.classList.add('active-link');
   }

   function filterConf (filter){
      cards.forEach((conf) => {
         const confCategory = conf.getAttribute('data-category');

         if (filter === 'featured' || filter === confCategory){
            // conf.removeAttribute('hidden');
            conf.style.display = 'block';
         }else{
            // conf.setAttribute('hidden', '');
            conf.style.display = 'none';
         }
      })
   }
})



