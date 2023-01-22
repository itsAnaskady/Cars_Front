import React from "react";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider, createTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
export default function Reservations() {
  const defaultMaterialTheme = createTheme();

  const [tableData, setTableData] = useState([
    {
      Matricule_voiture: "euiorqwewe",
      Nom_Locataire: "Mouhsin",
      Date_Reservation: "12/08/2022",
      Date_Retour: "12/09/2022",
      Montant: "1234",
    },
  ]);

  useEffect(() => {
    fetch("https://localhost:7047/api/Locataire/AllReservations")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(tableData);
        setTableData(resp);
      });
  }, []);

  const columns = [
    {
      title: "Matricule Voiture",
      field: "Matricule_voiture",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Nom Locataire",
      field: "Nom_Locataire",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Date Reservation",
      field: "Date_Reservation",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Date Retour",
      field: "Date_Retour",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Montant",
      field: "Montant",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData([...tableData, newRow]);

                setTimeout(() => resolve(), 500);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;
                setTableData(updatedData);
                setTimeout(() => resolve(), 500);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                setTimeout(() => resolve(), 1000);
              }),
          }}
          actions={[
            {
              icon: () => <SentimentVeryDissatisfiedIcon />,
              tooltip: "Liste noire",
              onClick: (e, data) => console.log(data),
              //isFreeAction: true,
            },
            {
              icon: () => <FavoriteIcon />,
              tooltip: "liste favoris",
              onClick: (e, data) => console.log(data),
              //isFreeAction: true,
            },
            {
              icon: () => <HelpIcon />,
              tooltip: "Probleme",
              onClick: (e, data) => console.log(data),
              //isFreeAction: true,
            },
          ]}
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
          title="Offres"
          icons={{ Add: () => <AddIcon /> }}
        />
      </ThemeProvider>
    </div>
  );
}
