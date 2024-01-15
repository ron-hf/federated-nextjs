import { Typography, useTheme } from "@mui/material";
import dynamic from "next/dynamic";


export const Suppliers = () => {
  const theme = useTheme()
  console.log("from host ", theme.palette.primary.main)
  const Supplier = dynamic(async () => await import('hfDemo/Suppliers'), {
    ssr: false
  })
  return (
    <>
      <Supplier />
    </>
  )
};

export default Suppliers;