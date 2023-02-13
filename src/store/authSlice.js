import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: false },
  reducers: {
    login(state, action) {
      const { username, password } = action.payload
      const isValidUser = checkValidUser(username, password)
      if (isValidUser) {
        state.isLoggIn = true
      }
    },
    logout(state) {
      state.isLoggIn = false
    },
  },
})

function checkValidUser(username, password) {
  const validUsers = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ]
  return validUsers.some((user) => user.username === username && user.password === password)
}

export const authActions = authSlice.actions
export default authSlice
