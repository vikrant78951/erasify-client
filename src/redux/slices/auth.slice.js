import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "@constants/Constants";
import { getDeviceFinterPrint } from "../../utility/fingerprint.util";

const initialState = {
  user: null,
  authenticated: false,
  loading: false,
};

// Get session
export const getSession = createAsyncThunk(
  "user/getSession",
  async (_, { rejectWithValue }) => {
    try {
      const fingerprint = await getDeviceFinterPrint();
      const { data } = await axios.post(
        API.session,
        { fingerprint },
        { withCredentials: true },
      );

      if (data.success) {
        return data;
      }

      return rejectWithValue("Invalid session");
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch session",
      );
    }
  },
);

// Logout user
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(API.logout, { withCredentials: true });
      return null;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      state.authenticated = true;
    },
    updateCredit: (state, action) => {
      state.user.credits = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.authenticated = action.payload.user.role !== "guest";
        state.loading = false;
      })
      .addCase(getSession.rejected, (state) => {
        state.user = null;
        state.authenticated = false;
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.authenticated = false;
      });
  },
});

export const { addUser, updateCredit } = authSlice.actions;
export default authSlice.reducer;
