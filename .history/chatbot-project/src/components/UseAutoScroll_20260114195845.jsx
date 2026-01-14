import { useState, useRef, useEffect } from 'react'


function useAutoScroll( dependencies ){
  const containerRef = useRef(null);
 
   //runs the code after the component is created or updated
   useEffect(() =>{
     
    const containerElem = containerRef.current;
    if(containerElem){
     containerElem.scrollTop = containerElem.scrollHeight;
    }   
 
   //now runs every time chatMessages changes. [] controls when useEffect runs
   }, dependencies);
 
   return containerRef;
 
 }
 