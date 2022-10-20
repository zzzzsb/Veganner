import * as L from "./List.styled";
import searchType from "../../atoms/search";
import { useRecoilState } from "recoil";

const tabs = [
  {
    groupIndex: 0,
    groupName: "전체",
  },
  {
    groupIndex: 1,
    groupName: "식당",
  },
  {
    groupIndex: 2,
    groupName: "레시피",
  },
];

export default function Tab() {
  const [searchTypeState, setSearchTypeState] = useRecoilState(searchType);

  return (
    <L.TabSection>
      <L.TabListGroup>
        {tabs.map((tab) => (
          <L.TabList
            key={tab.groupIndex}
            onClick={() =>
              setSearchTypeState((prev) => ({ ...prev, group: tab.groupIndex }))
            }
            active={searchTypeState.group === tab.groupIndex}
          >
            {tab.groupName}
          </L.TabList>
        ))}
      </L.TabListGroup>
    </L.TabSection>
  );
}
