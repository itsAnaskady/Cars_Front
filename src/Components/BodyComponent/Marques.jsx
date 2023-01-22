import React from "react";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider, createTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import dacia from "../../Images/bmw.svg";
import acura from "../../Images/acura.svg";
import alfa from "../../Images/alfa.svg";
import chevrolet from "../../Images/chevrolet.svg";
import fiat from "../../Images/fiat.svg";
import ford from "../../Images/volkswagen.svg";
import honda from "../../Images/honda.svg";
import jeep from "../../Images/nissan.svg";
import land from "../../Images/dacia.svg";
import mercedes from "../../Images/mercedes.svg";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Construction } from "@mui/icons-material";
const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    maxHeight: 100,
    margin: 5,
    borderRadius: "20px",
  },
  media: {
    width: "40%",
    marginLeft: "30%",
    marginTop: "5%",
    paddingTop: "40.25%", // 16:9,
  },
});

export default function Marques() {
  const defaultMaterialTheme = createTheme();
  const classes = useStyles();

  const carBrands = [
    {
      name: "dacia",
      logo: dacia,
    },
    {
      name: "Brand 2",
      logo: acura,
    },
    {
      name: "Brand 3",
      logo: alfa,
    },
    {
      name: "Brand 3",
      logo: jeep,
    },
    {
      name: "Brand 3",
      logo: fiat,
    },
    {
      name: "Brand 3",
      logo: land,
    },
    {
      name: "Brand 3",
      logo: ford,
    },
    {
      name: "Brand 3",
      logo: mercedes,
    },
  ];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7047/api/Admin/ListeMarque")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setTableData(resp);
      });
  }, []);

  return (
    <div className="App">
      <Grid container spacing={0}>
        {carBrands.map((brand) => (
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image={brand.logo} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          columns={[
            { title: "Index", field: "index" },
            { title: "Nom marque", field: "title" },
          ]}
          data={tableData.map((value, index) => ({
            index: index + 1,
            title: value,
          }))}
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

            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#4d4020", color: "#fff" },
          }}
          title="Marques"
          icons={{ Add: () => <AddIcon /> }}
        />
      </ThemeProvider>
    </div>
  );
}
