// Hair Code

const displayHair = document.querySelector('#display-image')
displayHair.src = './hair1.png'

const hairForm= document.querySelector('#hair')
const afroRadio= document.querySelector('#afro')
const wavyRadio= document.querySelector('#wavy')
const ponyRadio= document.querySelector('#pony')
const fadeRadio= document.querySelector('#fade')
const lowfroRadio= document.querySelector('#lowFro')

afroRadio.addEventListener('click', () => {
    displayHair.src = './hair1.png'
})

wavyRadio.addEventListener('click', () => {
    displayHair.src = './hair2.png'
})

ponyRadio.addEventListener('click', () => {
    displayHair.src = './hair3.png'
})

fadeRadio.addEventListener('click', () => {
    displayHair.src = './hair4.png'
})

lowfroRadio.addEventListener('click', () => {
    displayHair.src = './hair5.png'
})

const displayShirt = document.querySelector('#display-top')
displayShirt.src = './top3.png'

const shirtForm= document.querySelector('#shirt')
const tieDyeRadio= document.querySelector('#tieDye')
const tanRadio= document.querySelector('#tan')
const trackRadio= document.querySelector('#track')
const discoRadio= document.querySelector('#disco')
const superFlyRadio= document.querySelector('#superFly')

tieDyeRadio.addEventListener('click', () => {
    displayShirt.src = './top1.png'
})

tanRadio.addEventListener('click', () => {
    displayShirt.src = './top2.png'
})

trackRadio.addEventListener('click', () => {
    displayShirt.src = './top3.png'
})

discoRadio.addEventListener('click', () => {
    displayShirt.src = './top4.png'
})

superFlyRadio.addEventListener('click', () => {
    displayShirt.src = './top5.png'
})

const displaybottoms = document.querySelector('#display-bottoms')
displaybottoms.src = './bottoms3.png'

const bottomsForm= document.querySelector('#bottoms')
const pleatedRadio= document.querySelector('#pleated')
const shortsRadio= document.querySelector('#shorts')
const trackPantsRadio= document.querySelector('#trackPants')
const pinkRadio= document.querySelector('#bellBottoms')
const retroRadio= document.querySelector('#jeans')

pleatedRadio.addEventListener('click', () => {
    displaybottoms.src = './bottoms1.png'
})

shortsRadio.addEventListener('click', () => {
    displaybottoms.src = './bottoms2.png'
})

trackPantsRadio.addEventListener('click', () => {
    displaybottoms.src = './bottoms3.png'
})

pinkRadio.addEventListener('click', () => {
    displaybottoms.src = './bottoms4.png'
})

retroRadio.addEventListener('click', () => {
    displaybottoms.src = './bottoms5.png'
})


// const handleHairSelection = (e) =>{
//     e.preventDefault()
//     const checked = document.querySelector('input[name="hair"]:checked').value;
//     console.log(checked)
// }


// const handleShirtSelection = (e) =>{
//     e.preventDefault()
//     const checked = document.querySelector('input[name="shirt"]:checked').value;
//     console.log(checked)
// }

// Server
const express = require('express')
const app = express()
app.use(express.json())

app.get('/api/hair-style/:hairStyle', controller.getHairPic)

app.listen(5000, console.log('listening on port 5000'))


// // Controller

// const hairStyles = {
//   afro: 'http://linkToSomeAfroPic.jpg',
//   pony: 'etc'
// }

// module.exports = {
//   getHairPic: (req, res) => {
//     const { hairStyle } = req.params
    
//     res.status(200).send(hairStyles[hairStyle])
//   } 
// }

// // Front End

// const form = document.querySelector('#hair')
// const character = document.querySelector('#character')

// const hairStyle = document.querySelector('input[name="hair"]:checked').value

// axios.get(`/api/hair-style/${hairStyle}`).then(res => {
//   hairStyleURL = res.data
//   character.src = hairStyleURL
// })


// // HTML

// //  <img id='hairImage' src=''></img>
// // <img src='middleImage' src=''></img>
// // <img src='bottomImage' src=''></img>



// // CSS

// //   Position pictures correctly using CSS 



// // When you click a radio, the clothes need to change
// // - Event listener to radios
// // - Click
// // - On click -> Path to image should change