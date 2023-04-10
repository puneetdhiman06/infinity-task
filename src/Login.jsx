import React,{useState} from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';


//funciton that has to be passed
const Login = () => {
//variables
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [userType,setUserType] = useState("");
  let [errorMsg,setErrorMsg] = useState("");
  //functions
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(userName && password && userType){
      setErrorMsg("");
      console.log(userName)
        if(userName !== userType.toLowerCase())
        {
          setErrorMsg(<Alert status='error'>
          <AlertIcon />
          <AlertTitle>Your</AlertTitle>
        </Alert>)
          return;
        }
        if(userName !== password)
        {
          setErrorMsg(<Alert status='error'>
          <AlertIcon />
          <AlertTitle>Your</AlertTitle>
        </Alert>)
          return;
        }
        localStorage.setItem("userName",userName)
        localStorage.setItem("password",password)
        localStorage.setItem("userType",userType)
        setUserName("")
        setPassword("")
        setUserType("");
        window.location.href=`/${userType.toLowerCase()}`; 
        window.locaiotn.reload();
    }else{
        //throw error
        setErrorMsg("Something is Missing");
    }
  };

  //component that has to be returned
  return (
    <>
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}> Log In</Heading>

        <Input
          placeholder="username"
          type="text"
          variant="filled"
          value={userName}
          onChange={ e => setUserName(e.target.value)}
          mb={3}
        />
        <Input
          placeholder="*****"
          type="password"
          variant="filled"
          value={password}
          onChange={ e=> setPassword(e.target.value)}
          mb={6}
        />
        <Select placeholder='User Type' mb={6} value={userType} onChange={e=>setUserType(e.target.value)}>
            <option value='Customer'>Customer</option>
            <option value='Employee'>Employee</option>
        </Select>

        <a onClick={onSubmitHandler} href={`/${userType}`}><Button colorScheme="teal" mb={8} >
          Log In
        </Button>
        </a>
  
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
        <p> {errorMsg}</p>
    
      </Flex>

    </Flex>

    </>
  );
};

export default Login;



// import React from 'react'
// import {
//     FormControl,
//     FormLabel,
//     Input,
//     Container ,
//     Select ,
//     Button
//   } from '@chakra-ui/react'

  
// const Login = () => {
//     const [username,setUsername] = useState("");
//     const [password,setPassword] = useState("");

//     const onSubmitHandler = (e)=>{
//         e.preventDefault();
//         console.log(username+" "+password); 
//     }
//   return (
//      <form onSubmit={onSubmitHandler}>
//         <input placeholder='username' type="text" value = {username} onChange={e=>setUsername(e.target.value)}/>
//         <input placeholder='password' type="password" value = {password} onChange={e=>setPassword(e.target.value)}/>
//         <button> Submit</button>
//      </form>
//   );
// }

// export default Login
