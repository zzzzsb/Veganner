import FoodEmissionBar from "./FoodEmissionBar";
import FoodEmissionToCarBar from "./FoodEmissionToCarBar";
import CO2eEmissionWorld from "./CO2eEmission/CO2eEmissionWorld";
import CO2eEmissionKorea from "./CO2eEmission/CO2eEmissionKorea";
import WorldMeatConsumptionWorld from "./meatConsumption/WorldMeatConsumption";
function ChartView() {
  return (
    <>
      <FoodEmissionBar />
      <FoodEmissionToCarBar />
      <CO2eEmissionWorld />
      <CO2eEmissionKorea />
      <WorldMeatConsumptionWorld />
    </>
  );
}

export default ChartView;
