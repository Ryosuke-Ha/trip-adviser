import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { TripSearchResult } from "../../../models/TripSearchForm";
import {
  Avatar,
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

const ResultFelid = () => {
  const results = useSelector(
    (state: RootState) => state.formData.searchResult
  );
  return (
    <>
      {results.map((result: TripSearchResult, index: number) => {
        return (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
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
        );
      })}
    </>
  );
};

export default ResultFelid;
