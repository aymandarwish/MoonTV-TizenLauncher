const cards=[...document.querySelectorAll('.card')];let index=0;function focusCard(){cards.forEach((c,i)=>c.classList.toggle('focus',i===index))}function clock(){const d=new Date();document.getElementById('clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}setInterval(clock,1000);clock();function launch(name){
  // App launching will be wired to the installed TizenBrew/Tizen app IDs after the UI test.
  document.querySelector('.title').textContent=name;
  document.querySelector('.subtitle').textContent='Selected. Press ENTER again after the launcher integration is enabled.';
}
function keyHandler(e){const k=e.key||e.code;if(['ArrowLeft','LEFT'].includes(k)){index=Math.max(0,index-1);focusCard();e.preventDefault()}else if(['ArrowRight','RIGHT'].includes(k)){index=Math.min(cards.length-1,index+1);focusCard();e.preventDefault()}else if(['Enter','ENTER'].includes(k)){launch(cards[index].dataset.app);e.preventDefault()}else if(['Escape','Back','RETURN'].includes(k)){e.preventDefault()}else if(['Exit','EXIT'].includes(k)){e.preventDefault()}}document.addEventListener('keydown',keyHandler);focusCard();
