import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { ReactNode } from "react"


type collapsibleTableProps = {
  name: string,
  headers: string [],
  children: ReactNode
}

export const CollapsibleTable = ({
  name,
  headers,
  children
}: collapsibleTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={name}>
        <TableHead>
          <TableRow>
            <TableCell />
            {
              headers.map((header, index) => (
                <TableCell key={index}> {header} </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  )
}