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
import koreaData from "../../../assets/data-analysis/json/1990-2019_Korea.json";

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

const yearArr = Object.keys(koreaData).map((item) => Number(item) + 1990);

const data = {
  // 1990 - 2019년
  labels: yearArr,
  datasets: [
    {
      label: "Korea",
      backgroundColor: "#ff6700",
      data: Object.values(koreaData),
      borderColor: "#ff6700",
      //borderWidth: 1,
    },
  ],
};

function CO2eEmissionKorea() {
  // console.log(Object.keys(worldData));
  // console.log(Object.values(Object.values(worldData)[0]));
  //console.log(Object.keys(koreaData));
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default CO2eEmissionKorea;

const Container = styled.div`
  width: 900px;
`;
