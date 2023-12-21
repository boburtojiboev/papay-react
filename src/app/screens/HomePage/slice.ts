import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticles: [],
  newsBoArticles: [],
};

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setTopRestaurants: (state, action) => {
            state.topRestaurants = action.payload
        },
        setbestRestaurants: (state, action) => {
            state.bestRestaurants = action.payload
        },
        settrendProducts: (state, action) => {
            state.trendProducts = action.payload
        },
        setbestBoArticles: (state, action) => {
            state.bestBoArticles = action.payload
        },
        settrendBoArticles: (state, action) => {
            state.trendBoArticles = action.payload
        },
        setnewsBoArticles: (state, action) => {
            state.newsBoArticles = action.payload
        },
       
    }
});

export const {
    setTopRestaurants,
    setbestRestaurants,
    settrendProducts,
    setbestBoArticles,
    settrendBoArticles,
    setnewsBoArticles,
  } = HomePageSlice.actions;
  
  const HomePageReducer = HomePageSlice.reducer;
  export default HomePageReducer;