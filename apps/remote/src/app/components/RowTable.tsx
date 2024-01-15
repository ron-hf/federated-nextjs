import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CheckCircle } from "@mui/icons-material";
import { Show } from "../generated/graphql";
import { Supplier } from "@app2/generated/graphql";

type tableProps = {
  supplier: Supplier;
};

const NoData = () => {
  return (
    <Stack alignItems={"center"}>
      <Typography variant="h6">No data!</Typography>
    </Stack>
  );
};

export const RowTable = ({ supplier }: tableProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {supplier.name}
        </TableCell>
        <TableCell>
          {supplier.status}
        </TableCell>
      </TableRow>
    </>
  );
};
