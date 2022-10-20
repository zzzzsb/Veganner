import { useNavigate } from "react-router-dom";
import * as L from "./List.styled";
import { FaRegThumbsUp } from "react-icons/fa";

interface Props {
  postList: {
    ID: number;
    Groups: number;
    Type: string;
    Title: string;
    Thumbnail: string;
    CreationTime: string;
    User: string;
    Likes: number;
  }[];
}

function ListCard({ postList }: Props) {
  const navigate = useNavigate();

  return (
    <L.CardLayout>
      {postList.map((post) => {
        return (
          <>
            <L.Card key={post.ID} onClick={() => navigate(`/board/${post.ID}`)}>
              <L.CardHeader>
                <L.CardHeaderProfile></L.CardHeaderProfile>
                <L.CardHeaderText>{post.User}</L.CardHeaderText>
                <FaRegThumbsUp />
                {post.Likes}
              </L.CardHeader>
              <L.CardHeaderImage src={`../../../../back/${post.Thumbnail}`} />
              <L.CardBottom>
                <L.CardBottomTitle>{post.Title}</L.CardBottomTitle>
                <L.CardBottomDate>{post.CreationTime}</L.CardBottomDate>
              </L.CardBottom>
            </L.Card>
          </>
        );
      })}
    </L.CardLayout>
  );
}

export default ListCard;
