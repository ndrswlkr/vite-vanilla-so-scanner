import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {
  getDeviceList,
  getStream,
  setUp,
  settings,
  startAnalyze
} from './lib/camera.js'


 let forRef = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div style="border: 1px solid white" id=testObject></div>
    
  </div>
`
setUp()

let tresholdSelect = document.createElement('select')
tresholdSelect.onchange = e => (settings.treshold = e.target.value)
let controls = document.querySelector('#controls')
controls.appendChild(tresholdSelect)
let values = [10, 20, 30, 40, 50, 60, 70, 80, 90]
values.map(value => {
  let opt = document.createElement('option')
  opt.setAttribute('value', value)
  if (value == 70) opt.setAttribute('selected', true)
  opt.textContent = value
  tresholdSelect.appendChild(opt)
})
let deviceList = await getDeviceList()
let selectedDevice = null

console.log(deviceList)
const deviceSelect = document.createElement('select')
controls.appendChild(deviceSelect)
const video = document.querySelector('#video')
const videoPreview = document.querySelector('#videoPreview')

deviceList.forEach(device => {
  let opt = document.createElement('option')
  opt.setAttribute('value', device.id)
  opt.textContent = device.label
  deviceSelect.appendChild(opt)
})

deviceSelect.onchange = ev => {
  selectedDevice = ev.target.value
  console.log(selectedDevice)
  getStream(selectedDevice)
}

const toggleCapture = document.createElement('button')
toggleCapture.textContent = 'Start'
controls.appendChild(toggleCapture)
toggleCapture.onclick = () => {
  settings.run = !settings.run
  settings.run ? toggleCapture.textContent= "Stop" : toggleCapture.textContent = "Start" 
  if (settings.run)  startAnalyze()
}

