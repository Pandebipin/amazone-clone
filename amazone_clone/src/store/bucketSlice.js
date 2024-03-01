import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  buckets: [],
  user: { name: "", email: "" },
};
export const getBasketTotal = (bucket) => {
  const buckets = bucket?.reduce((amount, bucket) => amount + bucket.price, 0);
  return Number(buckets);
};
console.log(getBasketTotal.amount);
export const bucketSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addBucket: (state, action) => {
      const bucket = {
        id: nanoid(),
        title: action.payload,
        img: action.payload,
        info: action.payload,
        price: action.payload,
      };

      state.buckets.push(bucket);
    },
    login: (state, action) => {
      state.user = {
        name: action.payload,
        email: action.payload,
      };
    },

    logout: (state) => {
      state.user = null;
    },
    removeBucket: (state, action) => {
      state.buckets = state.buckets.filter(
        (bucket) => bucket.id !== action.payload
      );
    },
  },
});

export const { addBucket, removeBucket, login, logout } = bucketSlice.actions;
export default bucketSlice.reducer;
