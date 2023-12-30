import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {retrievePausedOrders,
} from "../../screens/OrdersPage/selector";

// REDUX SELECTOR
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
   // INITIALIZATIONS
  const {pausedOrders} = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value={"1"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const image_path = "/others/sandvich.jpeg";
                  return (
                    <Box className="ordersName_price">
                      <img src={image_path} className={"orderDishImg"} />
                      <p className="titleDish">Sandvich</p>
                      <Box className="priceBox">
                        <p>$7</p>
                        <img src="/icons/Close.svg" />
                        <p>3</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="total_price_box black_solid">
                <Box className="boxTotal">
                  <p>mahsulot narxi</p>
                  <p>$21</p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Yetkazish hizmati</p>
                  <p>$2</p>
                  <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narxi</p>
                  <p>$23</p>
                </Box>
                <Button
                  variant="contained"
                  color={"secondary"}
                  style={{ borderRadius: "10px" }}
                >
                  BEKOR QILISH
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "rgb(2, 136, 209)",
                    color: "rgb(255, 255, 255)",
                    borderRadius: "10px",
                  }}
                >
                  TO'LASH
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
