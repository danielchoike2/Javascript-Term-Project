/* Defines the text as an element that gets displayed in the html file. */
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')



/* declares state to be null until stated otherwise. I will be using this for a inventory system later. */ 

let state = {}

/* This whole function is basically the game! Contains many sub-functions to create buttons based on what the player clicks and display text accordingly. */

function startAdventure() {
   
   showTextNode (1)
}

function showTextNode(textNodeIndex) {
 const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
 textElement.innerText = textNode.text
 while (optionButtonsElement.firstChild) {
     optionButtonsElement.removeChild(optionButtonsElement.firstChild)
 }
textNode.options.forEach(option => {
    if (showOption(option)) {
     const button = document.createElement('button')
     button.innerText = option.text
     button.classList.add('btn')
     button.addEventListener('click', () => selectOption(option))
     optionButtonsElement.appendChild(button)
    }
})
}


/* this command will show the options buttons if state = null or something else. 
I plan to use this for items in a inventory at some point. For now players will just have certain items on based on their options, but no state defining that.  */

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

/* creates the function required to progress to the next option block */ 

function selectOption (option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


/* Below is the code that is the "meat" of the game. For right now I have a lot of similar containers to keep things simple. I hope to optimize this later down the road. */ 
/* I used comments to help keep track of the ending of certain specfic arrays. There are many arrays below that intermesh. */ 

const textNodes = [ /* start of main array */ 
   {/* beggining of options 1 block */
       id: 1,
       text: 'You approach the trail that enters the infamous Alpine Forest. Tales of mythical beasts and unnatural phenomena surround this land. A sign to your right displays the words "Do Not Enter, Seriously".',
       options: /*options array 1*/[
        {
            

            text: 'Go down trail',
          
            nextText: 2
            
        },
        {
            text: 'Turn back where you came from',
            nextText: 3
        }
       ] /*end of options array 1*/
    }, /* end of options 1 block - don't forget comma for next section**/
    {/* beggining of options 2 block */
        id: 2,
        text: 'You muster up all your courage and trek down the trail. After walking awhile you come across a fork on the trail. Which path do you select?',
        options: /*start array 2*/[
         {
             text: 'Go down left path',
          
             nextText: 4
             
         },
         {
             text: 'Go down right path',
          
             nextText: 5
         }
        ] /*end array 2*/
     }, /* end of options 2 block- don't forget comma for next section*/
     {/* beggining of options 3 block */
     id: 3,
     text: 'You attempt to turn back and return home. After a long trek, you appear mysteriously before the trail again. How strange...',
     options: /*options array 3*/[
      {
          text: 'Go down trail',
         
          nextText: 2
          
      },
      {
          text: 'Turn back where you came from...again',
          nextText: 3
      }
     ] /*end of options array 3*/
  }, /* end of options 3 block - don't forget comma for next section**/
  
  {/* beggining of options 4 block */
  id: 4,
  text: 'You walk down the left path. The path goes on for what seems like an eternity. You start to believe your eyes are playing tricks on you. You appear before the same fork on the trail.',
 
        options: /*start array 4*/[
         {
             text: 'Go down left path',
             
             nextText: 4
             
         },
         {
             text: 'Go down right path',
             
             nextText: 5
         }
        ] /*end array 4*/
     }, /* end of options 4 block- don't forget comma for next section*/
     {/* beggining of options 5 block */
  id: 5,
  text: 'You walk down the right path. You hear strange birds singing that sound almost like people whistling. A crow the size of a person lands down in front of you, blocking your path. The crow bellows out "Why are you here?',
 
        options: /*start array 5*/[
         {
             text: '"I am here to seek adventure."',
             
             nextText: 6
             
         },
         {
             text: '"Honestly I have no idea."',
            
             nextText: 7
         }
        ] /*end array 5*/
     }, /* end of options 5 block- don't forget comma for next section*/
 {/* beggining of options 6 block */
 id: 6,
 text: 'The crow laughs so loud you almost tople over. "Ah another foolish adventurer squawking about the Alpine Forest. Sadly you are trapped here forever."',

       options: /*start array 6*/[
        {
            text: '"I am trapped here?"',
           
            nextText: 8
            
        },
        {
            text: '"WHAT?!"',
            
            nextText: 8
        }
       ] /*end array 6*/
    }, /* end of options 5 block- don't forget comma for next section*/
 {/* beggining of options 7 block */
 id: 7,
 text: 'The crow chuckles. "You are here just by pure chance? You are one unlucky human. The magic that keeps this forest alive has trapped you here." ',

 options: /*start array 7*/[
    {
        text: '"I am trapped here?"',
       
        nextText: 8
        
    },
    {
        text: '"WHAT?!"',
        
        nextText: 8
    }
       ] /*end array 7*/
    }, /* end of options 7 block- don't forget comma for next section*/

    {/* beggining of options 8 block */
id: 8,
text: 'The crow sighes loudly. "Yes you are trapped in this forest, unless you break the curse of the Witch. Bad news for you though. Noone has ever broken the curse before." ',

options: /*start array 8*/[
   {
       text: '"How do I break the curse?"',
      
       nextText: 9
       
   },
   {
       text: '"Sounds like a bunch of non-sense."',
       
       nextText: 10
   },
   {
    text: '"Am I dreaming? This cannot be possible!"',
   
    nextText: 11
    
}
     

      ] /*end array 8*/
   }, /* end of options 8 block- don't forget comma for next section*/


   {/* beggining of options 9 block */
id: 9,
text: 'The crow looks at you with awe. "You are quite the tenacious one. In order to break the curse you must find the cursed urn and smash it. Finding it will not be easy. The crowe then flies off." ',

options: /*start array 9*/[
   {
       text: '"Search the area"',
      
       nextText: 12
       
   },
   {
       text: '"Walk down path"',
       
       nextText: 13
   },
   {
    text: '"Call out for help"',
    
    nextText: 14
   }
      ] /*end array 9*/
   }, /* end of options block- don't forget comma for next section*/

    
   {/* beggining of options 10 block - wrong choice loop */
id: 10,
text: 'The crow has a stern look on his face. His eyes begin to rapidly flash. Your vision begins to blur... you awaken in front of the beggining of the trail.',

options: /*options array 10*/[
    {
        

        text: 'Go down trail',
      
        nextText: 2
        
    },
    {
        text: 'Turn back where you came from',
        nextText: 3
    }
   ] /*end of options array 10*/
}, /* end of options 10 block - don't forget comma for next section**/
 
{/* beggining of options 11 block - wrong choice loop */
 id: 11,
 text: 'You walk away from the crow. You hysterically laugh at the whole situation. You pinch your arm in an attempt to wake yourself up. After walking around aimlessly and pinching your arm for a couple hours you end up at the beggining of the trail. ',
 
 options: /*options array 11*/[
     {
         
 
         text: 'Go down trail',
       
         nextText: 2
         
     },
     {
         text: 'Turn back where you came from',
         nextText: 3
     }
    ] /*end of options array 11*/
 }, /* end of options 11 block - don't forget comma for next section**/
 {/* beggining of options 12 block */
 
 id: 12,
 text: 'You search the general area. You find a giant feather and place it in your backpack. Could be useful later.',
 
 options: /*start array 12*/[
    {
        text: 'Walk down path',
       
        nextText: 15
        
        
    },
    {
        text: 'Search the area',
       
        nextText: 16
        
        
    }
       ] /*end array 12*/
    }, /* end of options block- don't forget comma for next section*/
    {/* beggining of options 13 block */
 id: 13,
 text: 'You start to walk down the path, but you have a feeling you should check the area before venturing.',
 
 options: /*start array 13*/[
    {
        text: '"Search the area"',
       
        nextText: 12
        
    },
    {
        text: '"Walk down path"',
        
        nextText: 13
    },
    {
     text: '"Call out for help"',
     
     nextText: 14
    }
       ] /*end array 13*/
    }, /* end of options block- don't forget comma for next section*/
   {/* beggining of options 9 block */
 id: 14,
 text: 'You call out for help. Your voice echoes through the now seemingly empty woods.',
 

    options: /*start array 14*/[
        {
            text: '"Search the area"',
           
            nextText: 12
            
        },
        {
            text: '"Walk down path"',
            
            nextText: 13
        },
        {
         text: '"Call out for help"',
         
         nextText: 14
        }
       ] /*end array 14*/
    }, /* end of options block- don't forget comma for next section*/
 {/* beggining of options 15 block */
 
 id: 15,
 text: 'You begin walking down the path once more. After a couple hours of walking you decide to rest next a stream. A rather large salamander emerges from the creek and waves at you.',
 
 options: /*start array 15*/[
    {
        text: '"Hello"?',
       
        nextText: 17
        
        
    },
    {
        text: 'Run Away',
       
        nextText: 18
        
        
    }
       ] /*end array 12*/
    }, /* end of options block- don't forget comma for next section*/  
 {/* beggining of options 12 block */
 
 id: 16,
 text: 'Appears to be nothing more of use nearby. Better get going!',
 
 options: /*start array 12*/[
    {
        text: 'Walk down path',
       
        nextText: 15
        
        
    },
    {
        text: 'Search the area',
       
        nextText: 16
        
        
    }
       ] /*end array 12*/
    }, /* end of options block- don't forget comma for next section*/
 {/* beggining of options 15 block */
 
 id: 17,
 text: 'The salamander transforms into a robed woman with an unusual pointed hat. "You passed the test, adventurer."',
 
 options: /*start array 17*/[
    {
        text: '"I did??"',
       
        nextText: 19
        
        
    },
    {
        text: 'Passed what?',
       
        nextText: 19
        
        
    }
       ] /*end array 17*/
    }, /* end of options block- don't forget comma for next section*/  

    {/* beggining of options 18 block */
 
id: 18,
text: 'You sprint as fast as you can away from the salamander. After a short distance of frantic sprinting, you tumble down a hill. After you collect yourself from the fall, you notice you are at the beggining of the trail...',

options: /*options array 1*/[
    {
        

        text: 'Go down trail',
      
        nextText: 2
        
    },
    {
        text: 'Turn back where you came from',
        nextText: 3
    }
   ] /*end of options array 1*/
}, /* end of options 1 block - don't forget comma for next section**/ 

 {/* beggining of options 18 block */
 
 id: 19,
 text: '"Yes you passed the test!" the Witch happily exclaims. "You used not only logic but kindess on your venture in my woods. I will break my curse now.".',
 
 options: /*options array 1*/[
     {
         
 
         text: 'Click To Continue',
       
         nextText: 20
         
     }
    ] /*end of options array 1*/
 }, /* end of options 1 block - don't forget comma for next section**/ 
{/* beggining of options 18 block */
 
id: 20,
text: 'The witch throws a small urn onto the ground and big puff of smoke surrounds you. Once the smoke clears you notice you are back home!',

options: /*options array 1*/[
    {
        

        text: 'Click To Continue',
      
        nextText: 21
        
    }
   ] /*end of options array 1*/
}, /* end of options 1 block - don't forget comma for next section**/
{/* beggining of options 18 block */
 
id: 21,
text: 'Congratulations you have beaten the Alpine Forest Text Adventure game! Click the play again button for another round or exit out with the upper right corner "X" button.',

options: /*options array 1*/[
    {
        

        text: 'Play Again',
      
        nextText: 1
        
    }
   ] /*end of options array 1*/
}, /* end of options 1 block - don't forget comma for next section**/


     
    
] /* end of main array */ 

startAdventure()