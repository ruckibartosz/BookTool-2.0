/* eslint-disable */
import React, { useState } from "react";

const useLoginRightPanel = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [emailInputValue, setEmailInputValue] =  useState('');
    const [passwordInputValue, setPasswordInputValue] =  useState("");
    
    const handleEmailInputChange = (e: any) => console.log('e  = ', e);
    const handlePasswordInputChange = (e: any) => console.log('e  = ', e);


    return [isError, emailInputValue, handleEmailInputChange, handlePasswordInputChange];

}

export default useLoginRightPanel;