import React,{useState,useEffect} from 'react'
import Select from "react-select"
import { Textarea,Button, Container } from '@chakra-ui/react'
import OptionData from "../Data/OptionsData.json";

const btn = {
  backgroundColor:" #4CAF50",
  border: "none",
  color: "white",
  padding: "5px 10px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "10px",
  marginLeft: "20px"
}

const Customer = () => {
  const [productOpt,setProductOpt]=useState({});
  
  const [productType,setProductType]=useState({});
  const [issueVal,setIssueVal]=useState("");
  const [issueDesc,setIssueDesc]=useState("");
  const [fileVal,setFileVal]=useState({});

  const [errorMsg,setErrorMsg]=useState("");
  const [successMsg,setSuccessMsg]=useState("");
  
  //Just make this submit to localstorage as json file then extract it from there to admin or other.
  
  // console.log(OptionData); 

  useEffect( ()=>{
    setIssueVal([]);
    setProductType(OptionData.valueOpt[productOpt.value]);      
  },[productOpt])

useEffect(()=>{
  setIssueVal(issueVal);
},[issueVal])


  const handleUpload=(e)=>{
        e.preventDefault();
        let file = e.target.files  //e.target.value nhi hota it files or gives error of blob
        if(file.length>0)
            if(file[0].size > 2*1024*1024) {
              setErrorMsg("Size exceeds")
              return;
            }
            // console.log( e.target.files)
        setFileVal(e.target.files[0]);
    }
    
const handleClick = (e)=>{
  e.preventDefault();
  if(!productType || !issueVal || !fileVal) {
    setErrorMsg("Please fill the required field's")
    return;
  }
  const requestData = [{
         name:localStorage.getItem("userName"),
         productName: productOpt.label,
         issues:issueVal,
         issueDescTxt:issueDesc,
         fileObj:fileVal,
         allocated:"unallocated",
         status:"In Progress",
         date: new Date().toJSON().slice(0, 10)
  }]
  localStorage.setItem("requestData",JSON.stringify(requestData));

  setSuccessMsg(`Your request has been submitted and a customer care executive will be in touch with you soon.`)
  
  window.location.reload();
}
  return (
    <Container>
      <form style={{paddingTop:"15vh"}}>
       <label>Product Type:</label><span style={{color: "red"}}>*</span>
       <Select options={OptionData.singleOpt} onChange={ selectedOpt=> //console.log(selectedOpt.value)
         {setProductOpt(selectedOpt)}
         }/>
       <label>Issue Type:</label><span style={{color: "red"}}>*</span>
       <Select options={productType} isMulti value={issueVal} onChange={ (choice)=>setIssueVal(choice)  }/>
        
        <label>Issue Description:</label>
       <Textarea placeholder='(optional) Write your query' value={issueDesc} onChange={e=>setIssueDesc(e.target.value)}/>
       
       <div  style={{marginTop:"15px"}}>
       <label>Policy Upload:</label><span style={{color: "red"}}>*</span>
       <label htmlFor='upload-button'>
        <span style={btn}>Upload</span>
        </label>
        <input
            type="file"
            multiple={false}
            id="upload-button"
            style={{display:'none'}}
            onChange={handleUpload}
        />
        <span style={{color:"red",marginLeft:"10px"}}>{errorMsg}</span>
        </div>
          <br/>
          <Button colorScheme='blue' onClick={handleClick}> Submit </Button>
          <br/>
         <p style={{color:"green"}}>{successMsg}</p> 
    </form>
    </Container>

  )
}

export default Customer
