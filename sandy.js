const review = [
    {
        id: 1,
        name: "Taiwo Odetola",
        job: "back end dev",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },

    {
        id: 2,
        name: "sandra uwah",
        job: "web dev",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    
    {
        id: 3,
        name: "miss world",
        job: "engineer",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },

    {
        id: 4,
        name: 'miss kesha',
        job: "intern",
        image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
];
  
// selsect items
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", ()=>{
    showPerson(currentItem)
})

// show next person
function showPerson(){
    const item = review[currentItem];
    image.src = item.image;
    author.textContent = item.name;
    job.textContent= item.job;
    info.textContent = item.text;
}

// show next person
nextbtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem > review.length-1){
        currentItem =0;
    }
    showPerson();
});

prevBtn.addEventListener("click", ()=>{
    currentItem--;
    if(currentItem<0){
        currentItem= review.length;
    }
    showPerson();
})

randombtn.addEventListener("click", ()=>{
   currentItem = Math.floor(Math.random()* review.length);
    showPerson(currentItem);
})
