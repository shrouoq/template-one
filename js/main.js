// start counter
let selectedDate = new Date('Sep 16 2024 10:59:59').getTime();

let counter = setInterval(() => {
    
    let date = new Date().getTime();
    
    let dif=  selectedDate - date

    let daysCount  = Math.floor(dif / (24*60*60*1000))
    let hoursCount = Math.floor((dif % (24*60*60*1000)) / (60*60*1000 ))
    let minCount   = Math.floor(dif % (24*60*60*1000) % (60*60*1000 ) / (60*1000))
    let secCount   = Math.floor(dif % (24*60*60*1000) % (60*60*1000 ) % (60*1000) / 1000)
    
    document.querySelector('.days').innerHTML  = daysCount < 10 ? '0'+daysCount : daysCount
    document.querySelector('.hours').innerHTML = hoursCount < 10 ? '0'+hoursCount : hoursCount
    document.querySelector('.min').innerHTML = minCount < 10 ? '0'+minCount : minCount
    document.querySelector('.sec').innerHTML = secCount < 10 ? '0'+secCount : secCount

    if(dif < 0){ 
        clearInterval(counter)
        document.querySelector('.days').innerHTML = '00';
        document.querySelector('.hours').innerHTML = '00';
        document.querySelector('.min').innerHTML = '00';
        document.querySelector('.sec').innerHTML = '00';
    }
    
}, 1000)
// end counter

// start counting
let goalsP  = document.querySelectorAll('.state .goal');
let state   = document.querySelector('.state');
let started = false;

window.onscroll = () => {
    if(window.scrollY >= state.offsetTop - 150){
        if(!started){
            goalsP.forEach((el) => {
                count(el)
            }) 
        }
        started = true
    }

    if(window.scrollY >= skillsBarContainer.offsetTop - 150){
        fullWidth()
    }
}

let count = (el) => {
    let goal = el.dataset.goal
    let current = el.textContent
    
    let interval = setInterval(() => {
        current++;
        el.textContent = current
        if(current >= goal){
            clearInterval(interval)
        }
    },2000/goal)

}
// end counting

// start skillsBar
let skillsBarContainer  =  document.querySelector('.skills');
let bars                =  document.querySelectorAll('.bar-box .bar-data');
let nums                =  document.querySelectorAll('.bar-box .num')
console.log(nums);


let fullWidth = () => {
    bars.forEach((bar) => {
        bar.style.width = bar.dataset.goal
    })
    nums.forEach((num) => {
        num.style.opacity = 1
    })
}



// end skillsBar