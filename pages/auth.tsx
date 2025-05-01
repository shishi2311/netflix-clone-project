// import { useCallback, useState } from 'react';
// import axios from 'axios';
// import Input from "@/components/Input";
// import { signIn } from 'next-auth/react';
 

// import { FcGoogle} from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';


// const Auth = () => {
  

//   const[email, setEmail] = useState('');
//   const[name,setName] = useState('');
//   const[password,setPassword] = useState('');

//   const[variant, setVariant] = useState('login');

//   const toggleVariant = useCallback(() => {
//     setVariant((currentVarient) => currentVarient === 'login' ? 'register' : 'login');
//   } ,[]);
//   const login = useCallback(async () => {
//     try{
//       await signIn('credentials', {
//         email,
//         password,
        
//         callbackUrl: '/profiles',
//       });

      
//     }catch(error){
//       console.error(error);
//     }
//   },[email, password]);

//   const register = useCallback(async () =>{
//     try{
//       if (variant === 'login') {
//         login();
//         return;
//       }
//       await axios.post('/api/register',{
//         email,
//         name,
//         password
//       });
//       login();
//     }catch(error) {
//       console.error(error);
 
//     }
//   },[email, name, password, login]);

  


//   return (
//     <div className="
//     relative
//     h-full w-full bg-[url('/images/hero1.jpg')] bg-center bg-no-repeat bg-center">    
//       <div className="bg-black w-full h-full lg:bg-opacity-50">
//         {/* Navigation Bar */}
//         <nav className="px-12 py-5">
//           <img src="/images/logo.png" alt="logo" className="h-12" />
//         </nav>
  
//         {/* Centered Form Container */}
//         <div className="flex justify-center items-center ">
//           <div className="bg-black bg-opacity-70 px-16 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
//             {/* Sign In Heading */}
//             <h2 className="text-white text-4xl mb-8 font-semibold">
//               {variant === 'login' ? 'Sign In' : 'Register'}
//             </h2>
  
//             {/* Input Field */}
//             <div className="flex flex-col gap-4">   
//               {variant === 'register' && (
//             <Input 
//                 id="name"
//                 onChange={(ev: React.ChangeEvent<HTMLInputElement> ) => setName(ev.target.value)}
//                 label="Username"
//                 value={name}
                
//               />
//               )}
//               <Input 
//                 id="email"
//                 onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
//                 label="Email"
//                 value={email}
//                 type="email"
//               />
//               <Input 
//                 id="password"
//                 onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
//                 label="Password"
//                 value={password}
//                 type="password"
//               />
              
//             </div>
            
//             {/* Sign In Button */}
//             <button onClick={ variant === 'login' ? login : register } className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
//             {variant === 'login' ? 'Log-in' : 'Sign Up'}
              
//             </button>

//             <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
//               <div
//               onClick={() => signIn('google', {callbackUrl: '/profiles'})} 
//               className='
//               w-10
//               h-10
//               bg-white
//               rounded-full
//               flex items-center
//               justify-center
//               cursor-pointer
//               hover:opacity-80
//               transition'>
//                 <FcGoogle size={30} />

//               </div>
//               <div 
//               onClick={() => signIn('github', {callbackUrl: '/profiles'})}
//               className='
//               w-10
//               h-10
//               bg-white
//               rounded-full
//               flex items-center justify-center
//               cursor-pointer
//               hover:opacity-80
//               transition'>
//                 <FaGithub size={30} />

//               </div>
              
//             </div>
            

//             <p className='text-neutral-500 mt-12'>
//               {variant === 'login' ? 'First time using netflix?' : 'Already have an account?'} 
//               <span onClick={toggleVariant} className='text-white mt-1 hover:underline cursor-pointer'>
                
//                  Create an account
//               </span>

//             </p>
//           </div>
//         </div>
//       </div>                
//     </div>
//   );
  
// }
// export default Auth;    

import { useCallback, useState } from 'react';
import axios from 'axios';
import Input from "@/components/Input";
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  // Toggle between login and register
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
  }, []);

  // Login function
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (error) {
      console.error(error);
    }
  }, [email, password]); // Add email and password as dependencies

  // Register function
  const register = useCallback(async () => {
    try {
      if (variant === 'login') {
        login();
        return;
      }
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
      login(); // Call login after successful registration
    } catch (error) {
      console.error(error);
    }
  }, [email, name, password, login, variant]); // Add email, name, password, login, variant as dependencies

  return (
    <div className="relative h-full w-full bg-[url('/images/hero1.jpg')] bg-center bg-no-repeat bg-center">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* Navigation Bar */}
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>

        {/* Centered Form Container */}
        <div className="flex justify-center items-center">
          <div className="bg-black bg-opacity-70 px-16 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            {/* Sign In Heading */}
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>

            {/* Input Field */}
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setName(ev.target.value)}
                  label="Username"
                  value={name}
                />
              )}
              <Input
                id="email"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
                label="Email"
                value={email}
                type="email"
              />
              <Input
                id="password"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
                label="Password"
                value={password}
                type="password"
              />
            </div>

            {/* Sign In Button */}
            <button
              onClick={variant === 'login' ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === 'login' ? 'Log-in' : 'Sign Up'}
            </button>

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white mt-1 hover:underline cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
