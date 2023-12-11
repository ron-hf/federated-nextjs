import { Typography } from "@mui/material";
import dynamic from "next/dynamic";

export const Page1 = () => {
  const Dashboard = dynamic(async () => await import('app2/Dashboard'));
  return (
    <>
    <Typography variant="h1">
      Page 3
    </Typography>
    {(typeof window !== "undefined") && (<Dashboard />) }
    </>
  )
};

export default Page1;