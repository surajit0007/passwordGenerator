import React,{useState,useEffect} from 'react'

function App() {

let [charecterLength,setcharecterLength]=useState(10)

let [numberChecked,setnumberChecked]=useState('')

let [charecterChecked,setCharecterChecked]=useState('')

let [showPassword,setShowPassword]=useState('')

let [copyText,setCopyText]=useState('Copy')

useEffect(()=>{

  let password=''

  let letter='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'


  let num='0123456789'

  let charecter='¥$º()¿|{}èïŝß'








  for(let i=1; i<=charecterLength; i++) {

    let randomtext=''

    let index= Math.floor(Math.random() * letter.length);



    if(numberChecked==='true'){

      let index2= Math.floor(Math.random() * num.length);
      randomtext += num.charAt(index2)

    }

    if(charecterChecked==='true'){

      let index3= Math.floor(Math.random() * charecter.length);
      randomtext += charecter.charAt(index3)
    }

    randomtext += letter.charAt(index)
    


    let index4= Math.floor(Math.random() * randomtext.length);

    password += randomtext.charAt(index4)

  }


  setShowPassword(password)

},[charecterLength,numberChecked,charecterChecked])


  return (

    <>
    
            <div className='password_generator_card'>
          
          <div className='content_wrapper'>
                  <h1>Random Password Generator</h1>
                  <div className='input_and_copy_button'>
                    <input type="text" className='main_input_field' value={showPassword} disabled/>  
                     <button className='copy_button' onClick={()=>{navigator.clipboard.writeText(showPassword)
                      setCopyText('Copied')
                      setTimeout(()=>{
                        setCopyText('copy')
                      },1000)

                     }}>{copyText}</button>
                  </div>  

                  <div className='check_boxes_and_input_type_range'>

                    <input type="range" name='input_range' step={2} min={10} max={12} defaultValue={8} onChange={(e)=>{setcharecterLength(e.target.value) }}/>
                    <label htmlFor="input_range" className='range_text'>Select Charecter Length({charecterLength})</label>

                     <input type="checkbox" name="number_check" id="number_check"  onClick={(e)=>{setnumberChecked(e.target.checked.toString())}}/> 
                     <label htmlFor="number_check" className='includes_number_text' >Includes Number</label>

                     <input type="checkbox" name="charecter_check" id='charecter_check' onClick={(e)=>{setCharecterChecked(e.target.checked.toString())}}/> 
                     <label htmlFor="charecter_check" className='charecter_check_text'>Includes Charecter</label>
                    
                  </div>    
          </div>

            </div> 


    </>


  )
}

export default App;
