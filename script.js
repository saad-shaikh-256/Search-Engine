const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function (event) {
   event.preventDefault(); 
   const query = searchInput.value.trim();

   if (query) {
      const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;

      if (urlPattern.test(query)) {
     
         window.location.href = query.startsWith('http') ? query : 'https://' + query;
      } else {
         
         const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
         window.location.href = googleSearchUrl;
      }
   } else {
      alert("Please enter a search term or URL.");
   }
});
