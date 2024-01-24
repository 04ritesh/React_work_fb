// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {} from '@fortawesome/free-regular-svg-icons'
// import {motion} from 'framer-motion'

// function App() {
//   const [element1, setelement1] = useState(["Banana","Apple","Dragonfruit","papaya","mango","lichi"]);
//   const [element2,setelement2] = useState(["potato","Tomato","Brinjal","ladiesfingure","onion"]);

//   const handleCheckboxChange = (list, index) => {
//     const updatedList = [...list];
//     updatedList[index].selected = !updatedList[index].selected;
//     list === element1 ? setElement1(updatedList) : setElement2(updatedList);
//   };

//   const handleLeftMove = () =>{
//     const selectedElements = element2.filter((element) => element.selected);
//     const updatedElement2 = element2.filter((element) => !element.selected);

//     setelement2(updatedElement2);
//     setelement1([...element1, ...selectedElements]);
//   };

//   const handleRightMove = () =>{
//     const selecteditem = element1.filter((element)=>element.selected);
//     const updatedelement1= element1.filter((element)=>!element.selected);
//     setelement1(updatedelement1);
//     setelement2(...element2,...selecteditem);
//   };

//   return (
//     <>
//       <div  className='flex gap-32 w-full h-full'>
//         <motion.div className='w-96 h-96 bg-orange-400  text-black font-bold flex items-center justify-center'>

//         <ul>
//           {element1.map((element, index) => (
//             <li key={index}>
//             <input
//                 type="checkbox"
//                 checked={element.selected}
//                 onChange={() => handleCheckboxChange(element1, index)}

//               />
//               {element}
//             </li>
//           ))}
//         </ul>
//         </motion.div>
//         <div className='h-auto'>
//         Exchange
//         <div className='mb-4 mt-14'>
//         <motion.svg whileTap={{scale:0.6}} className='bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleRightMove}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></motion.svg>
//         </div>
//         <motion.div>
//         <motion.svg whileTap={{scale:0.6}} className='bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleLeftMove}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></motion.svg>
//         </motion.div>
        

//         </div>
//         <div className='w-96 h-96 bg-orange-400 text-black font-bold flex items-center justify-center'>
//         <ul>
//           {element2.map((element,index)=>(
//           <li>
//           <input
//                 type="checkbox"
//                 checked={element.selected}
//                 onChange={() => handleCheckboxChange(element2, index)}

//               />
//             {element}
//           </li>
//           ))}
//         </ul>
//         </div>
//       </div>
       
//     </>
//   )
// }

// export default App;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';

function App() {
  const [element1, setElement1] = useState([
    { id: 1, text: 'Banana', selected: false },
    { id: 2, text: 'Apple', selected: false },
    { id: 3, text: 'Dragonfruit', selected: false },
    { id: 4, text: 'Papaya', selected: false },
    { id: 5, text: 'Mango', selected: false },
    { id: 6, text: 'Lichi', selected: false },
  ]);

  const [element2, setElement2] = useState([
    { id: 7, text: 'Potato', selected: false },
    { id: 8, text: 'Tomato', selected: false },
    { id: 9, text: 'Brinjal', selected: false },
    { id: 10, text: 'Ladiesfinger', selected: false },
    { id: 11, text: 'Onion', selected: false },
  ]);

  const handleCheckboxChange = (list, index) => {
    const updatedList = [...list];
    updatedList[index].selected = !updatedList[index].selected;
    list === element1 ? setElement1(updatedList) : setElement2(updatedList);
  };

  const handleMoveRight = () => {
    const selectedElements = element1.filter((element) => element.selected);
    const updatedElement1 = element1.filter((element) => !element.selected);

    setElement1(updatedElement1);
    selectedElements.map((element,key)=>(
      element.selected=false
    ))
    setElement2([...element2, ...selectedElements]);

    // {element2.map((element,key)=>(
    //  element.selected=false
    // ))}

  };

  const handleMoveLeft = () => {
    const selectedElements = element2.filter((element) => element.selected);
    const updatedElement2 = element2.filter((element) => !element.selected);

    setElement2(updatedElement2);
    selectedElements.map((element,key)=>(
      element.selected=false
    ))
    
    setElement1([...element1, ...selectedElements]);
  };

  return (
    <>
      <div className='flex gap-32 w-full h-full'>
        <motion.div className='w-96 h-96 bg-orange-400 text-black font-bold flex items-center justify-center'>
          <ul>
            {element1.map((element, index) => (
              <li key={element.id}>
                <input
                  type="checkbox"
                  checked={element.selected}
                  onChange={() => handleCheckboxChange(element1, index)}
                />
                {element.text}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className='h-auto'>
          Exchange
          <div className='mb-4 mt-14'>
            <motion.svg whileTap={{ scale: 0.6 }} className='bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleMoveRight}>
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </motion.svg>
          </div>
          <motion.div>
            <motion.svg whileTap={{ scale: 0.6 }} className='bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={handleMoveLeft}>
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </motion.svg>
          </motion.div>
        </div>
        <div className='w-96 h-96 bg-orange-400 text-black font-bold flex items-center justify-center'>
          <ul>
            {element2.map((element, index) => (
              <li key={element.id}>
                <input
                  type="checkbox"
                  checked={element.selected}
                  onChange={() => handleCheckboxChange(element2, index)}
                />
                {element.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
