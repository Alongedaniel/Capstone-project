import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/FirebaseAuth";

const auth = getAuth(app);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
        userData.name
      );
      await updateProfile(userCredential.user, {
        displayName: userData.name,
      });
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
);
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: "idle",
    error: null,
    type: '',
    authenticated: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = "pending";
        state.user = null
        state.error = null
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.authenticated = true
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("auth", JSON.stringify(state.authenticated));
        state.error = null
        state.type = action.type
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = "failed";
        state.user = null
        state.error = action.error.message;
        state.type = action.type
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.user = null
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.authenticated = true
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("auth", JSON.stringify(state.authenticated));
        state.error = null
        state.type = action.type
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.user = null
        state.error = action.error.message;
        state.type = action.type
      });
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = "pending";
        state.user = null
        state.error = null
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        localStorage.removeItem("user");
        state.authenticated = false
        localStorage.setItem("auth", JSON.stringify(state.authenticated));
        state.error = null
        state.type = action.type
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = "failed";
        state.user = null
        state.error = action.error.message;
        state.type = action.type
      });
  },
});

// const initialState = {
//   loading: false,
//   user: null,
//   error: "",
//   errorCode: ''
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     createUser: async (state, action) => {
//       try {
//         state.loading = true
//         const userCredential = await createUserWithEmailAndPassword(auth, action.payload)
//         state.user = userCredential.user;
//         state.error = '';
//         state.loading = false;
//       }
//         catch (error) {
//            state.errorCode = error.code;
//           state.error = error.message;
//           state.loading = false;
//           // ..
//         };
//     }
//   },
//   //   extraReducers: (builder) => {
//   //       builder.addCase(fetchUsers.pending, state => {
//   //           state.loading = true;
//   //       })
//   //       builder.addCase(fetchUsers.success, (state, action) => {
//   //           state.loading = false;
//   //           state.users = action.payload;
//   //           state.error = ''
//   //       })
//   //       builder
//   //         .addCase(fetchUsers.rejected, (state, action) => {
//   //           state.loading = false;
//   //           state.users = [];
//   //           state.error = action.payload;
//   //         })
//   //         builder.addDefaultCase((state, action) => {});
//   //   }
// });
// export { createUser }
// export const { createUser } =
//   userSlice.actions;
export default userSlice.reducer;
