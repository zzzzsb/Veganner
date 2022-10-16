import * as S from "././Category.styled";
import { SetStateAction, Dispatch } from "react";

interface CategoryProps {
  setGroup: Dispatch<SetStateAction<number>>;
}
function Category(props: CategoryProps) {
  //const [group, setGroup] = useState<number>(0);
  return (
    <>
      <S.CategoryButtonBox>
        <S.CategoryButton id="식당" onClick={(e) => props.setGroup(0)}>
          식당
        </S.CategoryButton>
        <S.CategoryButton id="레시피" onClick={(e) => props.setGroup(1)}>
          레시피
        </S.CategoryButton>
      </S.CategoryButtonBox>
    </>
  );
}

export default Category;
