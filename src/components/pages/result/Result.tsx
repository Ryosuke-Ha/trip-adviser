import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { TripSearchResult } from "../../../models/TripSearchForm";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  CurrencyYenOutlined,
  LocationOnOutlined,
  LuggageOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { handleNextResults } from "../../../store/action";

const ResultFelid = () => {
  const results = useSelector(
    (state: RootState) => state.formData.searchResult
  );

  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  const goHomePage = () => {
    navigate("/");
  };

  function chunkArray(array: any[], size: number) {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  }

  const renderResults = () => {
    const groupedResults = chunkArray(results, 3); // 3つずつのグループに分割

    return groupedResults.map(
      (group: TripSearchResult[], groupIndex: number) => (
        <div
          key={groupIndex}
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: 20,
          }}
        >
          {group.map((result: TripSearchResult, index: number) => (
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                borderRadius: 5,
                paddingRight: 10,
                border: "aliceblue solid 5px",
              }}
              key={index}
            >
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.place}
                  </Typography>
                </ListItemAvatar>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LuggageOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="魅力な理由"
                  secondary={result.reasons.join("\n")}
                  style={{ whiteSpace: "pre-line" }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="おすすめスポット"
                  secondary={result.recommends.join("\n")}
                  style={{ whiteSpace: "pre-line" }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CurrencyYenOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="旅行費目安"
                  secondary={result.prices.join("\n")}
                  style={{ whiteSpace: "pre-line" }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WarningAmberOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="注意点"
                  secondary={result.cautions.join("\n")}
                  style={{ whiteSpace: "pre-line" }}
                />
              </ListItem>
            </List>
          ))}
        </div>
      )
    );
  };

  return (
    <>
      {results.length !== 0 && renderResults()}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        {results.length !== 0 && results.length === 12 && (
          <Button
            type="button"
            variant="contained"
            onClick={() => handleNextResults(dispatch)}
            style={{ marginLeft: 10, width: "80%", height: "70%" }}
          >
            次の3件を取得
          </Button>
        )}
        <Button
          type="button"
          variant="contained"
          onClick={goHomePage}
          style={{ marginLeft: 10, width: "80%", height: "70%" }}
        >
          条件選択に戻る
        </Button>
      </div>
    </>
  );
};

export default ResultFelid;
