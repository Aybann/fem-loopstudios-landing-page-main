const navigation = document.querySelector('.navigation');
const header = document.querySelector('.header-container');

const faders = document.querySelectorAll('.fade-in');

const headerObserverOptions = {
  rootMargin: "-600px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver){
  entries.forEach(entry =>{
   if(!entry.isIntersecting){
    navigation.classList.add('background');
   }
   else{
    navigation.classList.remove('background');
   }
  })
}, headerObserverOptions);

headerObserver.observe(header);

const appearOptions = {
  thresshold: 0,
  rootMargin: "100px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return ;
    }else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});