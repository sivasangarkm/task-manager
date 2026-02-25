import type { ReactNode } from "react";

interface Property
{
    children :ReactNode;
}

// function Alert({msg}:Property)
// {
//     return <h1>{msg}</h1>;
// }s

// export default Alert;
export const Alert = ({children}:Property) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}
