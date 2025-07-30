import React, { forwardRef, useContext } from "react";
import UserAuthContext from "../../Context/Context";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { LogOut as authLogout } from "../../features/auth/authSlice";

const LogoutBtn = () => {
    const {userLogOut}=useContext(UserAuthContext)
const dispatch=useDispatch()

  const logOutHandler = () => {
    //  setIsSheetOpen(false);
    userLogOut().then(()=>{
      dispatch(authLogout())
 })
  };
  return (
    <Button
    onClick={logOutHandler}
      variant="outline"
      className="text-red-600 border-red-600 hover:bg-red-50"
    >
      Log out
    </Button>
  );
};

export default LogoutBtn;
