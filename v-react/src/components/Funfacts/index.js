// import React,{useState,useEffect} from 'react'

// import api from '../../api'

// import './assets/scss/components/_fun-facts-card.scss'
// import './assets/scss/components/_fun-facts-icon.scss'


// export default function Funcfacts(props) {
//   let [funfactObj,setFunfactObj] = useState([])
//   let [funfactID,setFunfactID] = useState(Number)
//   let [funfact,setFunfact] = useState(String)

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   function loadFact() {
//     const URL = 'funfacts?per_page=99'
//     api.get(URL)
//     .then(function(response){
//       let obj = response.data
//       for (let i in obj) {
//         setFunfactObj(funfactObj => [...funfactObj,obj[i].title.rendered])
//       }
//     })
//     .finally(function(){
//       getFunFacts()
//     })
//   }
//   function getFunFacts() {
//     let len = funfactObj.length
//     let i = Math.floor(Math.random() * len)
//     setFunfactID(i + 1)
//     setFunfact(funfactObj[i])
//   }
//   useEffect(() => {
//     loadFact();
//   },[loadFact])
//   return (
//       <label  id="funFactsCard" class="fun-facts-card animated" for="checkFunFacts" title="Click to close">
          
//           <div class="content">

//               <img src="./assets/img/Cube-1s-39px.svg" alt="" />

//               <h6 class="title">
//                   some fun fact about me #<span id="funFactID">{{funfactID}}</span>
//               </h6>
              
//               <p id="funFacts" dangerouslySetInnerHTML={{__html:funfactObj}}></p> 

//           </div>

//       </label>
//   )
// }
