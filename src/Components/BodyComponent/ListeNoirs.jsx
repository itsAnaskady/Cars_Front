import React from "react";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider, createTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
export default function ListeNoirs() {
  const defaultMaterialTheme = createTheme();
  const [tableData, setTableData] = useState([]);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7047/api/Admin/ListeNoir")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(tableData);
        setTableData(resp);
      });
  }, []);

  const columns = [
    {
      title: "Nom",
      field: "name",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Prenom",
      field: "firstName",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Addresse",
      field: "adress",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "telephone",
      field: "phoneNumber",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Mail",
      field: "email",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Role",
      field: "role",
      sorting: true,
      filtering: true,
      filterPlaceholder: "filter",
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

                console.log(oldRow.idUser);

                setTableData(updatedData);
                setTimeout(() => resolve(), 500);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                async function handleDelete() {
                  console.log(selectedRow);
                }
                handleDelete();
                setTimeout(() => resolve(), 1000);
              }),
          }}
          onSelectionChange={(selectedRows) => {
            const selectedItems = selectedRows.map((row) => ({
              nom: row.nom,
              prenom: row.prenom,
              idLocataire: row.idUser,
            }));
            setSelected(selectedItems);

            // console.log(selected.idLocataire)
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
          title="Liste noire"
          icons={{ Add: () => <AddIcon /> }}
        />
      </ThemeProvider>
    </div>
  );
}
