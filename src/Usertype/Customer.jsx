import React,{useState,useEffect} from 'react'
import Select from "react-select"
import { Textarea,Button, Container } from '@chakra-ui/react'

const Customer = () => {
  const [productOpt,setProductOpt]=useState({});
  const [productType,setProductType]=useState({});
  
  //Just make this submit to localstorage as json file then extract it from there to admin or other.
  
  const singleOpt = [
    {value: "forMobile",label:"Mobile Phone"},
    {value: "forTv",label:"TV"},
    {value: "forRefrigerator",label:"Refrigerator"},
    {value: "forWashingMachine",label:"Washing Machine"}
  ]

  const valueOpt={
    forMobile : [
      {value: "Broken Screen",label:"Broken Screen"},
      {value: "Faulty Camera",label:"Faulty Camera"},
      {value: "Overheating Issue",label:"Overheating Issue"}
    ],
    forTv : [
      {value: "Damaged Screen",label:"Damaged Screen"},
      {value: "Discoloration Of Screen",label:"Discoloration Of Screen"},
      {value: "Adapter Issues",label:"Adapter Issue"}
    ],
    forRefrigerator :[
      {value: "Panel Controls Broken",label:"Panel Controls Broken"},
      {value: "Compressor Not Working",label:"Compressor Not Working"},
      {value: "Unable To Turn On",label:"Unable To Turn On"}
    ],
    forWashingMachine : [
      {value: "Water overflowing",label:"Water overflowing"},
      {value: "Motor not working",label:"Motor not working"},
    ]
  }
  
  useEffect( ()=>{
      setProductType(valueOpt[productOpt]);      
  },[productOpt])

  const handleUpload=(e)=>{
        e.preventDefault();
        let file = e.target.files  //e.target.value nhi hota it files or gives error of blob
        if(file.length>0)
            if(file[0].size > 2*1024*1024) {
              console.log("Size exceeds")
              return;
            }
}
const handleClick = (e)=>{
  e.preventDefault();
  console.log(`Your request has been submitted and a customer care executive will be in touch with you soon.`)
}

  return (
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <form>
       <label>Product Type:</label>
       <Select options={singleOpt} onChange={ selectedOpt=> {setProductOpt(selectedOpt.value)}}/>

       <label>Issue Type:</label>
       <Select options={productType} isMulti/>
        
        <label>Issue Description:</label>
       <Textarea placeholder='(optional) Write your query' />

       <label>Policy Upload:</label>
       <label htmlFor='upload-button'>
            <span className="image-button">
                Button
            </span>
          </label>
          <input
             type="file"
             multiple={false}
             id="upload-button"
             style={{display:'none'}}
             onChange={handleUpload}
          />
          <br/>
          <Button colorScheme='blue' onClick={handleClick}> Submit </Button>
    </form>
    </Container>

  )
}

export default Customer
