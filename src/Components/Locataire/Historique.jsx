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

export default function Locataire() {
  const defaultMaterialTheme = createTheme();
  const [tableData, setTableData] = useState([]);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch(
      `https://localhost:7047/api/Locataire/AllReservationsByIdLocataire/${localStorage.getItem(
        "id"
      )}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(tableData);
        setTableData(resp);
      });
  }, []);

  const columns = [
    {
      title: "nomProp",
      field: "nomProp",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "nomLocataire",
      field: "nomLocataire",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#dfc482" },
      headerStyle: { color: "#fff" },
    },

    {
      title: "dateRetour",
      field: "dateRetour",
      align: "center",
      grouping: false,
    },

    {
      title: "remarque",
      field: "remarque",
      filterPlaceholder: "filter",
    },
    {
      title: "mantant",
      field: "mantant",
      filterPlaceholder: "filter",
    },
    {
      title: "modePaiement",
      field: "modePaiement",
      filterPlaceholder: "filter",
    },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={columns}
          data={tableData}
          onSelectionChange={(selectedRows) => {
            const selectedItems = selectedRows.map((row) => ({
              nom: row.nom,
              prenom: row.prenom,
              idLocataire: row.idUser,
            }));
            setSelected(selectedItems);

            //console.log(selected[0].idLocataire)
          }}
          actions={[
            {
              icon: () => <SentimentVeryDissatisfiedIcon />,
              tooltip: "Liste noire",
              onClick: () => {
                fetch(
                  `https://localhost:7047/api/Admin/addToNoir/${selected[0].idLocataire}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(selected[0]),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("Success:", data);
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              },
              //isFreeAction: true,
            },
            {
              icon: () => <FavoriteIcon />,
              tooltip: "liste favoris",
              onClick: () => {
                fetch(
                  `https://localhost:7047/api/Admin/addToFavori/${selected[0].idLocataire}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(selected[0]),
                  }
                )
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("Success:", data);
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              },
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
          title="Utilisateurs"
          icons={{ Add: () => <AddIcon /> }}
        />
      </ThemeProvider>
    </div>
  );
}
