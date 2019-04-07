const button = document.querySelector('button')
const img = document.querySelector('#photo')

// const num = document.querySelector('span')

// let count = 0

// listen for clicks
button.addEventListener('click', (e) => {
  // count++
  // button.innerHTML = 'new text'
  // num.innerHTML = count

  // make the requests
  const XHR = new XMLHttpRequest()
  const url = "https://dog.ceo/api/breeds/image/random"

  XHR.onreadystatechange = () => {
    // 4 == done
    // 200 == status ok
    if(XHR.readyState == 4 && XHR.status == 200) {
      console.log(JSON.parse(XHR.responseText).message)
      const imgUrl = JSON.parse(XHR.responseText).message
      img.src = imgUrl
    }
  }

  XHR.open("GET", url)
  XHR.send()

})
