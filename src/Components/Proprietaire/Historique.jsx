import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider, createTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function Historique() {
  const defaultMaterialTheme = createTheme();
  const [tableData, setTableData] = useState([
    {
      Marque: "Dacia",
      Category: "automatique",
      Locataire: "YASSINE BOUFNICHEL",
      DateReservation: "12/03/2002",
    },
    {
      Marque: "Renault",
      Category: "manuel",
      Locataire: "YASSINE BOUFNICHEL",
      DateReservation: "12/06/2002",
    },
  ]);
  const columns = [
    {
      title: "Marque",
      field: "Marque",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Category",
      field: "Category",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },

    {
      title: "Locataire",
      field: "Locataire",
      align: "center",
      grouping: false,
    },

    {
      title: "DateReservation",
      field: "DateReservation",
      filterPlaceholder: "filter",
    },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          editable={{
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                setTimeout(() => resolve(), 1000);
              }),
          }}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,

            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,

            exportAllData: true,
            exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: true,
            showTextRowsSelected: true,

            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#4d4020", color: "#fff" },
          }}
          title="Historique des reservation"
          icons={{ Add: () => <AddIcon /> }}
        />
      </ThemeProvider>
    </div>
  );
}
