"use client";
import { useAppSelector } from "@/lib/redux/store";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import styles from "./SignUp.module.css"
export default function SignUp() {
  const session = useSession();

  const redirect_route = useAppSelector(
    (state) => state.redirect_route_reducer.route
  );
  useEffect(() => {
    if (session) {
      redirect(redirect_route);
    }
  }, []);

    
    return <div className={styles.sign__up}>
        <div styles>
            
      </div>
  </div>;
}
