import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import worldData from "../../../assets/data-analysis/json/1990-2019_World.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      //display: false,
    },
    title: {
      display: true,
      text: "대륙 별 온실가스 배출량",
    },
  },
  scales: {
    x: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
    },
    y: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
    },
  },
};

const yearArr = Object.keys(Object.values(worldData)[0]).map(
  (item) => Number(item) + 1990
);
const continentArr = Object.keys(worldData);
const getEmissionArr = (i: number) => {
  return Object.values(Object.values(worldData)[i]);
};
const data = {
  // 1990 - 2019년
  labels: yearArr,
  datasets: [
    {
      label: continentArr[0],
      backgroundColor: "#ff6700",
      data: getEmissionArr(0),
      borderColor: "#ff6700",
      //borderWidth: 1,
    },
    {
      label: continentArr[1],
      backgroundColor: "#803ad0",
      data: getEmissionArr(1),
      borderColor: "#803ad0",
      //borderWidth: 1,
    },
    {
      label: continentArr[2],
      backgroundColor: "#7fdd05",
      data: getEmissionArr(2),
      borderColor: "#7fdd05",
      //borderWidth: 1,
    },
    {
      label: continentArr[3],
      backgroundColor: "#cc2782",
      data: getEmissionArr(3),
      borderColor: "#cc2782",
      //borderWidth: 1,
    },
    {
      label: continentArr[4],
      backgroundColor: "#1256cc",
      data: getEmissionArr(4),
      borderColor: "#1256cc",
      //borderWidth: 1,
    },
    {
      label: continentArr[5],
      backgroundColor: "#ff71bf",
      data: getEmissionArr(5),
      borderColor: "#ff71bf",
      //borderWidth: 1,
    },
    {
      label: continentArr[6],
      backgroundColor: "#04BF8A",
      data: getEmissionArr(6),
      borderColor: "#04BF8A",
      //borderWidth: 1,
    },
  ],
};

function CO2eEmissionWorld() {
  // console.log(Object.keys(worldData));
  // console.log(Object.values(Object.values(worldData)[0]));
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default CO2eEmissionWorld;

const Container = styled.div`
  width: 900px;
`;
