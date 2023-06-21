import { Avatar } from "@mui/material";

interface Props{

  src: string
  size: number
  firstName?: string
  lastName?: string


}

export default function User({src, size, firstName, lastName}:Props){
  return (
    
      <>
        <Avatar src={src} sx={{width: size, height: size}}/>
        {firstName}
        {lastName}

      </>
  )
}
